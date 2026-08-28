# Creafex Lab

Home page for Creafex Lab by Vladimir Haltakov

## WebMCP

The home page registers two browser tools using the current WebMCP imperative API:

- `ask_creafex` searches the public, source-grounded Creafex Lab knowledge base.
- `show_interest_summary` renders an agent's personalized conclusions on the page.

The source document is published at `/creafex-lab-knowledge.md`. WebMCP registration lives in `src/app/agent-briefing.tsx` and uses `document.modelContext`, with the deprecated `navigator.modelContext` entry point retained as a fallback for older preview browsers.

For local development:

```bash
yarn dev
```

In a WebMCP-capable browser, ask the visiting agent:

> Visit this page. Use `ask_creafex` to find what is relevant to me, then call `show_interest_summary` with your conclusions.

Run the production checks with:

```bash
yarn typecheck
yarn lint
yarn build
```
