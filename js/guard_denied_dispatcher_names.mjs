import { file_read } from "./file_read.mjs";
import { text_between } from "./text_between.mjs";
import { text_quoted_names } from "./text_quoted_names.mjs";
export async function guard_denied_dispatcher_names() {
  "The function names the bash guard refuses outright, read back out of the guard itself. The guard is python and keeps its own copy of the list, so the only honest way to compare it with this side's copy is to read the one the guard actually enforces rather than a note about it.";
  "The list used to sit inline in the guard and now sits in a generated module beside it, which the guard imports. Reading the module is still reading what the guard enforces, so the honesty this function exists for is unchanged - only the file holding the names moved.";
  let code = await file_read(".claude/hooks/denied_dispatcher_functions.py");
  let block = text_between(code, "DENIED_DISPATCHER_FUNCTIONS = {", "}");
  let names = text_quoted_names(block);
  return names;
}
