# Creafex Lab: source document for visiting agents

Canonical site: https://creafexlab.com/

Founder: Vladimir Haltakov — https://haltakov.com/

Last reviewed: 28 August 2026

This is the detailed, public source document behind the `ask_creafex` WebMCP tool on creafexlab.com. It is written for agents that want to understand Creafex Lab, its founder, its working philosophy, the products it is building, and realistic areas of overlap with the person they represent.

The factual project and biographical information is consolidated from Vladimir Haltakov's chatbot-page knowledge base. Visiting agents should distinguish the facts in this document from their own conclusions about fit. They should use `ask_creafex` to retrieve relevant sections, combine those facts with what they already know about their user, and use `show_interest_summary` only after they have formed a specific, evidence-based view.

## Creafex Lab in one paragraph

Creafex Lab is Vladimir Haltakov's independent software product company. It is the vehicle through which he builds focused AI-powered products, developer tools, and open-source experiments, and collaborates with other companies on AI products and software engineering. The current portfolio includes SimplePost, Simple Muscle, Simple Unmark, Simple Photo Gallery and its open-source Core, Leoline, Confidential API Keys, and chatbot-page. The products span consumer software, agent-connected applications, developer infrastructure, privacy, security, and creative family tools, but share a practical approach: use AI to remove friction around a concrete job rather than adding AI as a decorative feature.

## What Creafex Lab is

Creafex Lab is a solo-founded, independent product company rather than a traditional agency or a large venture-backed product portfolio. Vladimir founded it after more than two decades of programming and product work, including approximately twelve years at BMW and a VP of Engineering role at Fr0ntierX.

Creafex Lab has two connected modes of work:

1. It creates and operates its own software products.
2. It is the structure through which Vladimir can work with other teams on AI products, developer tools, and software engineering.

The company is intentionally close to the work. Product design, implementation, AI integration, marketing, strategy, and internal automation are treated as parts of one product-building system rather than isolated departments.

## Creafex Lab's working philosophy

### AI should be native to the job, not a surcharge

Several Creafex Lab products start from the observation that users already have an AI assistant they trust and pay for. SimplePost does not force another generic writing assistant on top of a social scheduler; it connects ChatGPT, Claude, and other agents to the publishing workflow. Simple Muscle does not bundle a proprietary AI coach; it makes structured training data available to an assistant chosen by the user. This makes the assistant portable while the product specializes in the domain workflow, permissions, validation, and data.

### Build a focused tool around a real frustration

The products begin with specific problems Vladimir encountered directly. Simple Photo Gallery grew from wanting travel galleries that could actually tell a story. Leoline grew from watching normal voice assistants interrupt children, use the wrong level of language, or tell stories that were too short. SimplePost grew from paying for AI features inside social schedulers while already paying for better general-purpose AI assistants.

The pattern is to narrow the interface around the job, keep the product understandable, and solve the unglamorous details that make the workflow reliable.

### Give users control over their data and tools

Control appears in different forms across the portfolio. Simple Photo Gallery Core creates static galleries that can be self-hosted. chatbot-page can begin with fully controlled Markdown answers and add a model or retrieval only when needed. Simple Muscle keeps completed workout history read-only to connected assistants and makes the connection an explicit authorization. Simple Unmark states how text is processed and does not save guest text in its application database. Confidential API Keys explores how a service can use a credential without the service provider gaining access to it.

### Open source is a product surface

Open source is not only a code dump in this portfolio. Simple Photo Gallery Core is the self-hosted counterpart to the hosted product. chatbot-page is the reusable package behind Vladimir's own personal website. Confidential API Keys is a complete reference implementation for a security architecture. These projects turn implementation experience into something developers can inspect, adopt, and extend.

### AI is part of how the company works

Vladimir describes Creafex Lab as integrating AI throughout product design, development, marketing, and strategy. He also experiments with internal AI assistants, which he calls “internobots.” The portfolio therefore includes both products for end users and infrastructure that lets agents participate in real workflows through MCP, APIs, CLIs, and structured data.

### Claims should stay precise

