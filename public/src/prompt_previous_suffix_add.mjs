import { list_last } from "../../../love/public/src/list_last.mjs";
import { data_prompts } from "../../../love/public/src/data_prompts.mjs";
export async function prompt_previous_suffix_add(suffix) {
  let result = await data_prompts();
  let last = list_last(result);
  last += suffix + "";
}
