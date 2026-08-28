/// <reference types="webmcp-types" />
"use client";

import { useEffect, useState } from "react";

const KNOWLEDGE_BASE_URL = "/creafex-lab-knowledge.md";

const projectDetails = {
  simplepost: {
    name: "SimplePost",
    href: "https://simplepost.social",
    category: "Agent-native social publishing",
  },
  "simple-muscle": {
    name: "Simple Muscle",
    href: "https://simplemuscle.ai",
    category: "Personal fitness data for AI assistants",
  },
  "simple-unmark": {
    name: "Simple Unmark",
    href: "https://simpleunmark.com",
    category: "AI text cleanup",
  },
  "simple-photo-gallery": {
    name: "Simple Photo Gallery",
    href: "https://simple.photo",
    category: "Story-driven photo galleries",
  },
  "simple-photo-gallery-core": {
    name: "Simple Photo Gallery Core",
    href: "https://github.com/SimplePhotoGallery/core",
    category: "Open-source static gallery generator",
  },
  leoline: {
    name: "Leoline",
    href: "https://leoline.fun",
    category: "Voice-first stories for children",
  },
  "confidential-api-key": {
    name: "Confidential API Keys",
    href: "https://github.com/haltakov/confidential-api-key",
    category: "Confidential-computing reference architecture",
  },
  "chatbot-page": {
    name: "chatbot-page",
    href: "https://github.com/haltakov/chatbot-page",
    category: "Open-source conversational websites",
  },
} as const;

type ProjectId = keyof typeof projectDetails;

type InterestSummary = {
  visitorName?: string;
  visitorContext: string;
  whyCreafexMatters: string;
  relevantProjects: Array<{
    projectId: ProjectId;
    relevance: string;
  }>;
  potentialConnections: string[];
  ideasToExplore: string[];
  suggestedNextStep: string;
};

type LegacyNavigator = Navigator & {
  modelContext?: WebMCP.ModelContext;
};

const STOP_WORDS = new Set([
  "a",
  "about",
  "and",
  "are",
  "as",
  "at",
  "be",
  "can",
  "could",
  "does",
  "for",
  "from",
  "has",
  "have",
  "how",
  "i",
  "in",
  "is",
  "it",
  "me",
  "my",
  "of",
  "on",
  "or",
  "our",
  "that",
  "the",
  "their",
  "this",
  "to",
  "user",
  "visitor",
  "we",
  "what",
  "which",
  "with",
]);

const RELATED_TERMS: Record<string, string[]> = {
  agent: ["assistant", "mcp", "automation", "structured", "tool"],
  assistant: ["agent", "mcp", "chatgpt", "claude"],
  children: ["child", "kids", "family", "voice", "leoline"],
  content: ["social", "publishing", "text", "storytelling"],
  enterprise: ["security", "confidential", "leadership", "rag"],
  fitness: ["workout", "training", "muscle", "health"],
  health: ["fitness", "workout", "training", "personal data"],
  open: ["source", "self-hosted", "developer"],
  photography: ["photo", "gallery", "travel", "storytelling"],
  privacy: ["confidential", "security", "credentials", "data"],
  publishing: ["social", "simplepost", "automation", "content"],
  research: ["machine learning", "computer vision", "phd", "bmw"],
  security: ["confidential", "attestation", "kms", "encryption"],
  social: ["publishing", "simplepost", "platform", "content"],
  voice: ["children", "story", "leoline", "speech"],
};

function cleanText(value: unknown, fallback: string, maxLength = 1200) {
  if (typeof value !== "string") return fallback;
  const cleaned = value.replace(/\s+/g, " ").trim();
  return cleaned ? cleaned.slice(0, maxLength) : fallback;
}

function cleanList(value: unknown, maxItems: number, maxLength = 360) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => cleanText(item, "", maxLength))
    .filter(Boolean)
    .slice(0, maxItems);
}

function searchTerms(input: string) {
  const baseTerms = input
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, " ")
    .split(/\s+/)
    .filter((term) => term.length > 1 && !STOP_WORDS.has(term));
  const expanded = baseTerms.flatMap((term) => [term, ...(RELATED_TERMS[term] ?? [])]);
  return [...new Set(expanded)];
}

