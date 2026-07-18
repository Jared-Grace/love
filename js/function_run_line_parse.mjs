import { text_trim } from "./text_trim.mjs";
import { text_words_quoted } from "./text_words_quoted.mjs";
import { data_prompts_path } from "./data_prompts_path.mjs";
import { list_unique_reverse } from "./list_unique_reverse.mjs";
import { list_add } from "./list_add.mjs";
import { data_transform } from "./data_transform.mjs";
export async function function_run_line_parse(line) {
  let trimmed = text_trim(line);
  let [f_name, ...args] = text_words_quoted(trimmed);
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
