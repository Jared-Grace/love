import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_names_in_letters } from "./bible_glyph_chapter_names_in_letters.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
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
  "IT FINDS ITS OWN SET, which is what keeps it from drifting from what is actually undrawn. It asks the reading next door which names this chapter spells in letters and marks exactly those, so it cannot mark a name the reading would not have named, and the set cannot be stale - a chapter somebody drew by hand an hour ago is simply smaller when it is asked.";
  "IT PROVES ITSELF BY COUNTING WHAT THE WRITING DID AND NOT BY READING THE CHAPTER BACK, and the first draft got that wrong. Asking the reading again after writing looks like the stronger proof and is in fact no proof at all: a chapter is a module, the running program already imported it, and a second ask hands back the same parse it was holding before the file changed. So the first run reported sixteen names still standing in letters that were sitting on the disk with badges in front of them. What can be checked here is that every entry the chapter spelled was replaced, which is fresh because the writing itself reports it.";
  "A CHAPTER IS THE UNIT BECAUSE A CHAPTER IS ONE FILE AND ONE COMMIT. Every chapter's names are independent of every other chapter's, so the whole Bible pass is a loop over this, each turn committing itself under this name and this chapter code - which is a message that replays. Drawing one NAME at a time would have been thousands of commits for one idea, and drawing the whole Bible at once would have been one commit nobody could read.";
  "IT REFUSES A WORD WHOSE EVERY STANDING IS NOT A NAME, and that is the one thing it checks that the reading cannot. Marking works on whole entries and rewrites every entry in the chapter that is exactly that word, so a chapter where Dan is a son in one verse and the reading only named it in one of two places would get a badge in the other place too. So each word is only marked when the number of times the chapter spells it equals the number of times the reading called it a name, and a word that fails that is handed back rather than drawn.";
  "WHAT IS HELD BACK IS REPORTED RATHER THAN SWALLOWED, because a held word is a real name that is still in letters and somebody has to see it. A pass that quietly skipped them would look identical to a pass that drew everything, and the names it skipped are exactly the interesting ones - the places where the same letters are a name in one verse and something else in another.";
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
  let missed = [];
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
    let short = equal_not(done.replaced, named);
    if (short) {
      list_add(missed, {
        word,
        named,
        replaced: done.replaced,
      });
    }
    marks = add(marks, done.replaced);
    list_add(drawn, word);
  }
  let hint =
    "the chapter spelled these names a different number of times than the marking replaced, so the page and the reading disagree about where they stand - read the chapter and compare the entries against the verse the reading named";
  list_empty_is_assert_walked_generic(told.offenders.length, missed, hint);
  let r = {
    chapter_code,
    marks,
    drawn: drawn.length,
    held,
  };
  return r;
}
