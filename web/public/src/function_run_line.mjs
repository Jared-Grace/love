import { function_run } from "./function_run.mjs";
import { function_run_line_parse } from "./function_run_line_parse.mjs";
export async function function_run_line(line) {
  let { f_name, args } = await function_run_line_parse(line);
  let v = await function_run(f_name, args);
  return v;
}
