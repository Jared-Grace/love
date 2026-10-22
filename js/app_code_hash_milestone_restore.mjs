import { app_code_milestone_hash_key } from "./app_code_milestone_hash_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_milestone_key } from "./app_code_milestone_key.mjs";
import { storage_session_set_context } from "./storage_session_set_context.mjs";
import { app_shared_screen_tab_key_last } from "./app_shared_screen_tab_key_last.mjs";
export function app_code_hash_milestone_restore(context, hash) {
  "Take the milestone named in the address and write it into this tab before anything is drawn, so the screen that opens is the milestone the link asked for.";
  "The tab is also told a milestone was the last thing picked, because the review screen asks exactly that to choose between a milestone and a review - and a fresh tab opened from a link has picked nothing yet.";
  let word = app_code_milestone_hash_key();
  let said = property_get_or_null(hash, word);
  let present = null_not_is(said);
  if (present) {
    let key = app_code_milestone_key();
    storage_session_set_context(context, key, said);
    let key_last = app_shared_screen_tab_key_last();
    storage_session_set_context(context, key_last, key);
  }
}
