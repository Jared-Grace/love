import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_open } from "../../../love/public/src/function_open.mjs";
import { function_run_line_parse } from "../../../love/public/src/function_run_line_parse.mjs";
import { prompt_previous_get } from "../../../love/public/src/prompt_previous_get.mjs";
export async function prompt_previous_open() {
  let previous = await prompt_previous_get();
  let v = await function_run_line_parse(previous);
  let f_name = property_get(v, "f_name");
  await function_open(f_name);
}
