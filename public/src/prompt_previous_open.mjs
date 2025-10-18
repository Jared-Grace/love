import { function_open } from "../../../love/public/src/function_open.mjs";
import { function_run_line_parse } from "../../../love/public/src/function_run_line_parse.mjs";
import { prompt_previous_get } from "../../../love/public/src/prompt_previous_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function prompt_previous_open() {
  marker("1");
  let previous = await prompt_previous_get();
  let { f_name } = await function_run_line_parse(previous);
  await function_open(f_name2);
  return v;
}
