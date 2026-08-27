import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_property } from "./list_map_property.mjs";
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
  "★ THE PIECE IS THE UNIT AND THE VERSE NUMBER IS ONLY ITS LABEL. A recording cut at verse boundaries stops in the middle of a clause wherever a sentence runs across a verse, and a reader hears a half-thought end and another begin. Gathering forward to the next stopping place makes the sound and the sense the same shape.";
  "★ A PIECE CARRIES THE LIST OF VERSES IT HOLDS, NOT THE FIRST AND THE LAST OF THEM. A first and a last say the same thing only while the pieces tile the chapter with no gap in them, and the moment one piece is missing its neighbour silently claims the verses that fell in the hole. The list cannot claim a verse it does not name, so a piece read on its own is still true.";
  "★ A SEMICOLON ENDS A PIECE, WHICH IS WHY THIS IS NOT THE SAME AS SPLITTING ON SENTENCES. Psalm 136 runs twenty-two verses without a full stop while every one of those verses is a whole singable line closing on the same refrain, so a rule that waited for a full stop would fold the psalm into one unreadable block.";
  "★ WHAT IS LEFT OVER AT THE END OF A CHAPTER IS STILL A PIECE. A chapter may close on a comma or on no mark at all, and the verses standing after the last stopping place are as much a piece as any other. Dropping them would lose the end of the chapter rather than merely cut it oddly.";
  arguments_assert(arguments, 1);
  let stops = text_split_empty(".?!;:");
  let units = [];
  let held = [];
  function held_close() {
    list_add(units, {
      verse_numbers: list_map_property(held, "verse_number"),
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
