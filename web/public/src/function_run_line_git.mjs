import { function_run_line_parse } from "../../../love/public/src/function_run_line_parse.mjs";
import { function_run_git } from "../../../love/public/src/function_run_git.mjs";
Error.stackTraceLimit = Infinity;
export async function function_run_line_git(line) {
  let { f_name, args } = await function_run_line_parse(line);
  await function_run_git(f_name, args);
}