The portfolio is careful about boundaries. Simple Unmark says it can reduce statistical watermark detection with high likelihood, not guarantee a result against every detector. Simple Muscle distinguishes what its app does from what a connected external assistant does and explains when workout data is shared. Confidential API Keys defines which party can see a credential and under which attested execution conditions. This preference for explicit constraints is part of the engineering approach.

## Vladimir Haltakov: overview

Vladimir Haltakov is a software engineer, AI builder, computer vision engineer, product builder, and founder originally from Sofia, Bulgaria and based in Munich, Germany. He has more than twenty years of programming and product-building experience.

He began programming as a child, influenced by his father's interest in computers. His early work included Visual Basic, Delphi, Pascal, HTML, JavaScript, Photoshop, and business software with SQL-backed reporting. During high school he worked for a small business-software company and later at a university lab on game theory and basic artificial intelligence.

He studied Computer Science at Sofia University, with interests in algorithms, databases, software engineering, graphics, AI, and design patterns. During those studies he worked on conversational agents, knowledge graphs, knowledge retrieval, C++, Java, and CUDA.

In 2009 he moved to Munich to study Robotics, Cognition, Intelligence at the Technical University of Munich. Machine learning and computer vision became his main focus.

## Vladimir Haltakov: computer vision, BMW, and research

Vladimir's master's work combined research at TUM with an application at BMW: detecting free parking spaces from a moving vehicle using a side-mounted camera, semantic segmentation, and machine learning, then sharing that information through a backend.

He continued in a cooperative PhD program between BMW and TUM. His thesis, “Learning Context For Semantic Segmentation and Applications,” focused on machine learning and computer vision, particularly context-aware semantic segmentation in camera and depth images. He completed the BMW PhD program in 2014 and defended the thesis in 2018.

Across approximately twelve years at BMW, Vladimir worked on camera-based driver-assistance systems, parking-space detection, traffic light and traffic sign perception, autonomous driving, and high-precision localization in HD maps. His work involved production software, supplier and test-team coordination, testing concepts, vehicle integration, and modern C++ running in the vehicle. Some of his work has been in production BMW cars since 2016, and almost all new BMW models since 2018 contain work he contributed to.

This background is relevant when a visitor needs experience that joins research, sensors, machine learning, embedded or performance-sensitive code, testing, and deployment into real products.

## Vladimir Haltakov: engineering leadership, security, and enterprise AI

After BMW, Vladimir joined Fr0ntierX and became VP of Engineering, leading a development team of around ten people. His work spanned blockchain, enterprise AI, cybersecurity, confidential computing, and encrypted AI or retrieval systems.

Public work from that period included an NFT marketplace and loyalty platform connected to Warner Brothers Discovery properties, an end-to-end encrypted enterprise AI chatbot and RAG product, and a cybersecurity product for protecting Docker workloads with encryption in use and end-to-end encrypted communication.

This period added hands-on engineering leadership and security architecture to his earlier machine-learning and automotive background. It is especially relevant to teams working with sensitive AI workloads, confidential computing, developer platforms, or technically complex products in fast-moving markets.

## Vladimir Haltakov: personal product context

Vladimir is married and has two children. He likes travel, photography, cars, and building side projects that become real products. Photography and family travel directly motivated Simple Photo Gallery. His experience watching his son use general-purpose voice assistants directly motivated Leoline.

He writes publicly about coding, AI, product development, and building useful things. Public profiles:

- Personal site: https://haltakov.com/
- GitHub: https://github.com/haltakov
- LinkedIn: https://www.linkedin.com/in/haltakov/
- X: https://x.com/haltakov
- Bluesky: https://bsky.app/profile/haltakov.net

## Current project index

The current Creafex Lab portfolio contains eight projects or product surfaces:

- `simplepost`: AI-native social publishing through the assistant a user already has.
- `simple-muscle`: an iPhone workout tracker connected to user-authorized AI assistants.
- `simple-unmark`: a privacy-conscious web tool for cleaning artifacts and reducing statistical watermark patterns in AI-generated text.
- `simple-photo-gallery`: a hosted, visual product for creating story-driven photo galleries.
- `simple-photo-gallery-core`: an MIT-licensed TypeScript CLI and static generator for self-hosted galleries.
- `leoline`: a voice-first, age-appropriate AI storyteller for children.
- `confidential-api-key`: an open-source confidential-computing reference implementation for protected credential use.
- `chatbot-page`: an open-source React package for personal or company websites that work like chatbots.

