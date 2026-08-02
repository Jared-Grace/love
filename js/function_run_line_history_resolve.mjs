import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
import { data_get } from "./data_get.mjs";
import { data_prompts_path } from "./data_prompts_path.mjs";
import { property_get } from "./property_get.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { subtract } from "./subtract.mjs";
export async function function_run_line_history_resolve(line) {
  let trimmed = text_trim(line);
  let steps_back = null;
  if (equal(trimmed, "p")) {
    steps_back = 1;
  } else {
    let m = text_regex_match(trimmed, /^pp ([1-9][0-9]*)$/);
    if (not_equal(m, null)) {
      steps_back = Number(m[1]);
    }
  }
  if (equal(steps_back, null)) {
    return line;
  }
  let d_path = data_prompts_path();
  let d = await data_get("prompts", [], d_path);
  let previous = property_get(d, "value");
  let index_from_end = subtract(steps_back, 1);
  let resolved = list_get_end(previous, index_from_end);
  return resolved;
}
