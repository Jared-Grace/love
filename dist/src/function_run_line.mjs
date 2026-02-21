import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_run_unalias_log_before } from "../../../love/public/src/function_run_unalias_log_before.mjs";
import { function_run_line_parse } from "../../../love/public/src/function_run_line_parse.mjs";
export async function function_run_line(line) {
  let r = await function_run_line_parse(line);
  let args = property_get(r, "args");
  let f_name = property_get(r, "f_name");
  let v = await function_run_unalias_log_before(f_name, args);
  return v;
}