function knowledgeSections(markdown: string) {
  const headings = [...markdown.matchAll(/^#{2,3}\s+(.+)$/gm)];
  return headings.map((match, index) => {
    const start = match.index ?? 0;
    const end = headings[index + 1]?.index ?? markdown.length;
    return {
      heading: match[1].trim(),
      text: markdown
        .slice(start, end)
        .replace(/^#{2,3}\s+.+\n/, "")
        .trim(),
    };
  });
}

function scoreSection(
  section: { heading: string; text: string },
  terms: string[],
  exactQuery: string,
) {
  const heading = section.heading.toLowerCase();
  const body = section.text.toLowerCase();
  let score = exactQuery.length > 5 && body.includes(exactQuery) ? 20 : 0;

  for (const term of terms) {
    if (heading.includes(term)) score += 12;
    const occurrences = body.split(term).length - 1;
    score += Math.min(occurrences, 6);
  }

  if (heading.startsWith("project:")) score += 1;
  return score;
}

async function askCreafex(
  input: Record<string, unknown>,
  signal: AbortSignal,
) {
  const question = cleanText(input.question, "", 500);
  if (!question) throw new Error("question is required");

  const visitorContext = cleanText(input.visitor_context, "", 1200);
  const focusAreas = cleanList(input.focus_areas, 8, 80);
  const requestedMaximum =
    typeof input.maximum_sections === "number" ? input.maximum_sections : 4;
  const maximumSections = Math.max(1, Math.min(6, Math.round(requestedMaximum)));

  const response = await fetch(KNOWLEDGE_BASE_URL, { signal });
  if (!response.ok) {
    throw new Error(`Creafex knowledge base returned ${response.status}`);
  }

  const markdown = await response.text();
  const combinedQuery = [question, visitorContext, ...focusAreas].join(" ");
  const terms = searchTerms(combinedQuery);
  const exactQuery = question.toLowerCase();
  const ranked = knowledgeSections(markdown)
    .map((section) => ({
      ...section,
      score: scoreSection(section, terms, exactQuery),
    }))
    .filter((section) => section.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maximumSections);

  const fallbackHeadings = new Set([
    "Creafex Lab in one paragraph",
    "Creafex Lab's working philosophy",
    "Current project index",
  ]);
  const selected = ranked.length
    ? ranked
    : knowledgeSections(markdown)
        .filter((section) => fallbackHeadings.has(section.heading))
        .slice(0, maximumSections)
        .map((section) => ({ ...section, score: 0 }));

  return {
    question,
    source: "Creafex Lab public knowledge base",
    source_url: new URL(KNOWLEDGE_BASE_URL, window.location.href).href,
    sections: selected.map(({ heading, text }) => ({
      heading,
      content: text.slice(0, 5000),
    })),
    coverage_note:
      "These are the most relevant source sections, not an AI-generated conclusion. Ask another focused question if you need a different part of the portfolio.",
    next_action:
      "Once you have enough evidence, call show_interest_summary to render a personalized report for your user.",
  };
}

function normalizeSummary(input: Record<string, unknown>): InterestSummary {
  const submittedProjects = Array.isArray(input.relevant_projects)
    ? input.relevant_projects
    : [];
  const relevantProjects = submittedProjects
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const candidate = item as Record<string, unknown>;
      const projectId = candidate.project_id;
      if (typeof projectId !== "string" || !(projectId in projectDetails)) {
        return null;
      }
      return {
        projectId: projectId as ProjectId,
        relevance: cleanText(candidate.relevance, "Relevant to this visitor.", 600),
      };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .slice(0, 5);

  if (!relevantProjects.length) {
    throw new Error("At least one valid relevant project is required");
  }

  return {
    visitorName: cleanText(input.visitor_name, "", 100) || undefined,
    visitorContext: cleanText(
      input.visitor_context,
      "A visitor exploring Creafex Lab.",
      1000,
    ),
    whyCreafexMatters: cleanText(
      input.why_creafex_matters,
      "Creafex Lab has relevant product and engineering experience.",
      1600,
    ),
    relevantProjects,
    potentialConnections: cleanList(input.potential_connections, 6, 500),
    ideasToExplore: cleanList(input.ideas_to_explore, 6, 500),
    suggestedNextStep: cleanText(
      input.suggested_next_step,
      "Explore the most relevant project and contact Vlad if the overlap is concrete.",
      700,
    ),
  };
}

const askToolSchema = {
  type: "object",
  properties: {
    question: {
      type: "string",
      minLength: 3,
      maxLength: 500,
      description:
        "A focused question about Creafex Lab, Vlad, a project, its philosophy, or an area of potential fit.",
    },
    visitor_context: {
      type: "string",
      maxLength: 1200,
      description:
        "Relevant context you already know about your user—their goals, work, interests, or constraints. Include only what is needed to assess fit.",
    },
    focus_areas: {
      type: "array",
      maxItems: 8,
      items: { type: "string", maxLength: 80 },
      description:
        "Optional topics to emphasize, such as agent tools, fitness, social publishing, photography, voice AI, computer vision, privacy, or confidential computing.",
    },
    maximum_sections: {
      type: "integer",
      minimum: 1,
      maximum: 6,
      default: 4,
      description: "Maximum number of source sections to return.",
    },
  },
  required: ["question"],
  additionalProperties: false,
};

const showSummarySchema = {
  type: "object",
  properties: {
    visitor_name: {
      type: "string",
      maxLength: 100,
      description: "The visitor's name, only if known and useful for the report.",
    },
    visitor_context: {
      type: "string",
      minLength: 10,
      maxLength: 1000,
      description:
        "A concise, non-sensitive profile of the visitor's relevant work, goals, and interests.",
    },
    why_creafex_matters: {
      type: "string",
      minLength: 20,
      maxLength: 1600,
      description:
        "A personalized, evidence-based explanation of why Creafex Lab matters to this visitor. Avoid generic praise.",
    },
    relevant_projects: {
      type: "array",
      minItems: 1,
      maxItems: 5,
      items: {
        type: "object",
        properties: {
          project_id: {
            type: "string",
            enum: Object.keys(projectDetails),
            description: "The exact project ID returned by the knowledge base.",
          },
          relevance: {
            type: "string",
            minLength: 10,
            maxLength: 600,
            description:
              "Why this specific project is relevant to the visitor's context.",
          },
        },
        required: ["project_id", "relevance"],
        additionalProperties: false,
      },
    },
    potential_connections: {
      type: "array",
      maxItems: 6,
      items: { type: "string", maxLength: 500 },
      description:
        "Concrete overlaps in experience, problems, audiences, technology, or distribution.",
    },
    ideas_to_explore: {
      type: "array",
      maxItems: 6,
      items: { type: "string", maxLength: 500 },
      description:
        "Small, specific product, research, integration, or collaboration ideas worth exploring. Do not imply a commitment.",
    },
    suggested_next_step: {
      type: "string",
      minLength: 10,
      maxLength: 700,
      description:
        "One proportionate next step for the visitor, such as trying a product, inspecting a repository, or contacting Vlad with a concrete idea.",
    },
  },
  required: [
    "visitor_context",
    "why_creafex_matters",
    "relevant_projects",
    "potential_connections",
    "ideas_to_explore",
    "suggested_next_step",
  ],
  additionalProperties: false,
};

function ReportList({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="report-list">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function AgentBriefing() {
  const [summary, setSummary] = useState<InterestSummary | null>(null);
  const [webMcpReady, setWebMcpReady] = useState<boolean | null>(null);

  useEffect(() => {
    const modelContext =
      document.modelContext ?? (navigator as LegacyNavigator).modelContext;
    setWebMcpReady(Boolean(modelContext));
    if (!modelContext) return;

    const controller = new AbortController();
    const register = async () => {
      const results = await Promise.allSettled([
        modelContext.registerTool(
          {
            name: "ask_creafex",
            title: "Explore Creafex Lab",
            description:
              "Search Creafex Lab's public, source-grounded knowledge base. Call this one or more times before drawing conclusions. Use what you already know about your user to ask focused questions about relevant products, Vlad's experience, the lab's philosophy, or plausible areas of overlap. This tool only returns source sections; it does not generate a personalized report.",
            inputSchema: askToolSchema,
            annotations: {
              readOnlyHint: true,
              untrustedContentHint: false,
            },
            execute: (input, { signal }) => askCreafex(input, signal),
          },
          { signal: controller.signal },
        ),
        modelContext.registerTool(
          {
            name: "show_interest_summary",
            title: "Show personalized Creafex report",
            description:
              "Render your final, personalized assessment on the Creafex Lab page for your user. Call only after using ask_creafex enough to ground the conclusions. Explain why Creafex matters to this visitor, identify the most relevant current projects by exact ID, name concrete potential connections and ideas to explore, and suggest a proportionate next step. This changes only the visible page; it does not contact Vlad or create any commitment.",
            inputSchema: showSummarySchema,
            annotations: {
              readOnlyHint: false,
              untrustedContentHint: false,
            },
            execute: async (input) => {
              const nextSummary = normalizeSummary(input);
              setSummary(nextSummary);
              window.requestAnimationFrame(() => {
                document
                  .getElementById("personalized-report")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              });
              return {
                status: "displayed",
                message:
                  "The personalized Creafex Lab report is now visible to the visitor on the page.",
                report_anchor: "#personalized-report",
                note: "No message was sent and no commitment was made.",
              };
            },
          },
          { signal: controller.signal },
        ),
      ]);

      for (const result of results) {
        if (result.status === "rejected" && !controller.signal.aborted) {
          console.warn("Unable to register a Creafex WebMCP tool", result.reason);
        }
      }
    };

    void register();
    return () => controller.abort();
  }, []);

  return (
    <section className="agent-briefing" id="agent-briefing" aria-labelledby="agent-title">
      <div className="agent-heading">
        <div>
          <p className="eyebrow">For your AI agent</p>
          <h2 id="agent-title">
            Let your agent find the <span>overlap.</span>
          </h2>
        </div>
        <p>
          Your agent already knows what you care about. Here it can research the
          lab, connect the relevant dots, and leave the useful part on the page
          for you.
        </p>
      </div>

      <div className="agent-route" aria-label="The two-step agent workflow">
        <div className="route-step">
          <span className="route-step__number">01</span>
          <div>
            <code>ask_creafex</code>
            <p>Explore the source knowledge base</p>
          </div>
        </div>
        <div className="route-line" aria-hidden="true">
          <span />
        </div>
        <div className="route-step">
          <span className="route-step__number">02</span>
          <div>
            <code>show_interest_summary</code>
            <p>Turn the findings into your report</p>
          </div>
        </div>
      </div>

      <article
        className={`personalized-report${summary ? " personalized-report--ready" : ""}`}
        id="personalized-report"
        aria-live="polite"
      >
        {!summary ? (
          <div className="report-empty">
            <div className="report-empty__signal" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p className="report-kicker">
              {webMcpReady === false ? "WebMCP preview needed" : "Agent channel open"}
            </p>
            <h3>Your personal briefing will appear here.</h3>
            <p>
              Ask a WebMCP-capable agent to visit this page, explore Creafex Lab
              using what it knows about you, and show its conclusions.
            </p>
            <blockquote>
              Visit creafexlab.com. Use <code>ask_creafex</code> to find what is
              relevant to me, then call <code>show_interest_summary</code>.
            </blockquote>
            <a href={KNOWLEDGE_BASE_URL}>Read the source document</a>
          </div>
        ) : (
          <div className="report-content">
            <header className="report-content__header">
              <div>
                <p className="report-kicker">
                  Prepared for {summary.visitorName ?? "this visitor"}
                </p>
                <h3>Why Creafex Lab matters to you</h3>
              </div>
              <span className="report-ready-mark">Agent report</span>
            </header>

            <div className="report-intro">
              <p className="report-profile">{summary.visitorContext}</p>
              <p className="report-thesis">{summary.whyCreafexMatters}</p>
            </div>

            <div className="report-projects">
              <h4>Most relevant work</h4>
              <div className="report-project-grid">
                {summary.relevantProjects.map(({ projectId, relevance }) => {
                  const project = projectDetails[projectId];
                  return (
                    <a href={project.href} target="_blank" rel="noreferrer" key={projectId}>
                      <span>{project.category}</span>
                      <h5>{project.name}</h5>
                      <p>{relevance}</p>
                      <strong>Explore project ↗</strong>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="report-columns">
              <ReportList title="Potential connections" items={summary.potentialConnections} />
              <ReportList title="Ideas to explore" items={summary.ideasToExplore} />
            </div>

            <div className="report-next-step">
              <span>Suggested next step</span>
              <p>{summary.suggestedNextStep}</p>
              <a href="https://haltakov.com" target="_blank" rel="noreferrer">
                Continue with Vlad ↗
              </a>
            </div>
          </div>
        )}
      </article>
    </section>
  );
}