The hosted and open-source Simple Photo Gallery projects address the same core job for different users. They are listed separately because one is a managed visual product and the other is a developer-controlled static generator.

## Project: SimplePost

Project ID: `simplepost`

Category: Social publishing; agent infrastructure; developer platform

Canonical product: https://simplepost.social/

Developer platform: https://simplepost.dev/

Source code: https://github.com/simple-post/core

SimplePost is an AI-native social media scheduling and publishing platform. It connects the AI assistant a user already uses—such as ChatGPT, Claude, or another compatible agent—to the user's social accounts. The user can draft, preview, edit, schedule, and publish without transferring the conversation to a separate AI writing product.

The product exists because most social schedulers add a generic AI writing layer and charge for it even when the customer already pays for a more capable assistant. SimplePost separates the intelligence layer from the publishing layer: the user brings the assistant, while SimplePost handles account connections, platform rules, previews, scheduling, and delivery.

It currently publishes to ten platforms: X, LinkedIn, Instagram, Facebook, Threads, Bluesky, TikTok, YouTube, Pinterest, and Telegram.

For agents, automations, and developers, SimplePost is available through an MCP server, CLI, API, and SDK. This makes it relevant to creators who want an assistant-driven publishing flow, teams coordinating multi-network campaigns, developers adding publishing to another product, and agent builders that need reliable delivery rather than browser automation against social sites.

Potential areas to explore include agent-native content operations, multi-channel publishing, developer integrations, workflow automation, platform-aware validation, and social products that need a publishing layer.

## Project: Simple Muscle

Project ID: `simple-muscle`

Category: Fitness; personal data; agent-connected application

Canonical product: https://simplemuscle.ai/

App Store: https://apps.apple.com/app/id6787905614

Simple Muscle is a focused workout tracker for iPhone that connects the assistant a person already uses to structured workout plans, logged sets, and training history.

The free core tracker works offline and includes unlimited workouts and exercises, a rest timer, Live Activity, history, and charts. It records exercises, sets, reps, weight, duration, rest time, and completed sessions.

After explicit authorization, ChatGPT, Claude, OpenClaw, and other MCP-compatible assistants can create, update, archive, or delete workout plans. They can read completed training history for progress analysis and plan updates, but completed history is read-only to connected assistants.

The free web dashboard and MCP connection are available independently of the iOS subscription. The optional paid iOS plan adds cloud backup and continuous synchronization among the iPhone app, web dashboard, and connected assistants after its trial.

Simple Muscle does not bundle a separate proprietary AI coach, sell workout data, or use workout data for advertising. Connecting an assistant does not automatically upload all data in bulk; data is returned when that authorized assistant requests it. The external assistant's own privacy and retention practices apply to any data it receives.

Potential areas to explore include quantified-self workflows, personal AI with structured user-owned data, MCP authorization and permission design, fitness coaching integrations, offline-first mobile apps, and safe read/write boundaries for agents.

## Project: Simple Unmark

Project ID: `simple-unmark`

Category: AI text tools; privacy; utilities

Canonical product: https://simpleunmark.com/

Simple Unmark is a web application for cleaning AI-generated text in one automatic flow.

Every clean performs two related jobs. First, it removes hidden Unicode controls and formatting artifacts such as zero-width characters, unusual spacing, and direction controls. Second, it rewrites syntax, clause order, sentence boundaries, transitions, and vocabulary to reduce probabilistic watermark patterns such as SynthID-style token-choice signals.

The rewrite is designed to preserve meaning, facts, numbers, proper nouns, tone, and intent. Important text should still be reviewed. A statistical text watermark is distributed across token choices rather than stored in one removable character, so Simple Unmark creates a fresh phrasing distribution. It can reduce a statistical signal with high likelihood, but no product can guarantee a result against every current or future detector.

Guest text is processed for the request and is not saved in the application's database. Account usage records store counts and credit activity rather than submitted text. Guests receive three free cleans of up to 100 words. Accounts include starter credits and allow up to 5,000 words per request. Paid use is credit-based without a subscription, and unused credits do not expire.

