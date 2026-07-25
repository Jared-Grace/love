import { process_ai_seam_is } from "./process_ai_seam_is.mjs";
import { not } from "./not.mjs";
import { assert_json } from "./assert_json.mjs";
export function file_open_seam_assert(f_path) {
  "Opening a file launches VS Code on the human's screen, which only makes sense when the human asked for it from their own keyboard";
  "So the ai seam refuses rather than quietly doing something else, and the message names the twin to call instead";
  let human = not(process_ai_seam_is());
  assert_json(human, {
    hint: "opening a file launches VS Code on the human's screen. Claude's seam should call the twin without the open suffix - function_new rather than function_new_open, function_copy rather than function_copy_open, function_rename rather than function_rename_open, functions_search rather than functions_search_open",
    f_path,
  });
}
