import { function_run_log } from "../../love/js/function_run_log.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { function_run_line_parse } from "../../love/js/function_run_line_parse.mjs";
import { function_run_line_history_resolve } from "../../love/js/function_run_line_history_resolve.mjs";
export async function function_run_line_history(line) {
  let resolved = await function_run_line_history_resolve(line);
  let r = await function_run_line_parse(resolved);
  let args = property_get(r, "args");
  let f_name = property_get(r, "f_name");
  let result = await function_run_log(f_name, args);
  let r2 = {
    result,
    f_name,
    args,
  };
  return r2;
}
