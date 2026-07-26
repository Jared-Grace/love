import { file_read } from "./file_read.mjs";
import { text_between } from "./text_between.mjs";
import { text_quoted_names } from "./text_quoted_names.mjs";
export async function guard_denied_dispatcher_names() {
  "The function names the bash guard refuses outright, read back out of the guard itself. The guard is python and keeps its own copy of the list, so the only honest way to compare it with this side's copy is to read the one the guard actually enforces rather than a note about it.";
  let code = await file_read(".claude/hooks/bash-command-guard.py");
  let block = text_between(code, "DENIED_DISPATCHER_FUNCTIONS = {", "}");
  let names = text_quoted_names(block);
  return names;
}
