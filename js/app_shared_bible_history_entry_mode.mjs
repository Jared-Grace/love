import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_shared_bible_mode_get } from "./app_shared_bible_mode_get.mjs";
export function app_shared_bible_history_entry_mode(entry) {
  "Which of the two readers a remembered reading should open in.";
  "A line written down since the reader started being noted says so itself, and that is the answer. A line written before then says nothing, and the honest answer for it is the reader the tab is in already - which is what every line got before any of them said, and is no worse now than it was then.";
  "Asked in one place because two places need it and they need the same answer: the one that points the link at the reading, and the one that then draws it. Answered differently in the two, a reading would be pointed at one reader and drawn in the other.";
  arguments_assert(arguments, 1);
  let mode = property_get_or_null(entry, "mode");
  let told = null_not_is(mode);
  if (told) {
    return mode;
  }
  let mode_now = app_shared_bible_mode_get();
  return mode_now;
}
