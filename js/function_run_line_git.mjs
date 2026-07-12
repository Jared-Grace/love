import { function_run_line_parse } from "./function_run_line_parse.mjs";
import { function_run_line_history_resolve } from "./function_run_line_history_resolve.mjs";
import { function_run_git } from "./function_run_git.mjs";
Error.stackTraceLimit = Infinity;
export async function function_run_line_git(line) {
  let resolved = await function_run_line_history_resolve(line);
  let { f_name, args } = await function_run_line_parse(resolved);
  await function_run_git(f_name, args);
}
