import { log } from "./log.mjs";
import { list_slice_end } from "./list_slice_end.mjs";
import { data_value } from "./data_value.mjs";
import { list_size } from "./list_size.mjs";
import { list_slice } from "./list_slice.mjs";
export async function data_prompts() {
  let prompts = await data_value("prompts");
  let offset = 10;
  return list_slice_end(prompts, offset);
}
