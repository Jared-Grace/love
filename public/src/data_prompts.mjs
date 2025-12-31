import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { data_prompts_path } from "../../../love/public/src/data_prompts_path.mjs";
import { list_slice_end } from "../../../love/public/src/list_slice_end.mjs";
import { data_value } from "../../../love/public/src/data_value.mjs";
export async function data_prompts() {
  assert_arguments(arguments, 0);
  marker("1");
  let d_path = data_prompts_path();
  let prompts = await data_value("prompts", d_path);
  let offset = 25;
  let result = list_slice_end(prompts, offset);
  return result;
}
