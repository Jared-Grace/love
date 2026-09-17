import { list_to_indices } from "./list_to_indices.mjs";
import { list_get } from "./list_get.mjs";
import { text_starts_with_not } from "./text_starts_with_not.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_code_lines_code_indices(lines) {
  "The places in a program that hold code, as opposed to a comment - the lines a student could be asked to build.";
  "A COMMENT IS NEVER ONE OF THEM. Its words are the writer's own and could be anything, so there is no way to build one from pieces, and nothing the program does would say whether it was built right.";
  let indices = list_to_indices(lines);
  function index_code_is(index) {
    let line = list_get(lines, index);
    let code_is = text_starts_with_not(line, "//");
    return code_is;
  }
  let kept = list_filter(indices, index_code_is);
  return kept;
}
