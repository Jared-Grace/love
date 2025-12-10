import { function_run_unalias } from "../../../love/public/src/function_run_unalias.mjs";
import { function_run_line_parse } from "../../../love/public/src/function_run_line_parse.mjs";
export async function function_run_line(line) {
  let { f_name, args } = await function_run_line_parse(line);
  let v = await function_run_unalias(f_name, args);
  return v;
}
