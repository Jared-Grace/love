import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_verse_numbers_range_text } from "./app_shared_bible_verse_numbers_range_text.mjs";
import { app_shared_bible_verse_open } from "./app_shared_bible_verse_open.mjs";
import { app_shared_button_list_centered } from "./app_shared_button_list_centered.mjs";
import { app_shared_bible_picker_buttons_enlarge } from "./app_shared_bible_picker_buttons_enlarge.mjs";
import { app_shared_bible_picker_buttons_equal_width } from "./app_shared_bible_picker_buttons_equal_width.mjs";
import { app_shared_bible_passage_containing_or_null } from "./app_shared_bible_passage_containing_or_null.mjs";
import { app_shared_buttons_mark_current } from "./app_shared_buttons_mark_current.mjs";
export function app_shared_bible_passages_pick(
  context,
  card,
  downloaded,
  verse_number,
) {
  "A button for every passage of the chapter, each saying its run of verses, with the one being read marked. Pressing one opens that passage, written into the address as its run, so the link a reader shares names the whole passage.";
  arguments_assert(arguments, 4);
  let passages = property_get(downloaded, "passages");
  function label(passage) {
    let verse_numbers = property_get(passage, "verse_numbers");
    let text = app_shared_bible_verse_numbers_range_text(verse_numbers);
    return text;
  }
  async function open(passage) {
    let text = label(passage);
    await app_shared_bible_verse_open(context, text);
  }
  let buttons = app_shared_button_list_centered(card, passages, label, open);
  app_shared_bible_picker_buttons_enlarge(buttons);
  app_shared_bible_picker_buttons_equal_width(buttons, passages, label);
  let current = app_shared_bible_passage_containing_or_null(
    downloaded,
    verse_number,
  );
  app_shared_buttons_mark_current(buttons, passages, current);
}
