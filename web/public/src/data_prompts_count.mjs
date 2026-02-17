import { function_aliases_inverted } from "../../../love/public/src/function_aliases_inverted.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { text_between_space } from "../../../love/public/src/text_between_space.mjs";
import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { list_slice_end } from "../../../love/public/src/list_slice_end.mjs";
import { data_value } from "../../../love/public/src/data_value.mjs";
import { data_prompts_path } from "../../../love/public/src/data_prompts_path.mjs";
export async function data_prompts_count(offset) {
  let inverted = await function_aliases_inverted();
  let d_path = data_prompts_path();
  let prompts = await data_value("prompts", d_path);
  let sliced = list_slice_end(prompts, offset);
  let size = list_size(sliced);
  function lambda(item, index) {
    let difference = subtract(size, index);
    let r2 = lambda_inner(difference, item);
    return r2;
  }
  let mapped = list_map_index(sliced, lambda);
  return mapped;
  function lambda_inner(difference, item) {
    let together = text_combine(difference, " " + " ");
    let r = text_between_space(together, item);
    return r;
  }
}
