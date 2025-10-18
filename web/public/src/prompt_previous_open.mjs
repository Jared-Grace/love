import { function_run } from "../../../love/public/src/function_run.mjs";
import { function_run_line_parse } from "../../../love/public/src/function_run_line_parse.mjs";
import { prompt_previous_get } from "../../../love/public/src/prompt_previous_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function prompt_previous_open() {
  marker("1");
  let previous = await prompt_previous_get();
  let { f_name, args } = await function_run_line_parse(previous);
  let v = await function_run(f_name, args);
  return v;
}
