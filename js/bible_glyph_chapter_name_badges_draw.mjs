import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_names_in_letters } from "./bible_glyph_chapter_names_in_letters.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { bible_glyph_chapter_verse_word_name_badge_write } from "./bible_glyph_chapter_verse_word_name_badge_write.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export async function bible_glyph_chapter_name_badges_draw(chapter_code) {
  "Marks every proper name standing in plain English letters in ONE written picture Bible chapter with the name badge, and proves it left none behind.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It names a chapter to read and write back, and nothing that runs.";
  "IT FINDS ITS OWN SET, which is what keeps it from drifting from what is actually undrawn. It asks the reading next door which names this chapter spells in letters and marks exactly those, so it cannot mark a name the reading would not have named, and the set cannot be stale - a chapter somebody drew by hand an hour ago is simply smaller when it is asked.";
  "IT PROVES ITSELF BY COUNTING WHAT THE WRITING DID AND NOT BY READING THE CHAPTER BACK, and the first draft got that wrong. Asking the reading again after writing looks like the stronger proof and is in fact no proof at all: a chapter is a module, the running program already imported it, and a second ask hands back the same parse it was holding before the file changed. So the first run reported sixteen names still standing in letters that were sitting on the disk with badges in front of them. What can be checked here is that every entry the reading named was replaced, which is fresh because the writing itself reports it.";
  "A CHAPTER IS THE UNIT BECAUSE A CHAPTER IS ONE FILE AND ONE COMMIT. Every chapter's names are independent of every other chapter's, so the whole Bible pass is a loop over this, each turn committing itself under this name and this chapter code - which is a message that replays. Drawing one NAME at a time would have been thousands of commits for one idea, and drawing the whole Bible at once would have been one commit nobody could read.";
  "THE MARKING IS SCOPED TO A VERSE AND THE FIRST DRAFT SCOPED IT TO A CHAPTER, which cost it most of the names it was run to draw. The reading answers verse by verse, so it knows the original of one verse has Esau in it and says nothing about another; a chapter-wide writer can only be told the word, and it rewrites that word everywhere. To stay honest that draft had to hold back any word the chapter spelled more often than the reading named - and English names a man where the Hebrew says he, so that is the usual case rather than the odd one. Genesis twenty seven held back Isaac, Esau, Rebekah and Jacob and drew eight marks out of nearly forty. Asked one verse at a time there is nothing to hold back and nothing is.";
  "THE PAIR IS THE VERSE AND THE WORD, AND EACH PAIR IS ASKED FOR ONCE. A verse naming Esau twice yields the reading two offenders, and the writer marks every standing of the word in the verse it is given - so calling it once per offender would ask for the second one after the first had already drawn it, and the writer would refuse a word that is no longer there. Counting the pairs first is also what makes the proof exact: what was asked for is how many offenders the pair had, and what happened is what the writer says it replaced.";
  arguments_assert(arguments, 1);
  let told = await bible_glyph_chapter_names_in_letters(chapter_code);
  let wanted = {};
  for (let offender of told.offenders) {
    let a = String(offender.verse_number);
    let key = text_combine_3(a, " ", offender.word);
    let found = property_get_or_null(wanted, key);
    let fresh = null_is(found);
    if (fresh) {
      found = {
        verse_number: offender.verse_number,
        word: offender.word,
        named: 0,
      };
      property_set(wanted, key, found);
    }
    found.named = add(found.named, 1);
  }
  let missed = [];
  let marks = 0;
  let drawn = 0;
  for (let key of object_property_names(wanted)) {
    let one = property_get_or_null(wanted, key);
    let done = await bible_glyph_chapter_verse_word_name_badge_write(
      chapter_code,
      one.verse_number,
      one.word,
    );
    let short = equal_not(done.replaced, one.named);
    if (short) {
      list_add(missed, {
        verse_number: one.verse_number,
        word: one.word,
        named: one.named,
        replaced: done.replaced,
      });
    }
    marks = add(marks, done.replaced);
    drawn = add(drawn, 1);
  }
  let hint =
    "the verse spelled these names a different number of times than the marking replaced, so the page and the reading disagree about where they stand - read the verse and compare its entries against what the reading named";
  list_empty_is_assert_walked_generic(told.offenders.length, missed, hint);
  let r = {
    chapter_code,
    marks,
    drawn,
  };
  return r;
}
