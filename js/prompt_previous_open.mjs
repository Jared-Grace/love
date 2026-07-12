import { property_get } from "./property_get.mjs";
import { function_open } from "./function_open.mjs";
import { function_run_line_parse } from "./function_run_line_parse.mjs";
import { prompt_previous_get } from "./prompt_previous_get.mjs";
export async function prompt_previous_open() {
  let previous = await prompt_previous_get();
  let v = await function_run_line_parse(previous);
  let f_name = property_get(v, "f_name");
  await function_open(f_name);
}
