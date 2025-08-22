import { list_slice_end } from "./list_slice_end.mjs";
import { data_value } from "./data_value.mjs";
export async function data_prompts() {
  let prompts = await data_value("prompts");
  let offset = 25;
  let result = list_slice_end(prompts, offset);
  return result;
}
