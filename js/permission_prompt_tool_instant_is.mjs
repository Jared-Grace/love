export function permission_prompt_tool_instant_is(tool_name) {
  "Whether this tool always finishes in well under a second when nothing blocks it - a local file read or write, a search over the tree. For those tools a long wait has only one available explanation, the human, which makes the gap in the transcript a measurement rather than a guess.";
  "Everything else - the shell, the browser, fetches, subagents - can legitimately take minutes on its own, so a gap there proves nothing by itself.";
  let instant = new Set([
    "Read",
    "Edit",
    "Write",
    "MultiEdit",
    "NotebookEdit",
    "Glob",
    "Grep",
    "TodoWrite",
  ]);
  let b = instant.has(tool_name);
  return b;
}
