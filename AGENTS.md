# Before you start

At the start of work in this codebase, and again when a topic's gate comes up, read the memory layer instead of working from the conversation alone:

- Memory index: `MEMORY.md` under `~/.claude/projects/-home-j-a-repos-love/memory` (read it with the repo's own helpers: `memory_index_path`, `memory_index_text`).
- Topic notes: open the topic's MAP hub note first, then the notes it points to.
- Continuing prior work: scan the most recent claude transcripts under `~/.claude/projects/-home-j-a-repos-love/*.jsonl` for the thread's context.

The `feedback_*` notes are response rules; the `project_*` notes are accumulated findings; the `reference_*` notes are lookups. Follow the "Editing this repo" conventions (edits via the repo's own transforms and shared `r.mjs`/`ai.mjs` API, not raw writes past the guard).

After finishing a task, if a correction recurred or a new lesson surfaced, record it as one memory note or amendment (per `feedback_evaluate_memory_every_turn`).