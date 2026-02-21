import { text_trim } from "../../../love/public/src/text_trim.mjs";
import { data_prompts_path } from "../../../love/public/src/data_prompts_path.mjs";
import { list_unique_reverse } from "../../../love/public/src/list_unique_reverse.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { data_transform } from "../../../love/public/src/data_transform.mjs";
export async function function_run_line_parse(line) {
  let trimmed = text_trim(line);
  const [f_name, ...args] = trimmed.split(" ");
  function lambda(previous) {
    list_add(previous, trimmed);
    let unique = list_unique_reverse(previous);
    return unique;
  }
  let d_path = data_prompts_path();
  await data_transform("prompts", [], lambda, d_path);
  let v = {
    f_name,
    args,
  };
  return v;
}
