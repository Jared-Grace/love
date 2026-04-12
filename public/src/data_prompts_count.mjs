import { list_slice_end_try } from "../../../love/public/src/list_slice_end_try.mjs";
import { data_value } from "../../../love/public/src/data_value.mjs";
import { data_prompts_path } from "../../../love/public/src/data_prompts_path.mjs";
export async function data_prompts_count(offset) {
  let d_path = data_prompts_path();
  let prompts = await data_value("prompts", d_path);
  let sliced = list_slice_end_try(prompts, offset);
  return sliced;
}
