import { arguments_assert } from "./arguments_assert.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
import { fn_name } from "./fn_name.mjs";
export function bible_pronunciation_picks_path() {
  "Where the ear's answer for each name still in question is kept on this machine: A for the saying the recordings already use, B for the saying the reading holds now. Filed under the list the names come from, so the question and its answers sit together.";
  arguments_assert(arguments, 0);
  let path = storage_function_path(
    fn_name("bible_pronunciation_choices"),
    "picks.json",
  );
  return path;
}
