import { app_shared_bible_mode_get } from "./app_shared_bible_mode_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_session_id } from "./app_shared_bible_session_id.mjs";
import { app_shared_bible_session_id_key } from "./app_shared_bible_session_id_key.mjs";
import { app_shared_bible_history_get } from "./app_shared_bible_history_get.mjs";
import { app_shared_bible_history_key } from "./app_shared_bible_history_key.mjs";
import { app_shared_bible_history_maximum } from "./app_shared_bible_history_maximum.mjs";
import { list_filter_property_not } from "./list_filter_property_not.mjs";
import { property_set } from "./property_set.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { list_take } from "./list_take.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
export function app_shared_bible_history_note(
  context,
  chapter_code,
  verse_numbers,
) {
  "Write down the reading this tab is on, over whatever this tab wrote down before, at the front of the list.";
  "One line per tab is the whole of the design. A line per passage opened would fill with every verse somebody stepped through on the way, and the one thing anybody comes here for - where a tab that closed had got to - would be buried under its own journey.";
  "The newest is first because this list is read from the top, and the reading wanted is nearly always the last one left.";
  "It is written where a tab cannot take it with it when it goes. What a tab keeps for itself is enough to change one's mind mid-choosing, and no use at all to somebody whose tab closed - which is the case this exists for.";
  arguments_assert(arguments, 3);
  let session = app_shared_bible_session_id(context);
  let kept = app_shared_bible_history_get(context);
  let property_name = app_shared_bible_session_id_key();
  let others = list_filter_property_not(kept, property_name, session);
  ("Which of the two readers was open is written down with the passage, because a passage on its own is not enough to put somebody back where they were. The two readers do not read a picked passage the same way: the whole-chapter one takes several verses at once, and the single-verse one takes exactly one. Handed several, it looked for a verse called five-to-nine, found none, and printed the failure over the chapter the reader had asked for.");
  let mode = app_shared_bible_mode_get();
  let entry = {
    chapter_code,
    verse_numbers,
    mode,
  };
  property_set(entry, property_name, session);
  list_add_first(others, entry);
  let maximum = app_shared_bible_history_maximum();
  let newest = list_take(others, maximum);
  let key = app_shared_bible_history_key();
  storage_local_set_context(context, key, newest);
}
