import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_questions_max_key } from "./app_code_questions_max_key.mjs";
import { app_code_questions_hash_key } from "./app_code_questions_hash_key.mjs";
import { app_shared_hash_add_on_screen } from "./app_shared_hash_add_on_screen.mjs";
import { fn_name } from "./fn_name.mjs";
export function app_code_hash_questions_add(context, hash) {
  arguments_assert(arguments, 2);
  ("Put the most questions a link asked for back into the address, on the review's screen only, the same rule the milestone's word keeps. 2026-10-23, at the human's asking: the word was read from a link and kept in the tab, but the address written after it left it out, so the link on screen no longer said the cap that was still being applied");
  let key = app_code_questions_max_key();
  let word = app_code_questions_hash_key();
  app_shared_hash_add_on_screen(
    context,
    hash,
    fn_name("app_code_review"),
    key,
    word,
  );
}
