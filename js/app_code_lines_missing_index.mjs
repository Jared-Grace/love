import { list_to_indices } from "./list_to_indices.mjs";
import { list_get } from "./list_get.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_code_lines_missing_index(lines) {
  "Which line of a program to leave out for the student to build, chosen at random among the lines that are code.";
  "A COMMENT IS NEVER CHOSEN. Its words are the writer's own and could be anything, so there is no way to build one from pieces, and nothing the program does would say whether it was built right.";
  let indices = list_to_indices(lines);
  function index_code_is(index) {
    let line = list_get(lines, index);
    let comment = text_starts_with(line, "//");
    let code_is = not(comment);
    return code_is;
  }
  let kept = list_filter(indices, index_code_is);
  let index_chosen = list_random_item(kept);
  return index_chosen;
}
