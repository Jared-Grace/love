import { function_run_line_parse } from "./function_run_line_parse.mjs";
import { function_run_git } from "./function_run_git.mjs";
export async function function_run_line_git(line) {
  let { f_name, args } = await function_run_line_parse(line);
  await function_run_git(f_name, args);
}
