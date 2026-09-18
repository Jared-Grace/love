import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_names_in_letters } from "./bible_glyph_chapter_names_in_letters.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_chapter_word_name_badge_write } from "./bible_glyph_chapter_word_name_badge_write.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export async function bible_glyph_chapter_name_badges_draw(chapter_code) {
  "Marks every proper name standing in plain English letters in ONE written picture Bible chapter with the name badge, and proves it left none behind.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It names a chapter to read and write back, and nothing that runs.";
  "IT FINDS ITS OWN SET, which is what keeps it from drifting from what is actually undrawn. It asks the reading next door which names this chapter spells in letters, marks those, and asks again - so it cannot mark a name the reading would not have named, and it cannot report success while leaving one standing. A version that took a list of words from its caller would have been a second place the answer lived.";
  "A CHAPTER IS THE UNIT BECAUSE A CHAPTER IS ONE FILE AND ONE COMMIT. Every chapter's names are independent of every other chapter's, so the whole Bible pass is a loop over this, each turn committing itself under this name and this chapter code - which is a message that replays. Drawing one NAME at a time would have been thousands of commits for one idea, and drawing the whole Bible at once would have been one commit nobody could read.";
  "IT REFUSES A WORD WHOSE EVERY STANDING IS NOT A NAME, and that is the one thing it checks that the reading cannot. Marking works on whole entries and rewrites every entry in the chapter that is exactly that word, so a chapter where Dan is a son in one verse and the reading only named it in one of two places would get a badge in the other place too. So each word is only marked when the number of times the chapter spells it equals the number of times the reading called it a name, and a word that fails that is handed back rather than drawn.";
  "WHAT IS HELD BACK IS REPORTED RATHER THAN SWALLOWED, because a held word is a real name that is still in letters and somebody has to see it. The second reading would otherwise make it look like a fault - a name left standing after a pass that claimed to draw them all - so the pass says which ones it chose not to touch and why the count disagreed.";
  arguments_assert(arguments, 1);
  let told = await bible_glyph_chapter_names_in_letters(chapter_code);
  let wanted = {};
  for (let offender of told.offenders) {
    let found = property_get_or_null(wanted, offender.word);
    let fresh = null_is(found);
    if (fresh) {
      found = 0;
    }
    let value = add(found, 1);
    property_set(wanted, offender.word, value);
  }
  let standing = {};
  let parsed = bible_glyph_chapter(chapter_code);
  for (let verse of parsed.verses) {
    for (let word of verse.words) {
      let plain = equal(typeof word, "string");
      if (not(plain)) {
        continue;
      }
      let found = property_get_or_null(standing, word);
      let fresh = null_is(found);
      if (fresh) {
        found = 0;
      }
      let value2 = add(found, 1);
      property_set(standing, word, value2);
    }
  }
  let held = [];
  let drawn = [];
  let marks = 0;
  for (let word of object_property_names(wanted)) {
    let named = property_get_or_null(wanted, word);
    let spelled = property_get_or_null(standing, word);
    let mixed = equal_not(named, spelled);
    if (mixed) {
      list_add(held, {
        word,
        named,
        spelled,
      });
      continue;
    }
    let done = await bible_glyph_chapter_word_name_badge_write(
      chapter_code,
      word,
    );
    marks = add(marks, done.replaced);
    list_add(drawn, word);
  }
  let again = await bible_glyph_chapter_names_in_letters(chapter_code);
  let left = [];
  for (let offender of again.offenders) {
    let known = property_get_or_null(wanted, offender.word);
    let expected = null_is(known);
    if (expected) {
      list_add(left, offender.word);
      continue;
    }
    let spelled = property_get_or_null(standing, offender.word);
    let was_held = equal_not(known, spelled);
    if (not(was_held)) {
      list_add(left, offender.word);
    }
  }
  let hint =
    "these names were marked with the name badge and the reading still calls them names in letters, so the marking did not take - read the chapter and see what the entry actually says now";
  list_empty_is_assert_walked_generic(told.offenders.length, left, hint);
  let r = {
    chapter_code,
    marks,
    drawn: drawn.length,
    held,
  };
  return r;
}
