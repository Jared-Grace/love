import { text_trim } from "../../../love/public/src/text_trim.mjs";
import { text_regex_match } from "../../../love/public/src/text_regex_match.mjs";
import { data_get } from "../../../love/public/src/data_get.mjs";
import { data_prompts_path } from "../../../love/public/src/data_prompts_path.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_get_end } from "../../../love/public/src/list_get_end.mjs";
export async function function_run_line_history_resolve(line) {
  let trimmed = text_trim(line);
  let steps_back = null;
  if (trimmed === "p") {
    steps_back = 1;
  } else {
    let m = text_regex_match(trimmed, /^pp ([1-9][0-9]*)$/);
    if (m !== null) {
      steps_back = Number(m[1]);
    }
  }
  if (steps_back === null) {
    return line;
  }
  let d_path = data_prompts_path();
  let d = await data_get("prompts", [], d_path);
  let previous = property_get(d, "value");
  let resolved = list_get_end(previous, steps_back);
  return resolved;
}
