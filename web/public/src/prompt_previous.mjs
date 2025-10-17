import { prompt_previous_get } from "../../../love/public/src/prompt_previous_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_run_line } from "../../../love/public/src/function_run_line.mjs";
export async function prompt_previous() {
  marker("1");
  let previous = await prompt_previous_get();
  let v = await function_run_line(previous);
  return v;
}