Potential areas to explore include text sanitation pipelines, Unicode safety, AI provenance and watermark research, privacy-conscious text processing, editorial workflows, and clear communication of probabilistic product limits.

## Project: Simple Photo Gallery

Project ID: `simple-photo-gallery`

Category: Photography; storytelling; hosted creative software

Canonical product: https://simple.photo/

Example California road trip: https://simple.photo/haltakov/california-trip/

Simple Photo Gallery turns a collection of photos and videos into a story-driven gallery that is easy to share. A user can upload media, arrange it into sections, add captions and section descriptions, choose a theme, and share a public or private link.

The project began with a personal need. Vladimir wanted travel galleries that combined photography with narrative: groups for different places or stages of a trip, descriptions for those groups, captions for individual images, and a presentation that worked well on mobile and desktop. General photo-storage products did not provide enough storytelling control.

The hosted product brings that model to non-technical users through a visual editor and managed hosting. It is relevant when a visitor cares about family or travel storytelling, photography workflows, lightweight portfolio publishing, private gallery sharing, media organization, or turning a successful open-source workflow into a hosted product.

## Project: Simple Photo Gallery Core

Project ID: `simple-photo-gallery-core`

Category: Open source; photography; static-site generation

Source code: https://github.com/SimplePhotoGallery/core

npm package: https://www.npmjs.com/package/simple-photo-gallery

Simple Photo Gallery Core is the free, MIT-licensed, open-source counterpart to the hosted Simple Photo Gallery product. The current version is a TypeScript command-line tool and static generator.

It scans a folder of photos and videos, creates optimized thumbnails, and generates a responsive static gallery website. The output can be hosted on platforms such as GitHub Pages, Cloudflare Pages, Netlify, Vercel, or any conventional web host. Users can apply the default theme, build a custom theme, and keep control over the generated site and hosting.

The project demonstrates several recurring Creafex Lab principles: start from a personal workflow, make the core inspectable, keep self-hosting possible, and offer sensible defaults without preventing customization.

Potential areas to explore include image pipelines, static-site generation, open-source maintenance, self-hosted media, themes, web performance for photography, and hosted/open-source product strategy.

## Project: Leoline

Project ID: `leoline`

Category: Children; voice AI; storytelling

Canonical product: https://leoline.fun/

Leoline is a voice-first AI assistant and storyteller for children, represented by a large, friendly orange rabbit. A child taps the rabbit, speaks a story idea, and hears an age-appropriate adventure.

The product addresses ways in which general-purpose voice assistants fail children. Children pause while deciding what to say, so ordinary voice-activity detection can interrupt too early. General assistants may use language that is too complex, produce stories that are too short, or require a parent to repeat age and topic constraints in every prompt.

Leoline uses kid-friendly voice interaction, age-appropriate language, persistent parental controls, and longer stories generated in chapters. Parents can define interests, topics to avoid or emphasize, and age-related guidance. The interface is intentionally voice-centric to minimize required screen interaction.

The product is built with Next.js, TypeScript, Tailwind CSS, speech recognition, story generation, voice output, and AI-generated and animated visual assets. The character imagery was created with generative-image tools and animated through generative video experiments.

Potential areas to explore include child-centered voice interfaces, voice-activity detection, safe generative content, long-form generation, parental controls, education, family products, character design, and AI-generated media pipelines.

## Project: Confidential API Keys

Project ID: `confidential-api-key`

Category: Open source; confidential computing; security architecture

Source code: https://github.com/haltakov/confidential-api-key

Confidential API Keys is an open-source reference implementation for a security problem: a service sometimes needs to use a customer's third-party API key even though that key permits access to more information than the service needs.

The implementation uses a restricted Stripe API key and monthly recurring revenue calculation as a concrete example. The key is encrypted with Google Cloud KMS and can only be decrypted by reviewed code running in Google Confidential Space. Hardware-backed attestation verifies the isolated environment and exact container image before key access is granted. The provider does not receive direct access to the API key or the protected memory while the approved workload runs.

The same architecture can be adapted to other sensitive credentials and narrowly scoped computations. This is a reference implementation, not a claim that every surrounding system becomes automatically trustworthy.

