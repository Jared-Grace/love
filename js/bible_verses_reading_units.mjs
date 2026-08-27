import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { list_add } from "./list_add.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { list_map_property_join_space } from "./list_map_property_join_space.mjs";
import { property_get } from "./property_get.mjs";
import { bible_verse_trim_right } from "./bible_verse_trim_right.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { not } from "./not.mjs";
import { each } from "./each.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function bible_verses_reading_units(verses) {
  "$plain verses";
  "One chapter's verses gathered into the pieces a reader or a singer may stop at, each piece running forward from where the last one ended until a verse finishes on a full stop, question mark, exclamation mark, semicolon or colon.";
  "★ THE PIECE IS THE UNIT AND THE VERSE NUMBER IS ONLY ITS LABEL. Verse numbers were added to the text centuries after the words, and were never asked to land where a sentence ends, so around one verse in eight of every english bible measured here stops in the middle of one. Cutting a recording or a screen at every verse therefore hands a reader a fragment wherever the numbering happens to fall mid-sentence, and does it many times over in a genealogy. Gathering first and labelling second is what stops that, and it costs the piece nothing: a piece that is one whole verse comes back as one whole verse.";
  "★ A SEMICOLON ENDS A PIECE, WHICH IS WHY THIS IS NOT THE SAME AS SPLITTING ON SENTENCES. Psalm 136 runs twenty-two verses without a full stop while every one of those verses is a whole singable line closing on the same refrain, so a rule that waited for a full stop would fold the psalm into one unreadable block. Stopping at a semicolon keeps those twenty-two apart and still joins Luke's genealogy, and a single rule doing both is the reason to prefer it to a rule that has to be told which chapter it is in.";
  "★ WHAT IS LEFT OVER AT THE END OF A CHAPTER IS STILL A PIECE. A chapter whose last verse closes on a comma would otherwise lose those words entirely, which is the one failure that would be silent, so the leftover is returned rather than dropped.";
  arguments_assert(arguments, 1);
  let stops = text_split_empty(".?!;:");
  let units = [];
  let held = [];
  function held_close() {
    list_add(units, {
      first_verse: list_first_property(held, "verse_number"),
      last_verse: list_last_property(held, "verse_number"),
      verses: held.length,
      text: list_map_property_join_space(held, "text"),
    });
    held = [];
  }
  function verse_each(verse) {
    list_add(held, verse);
    let text = property_get(verse, "text");
    let trimmed = bible_verse_trim_right(text);
    let stopped = text_ends_with_any(trimmed, stops);
    if (not(stopped)) {
      return;
    }
    held_close();
  }
  each(verses, verse_each);
  let leftover = list_empty_is(held);
  if (not(leftover)) {
    held_close();
  }
  return units;
}