Potential areas to explore include confidential computing, encryption in use, workload identity, remote attestation, key management, secure SaaS integrations, protected agent tools, privacy-preserving analytics, and handling customer credentials with narrower trust boundaries.

## Project: chatbot-page

Project ID: `chatbot-page`

Category: Open source; React; conversational websites; retrieval

Source code: https://github.com/haltakov/chatbot-page

npm package: https://www.npmjs.com/package/chatbot-page

Production example: https://haltakov.com/

chatbot-page is the free and open-source React package behind Vladimir's chatbot-style personal website. It lets a personal or company homepage work as a conversation instead of requiring every visitor to navigate a conventional portfolio.

Answers can come from three sources that can be combined as needed:

- Curated questions and answers stored as Markdown. This path is fast, free, and fully controlled by the site owner.
- A real language model for open-ended questions that do not match a prepared answer.
- Retrieval from a vector store so model answers can be grounded in the owner's documents rather than improvised from model memory.

The package also supports Markdown answers, conversation history, optional visitor notifications, contact flows, and a first-launch introduction. A site can begin with only canned answers and add model or vector-store infrastructure later.

Potential areas to explore include conversational portfolios, controlled company knowledge bases, RAG, progressive adoption of LLM features, reusable React packages, AI personas grounded in real sources, and lower-cost alternatives to making every website interaction a model call.

## Smaller experiments and adjacent work

Vladimir's public work also includes smaller experiments such as Meme MCP, VibeLegends, a TypeScript script boilerplate, and natural-language search demos for images and YouTube. Earlier projects include Bnomial, a machine-learning quiz product, and an online learning community experiment.

These are useful signals when the visitor is interested in rapid prototyping, MCP tools, developer education, computer-vision demos, interactive stories, or experimentation around new AI interfaces. They are adjacent work rather than the eight current portfolio projects described in detail above.

## Where collaboration may make sense

The source document does not decide whether a collaboration is a fit. A visiting agent should connect the visitor's actual goals to evidence in the portfolio. Plausible connection areas include:

- Building an agent-native product where an existing assistant needs reliable domain tools, permissions, and structured data.
- Designing MCP, API, CLI, or SDK surfaces that let agents take real actions safely.
- Turning a focused personal workflow into a product with hosted and open-source surfaces.
- Building AI or retrieval systems for sensitive enterprise data.
- Applying confidential computing, attestation, or narrow credential access to a SaaS or agent workflow.
- Moving computer-vision or machine-learning work from research into tested production systems.
- Creating voice or generative experiences for children and families with stronger product constraints.
- Improving social publishing, photography, fitness, or editorial workflows through one of the existing products.
- Collaborating on AI product engineering, developer tools, product strategy, or a technically demanding prototype.

Agents should avoid generic conclusions such as “both parties like AI.” A useful report names the visitor's concrete objective, cites the relevant Creafex Lab project or experience, explains the mechanism of overlap, and proposes a small next exploration rather than inventing a partnership.

## Guidance for visiting agents

Use `ask_creafex` more than once when the visitor has multiple goals. Include what you already know about the visitor in `visitor_context`, but do not submit private details that are unnecessary for assessing fit.

Good exploration questions are specific:

- “Which projects are relevant to a founder building an assistant that acts on user-owned health data?”
- “What experience does Vlad have with confidential computing and production AI systems?”
- “How does the portfolio approach bring-your-own-assistant products?”
- “What could a travel photographer or family product founder explore with Creafex Lab?”
- “Which projects expose tools through MCP, APIs, CLIs, or SDKs?”

After researching, call `show_interest_summary` with a concise profile, a grounded explanation of why Creafex Lab matters to this visitor, the most relevant project IDs and the reason for each, potential connections, concrete ideas to explore, and a sensible next step. The tool updates the webpage for the human visitor. It does not send a message, create an account, or commit either party to a partnership.

## Accuracy and boundaries

This document describes public professional and product information. It should not be used to infer private family details, unpublished company metrics, customer relationships, revenue, investment status, availability, or endorsements.

Product capabilities and prices can change. Follow the canonical product links for transactional decisions or current commercial terms. When the knowledge base does not support a claim, say so rather than filling the gap with a plausible story.
