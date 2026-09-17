import { arguments_assert } from "./arguments_assert.mjs";
import { english_joining_words } from "./english_joining_words.mjs";
import { bible_glyph_chapters_verse_marks_underdrawn } from "./bible_glyph_chapters_verse_marks_underdrawn.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { property_set } from "./property_set.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { text_lower_words_letters } from "./text_lower_words_letters.mjs";
import { list_includes } from "./list_includes.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { text_is } from "./text_is.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { bible_glyph_chapter_verse_word_replace } from "./bible_glyph_chapter_verse_word_replace.mjs";
export async function bible_glyph_chapters_verse_marks_underdrawn_word_draw() {
  "Draws the mark on every underdrawn verse where the interlinear and the English agree on one single word, and hands back the verses it refused to settle.";
  "THE READING NEXT DOOR NAMES A CHAPTER, A VERSE AND A MARK, AND STOPS THERE. It counts how many times the original seats a picture against how many times the verse draws it, so it can say a verse is one mark short; what it can never say is which English word the missing mark belongs on, because counting compares totals and never positions. That last step was being taken by hand, one verse at a time, and a step taken by hand over a list is a command that has not been written yet.";
  "THE INTERLINEAR ITSELF DECIDES THE POSITION WHEN ONE WORD IS SHARED BY BOTH SIDES. The rows seated on the missing mark carry English glosses; the verse carries words still standing in plain letters. When exactly one word is spelled on both lists, and the mark is short by exactly as many as that word appears on each list, there is nothing left to choose - the rows and the words pair off one to one, and every one of those words takes the mark.";
  "SO YOU MAY LOVE HIM WITH ALL YOUR HEART seats the covenant name twice and draws it once, and the leftover row is glossed Him, and the verse holds one plain Him. He saw that the Israelites were suffering and God took notice seats God twice the same way. The pronoun and the repeated noun are the two shapes this settles, and both are the same fact: English says a thing once and then points back at it, while the original says it again.";
  "A LITTLE WORD IS ONLY DRAWN ON WHEN THE ROOT ITSELF MEANS THAT LITTLE WORD, AND THAT RULE WAS PAID FOR. The interlinear lines its glosses up with the translation word by word, and that lining up slips: the Hebrew and the LORD, sitting on the covenant name, came back glossed with the bare word and, and a verse reading the LORD was with him and made him prosper lost its conjunction to a second name tag. Thirteen verses were repaired that way before the slip was seen, and every one of them read as broken English afterwards. So a joining word now has to be spelled in the root's own gloss before a mark may stand on it, which is why the Greek kai still takes the and it means and the Hebrew covenant name no longer does.";
  "THE SAME GUARD RUNS THE OTHER WAY ROUND FOR A ROOT THAT IS ITSELF A LITTLE WORD. The negation root means not and nothing else, so a row of it glossed yourselves is the lining up slipping again rather than an English word to draw on - do not cut yourselves came back with the second not sitting on yourselves. When a root's whole gloss is made of joining words, only those words may carry its mark.";
  "EVERY OTHER VERSE IS REFUSED, AND THE REFUSALS ARE THE ANSWER AS MUCH AS THE REPAIRS ARE. Two shared words is a choice between them, one leftover row against two plain words is a choice of place, and a choice is a person's. A gloss that names no plain word at all is a different fault wearing the same report line - a word genuinely left out of the English, or a word swallowed into another - and drawing a mark on a guess would file that fault away as fixed.";
  "A GLOSS IS COMPARED BY ITS LETTERS ALONE, so case and the full stop at the end of a verse cannot part two spellings of one word, and a gloss of several words matches only through the one word of it the root's own gloss names - see the phrase paragraph below - so a phrase naming none of the root, or two words of it, still matches nothing and is passed over rather than guessed at.";
  "ONLY THE PLAIN WORDS OF A VERSE ARE LOOKED AT, because a parsed verse holds two kinds of thing - the English a person typed, and the picture groups the shorthand turned into objects - and asking a group for its letters is asking a thing that has none.";
  "EACH VERSE COMMITS ITSELF under the name of the one entry it changed, because a run of independent repairs that commits once at the end loses every one of their names to a single sweep.";
  "A ROW'S GLOSS IS OFTEN A PHRASE AND ONLY ONE WORD OF IT IS THE ROOT (2026-09-17). The interlinear prints but Your name under a single Hebrew word, and read whole that phrase is spelled nowhere in the verse, so a hundred and fourteen of a hundred and forty six short verses were being refused for want of one shared word. So a row now stands for the one word of its phrase that the root's own gloss names, when exactly one does - name, out of but Your name, for the root glossed name. Nothing downstream moves: the word still has to stand in the verse as many times as the mark is short, on both sides, before a mark is drawn.";
  arguments_assert(arguments, 0);
  let joining_words = english_joining_words();
  let offenders = await bible_glyph_chapters_verse_marks_underdrawn();
  let filed = {};
  let drew = [];
  let left = [];
  await ai_git_noted();
  for (let offender of offenders) {
    let chapter_code = offender.chapter_code;
    let found = property_get_or_null(filed, chapter_code);
    let fresh = null_is(found);
    if (fresh) {
      found = await bible_glyph_chapter_rows_filed(chapter_code);
      property_set(filed, chapter_code, found);
    }
    let root_glosses = {};
    for (let one of found.roots) {
      for (let seat of one.words) {
        property_set(root_glosses, seat.strong, one.gloss);
      }
    }
    let row = null;
    for (let one of found.rows) {
      let same = equal(one.verse_number, offender.verse_number);
      if (same) {
        row = one;
      }
    }
    let rowless = null_is(row);
    if (rowless) {
      list_add(left, {
        offender,
        why: "the interlinear files no row for this verse",
      });
      continue;
    }
    let seated_rows = [];
    for (let word of row.words) {
      let seated = equal(word.glyph, offender.glyph);
      if (not(seated)) {
        continue;
      }
      let lowered = text_lower_to(word.gloss);
      let bare = text_letters_only(lowered);
      let root_gloss_seat = property_get_or_null(root_glosses, word.strong);
      let b = null_is(root_gloss_seat);
      let root_known = not(b);
      if (root_known) {
        let root_parts = text_lower_words_letters(root_gloss_seat);
        let named_parts = [];
        for (let part of text_lower_words_letters(word.gloss)) {
          let named = list_includes(root_parts, part);
          let again = list_includes(named_parts, part);
          if (named && not(again)) {
            list_add(named_parts, part);
          }
        }
        let one_named = equal(named_parts.length, 1);
        if (one_named) {
          bare = named_parts[0];
        }
      }
      list_add(seated_rows, {
        bare,
        strong: word.strong,
      });
    }
    let parsed = bible_glyph_chapter(chapter_code);
    let verse = null;
    for (let one of parsed.verses) {
      let same = equal(one.verse_number, offender.verse_number);
      if (same) {
        verse = one;
      }
    }
    let plains = [];
    for (let entry of verse.words) {
      let plain = text_is(entry);
      if (not(plain)) {
        continue;
      }
      list_add(plains, entry);
    }
    let seated_words = [];
    for (let one of seated_rows) {
      list_add(seated_words, one.bare);
    }
    let shared = [];
    for (let entry of plains) {
      let lowered2 = text_lower_to(entry);
      let bare2 = text_letters_only(lowered2);
      let seated2 = list_includes(seated_words, bare2);
      let already = list_includes(shared, bare2);
      let take = seated2 && not(already);
      if (take) {
        list_add(shared, bare2);
      }
    }
    let one_word = equal(shared.length, 1);
    if (not(one_word)) {
      list_add(left, {
        offender,
        shared,
        why: "the leftover rows and the plain words do not name one single English word between them",
      });
      continue;
    }
    let word_shared = shared[0];
    let entries = [];
    for (let entry of plains) {
      let lowered3 = text_lower_to(entry);
      let bare3 = text_letters_only(lowered3);
      let same_word = equal(bare3, word_shared);
      if (same_word) {
        list_add(entries, entry);
      }
    }
    let glossed = 0;
    let root_words = [];
    for (let one of seated_rows) {
      let same_gloss = equal(one.bare, word_shared);
      if (not(same_gloss)) {
        continue;
      }
      glossed = add(glossed, 1);
      let root_gloss = property_get_or_null(root_glosses, one.strong);
      let rootless = null_is(root_gloss);
      if (rootless) {
        continue;
      }
      for (let part of text_lower_words_letters(root_gloss)) {
        list_add(root_words, part);
      }
    }
    let word_joins = list_includes(joining_words, word_shared);
    let root_joins = true;
    for (let part of root_words) {
      let joins = list_includes(joining_words, part);
      if (not(joins)) {
        root_joins = false;
      }
    }
    let guarded = word_joins || root_joins;
    let rooted = list_includes(root_words, word_shared);
    let little = guarded && not(rooted);
    if (little) {
      list_add(left, {
        offender,
        word_shared,
        root_words,
        why: "the shared word is a little word the root itself does not mean, so the interlinear has lined its gloss up with the wrong English",
      });
      continue;
    }
    let short = subtract(offender.seats, offender.drew);
    let rows_match = equal(glossed, short);
    let words_match = equal(entries.length, short);
    let settled = rows_match && words_match;
    if (not(settled)) {
      list_add(left, {
        offender,
        word_shared,
        glossed,
        short,
        entries,
        why: "the shared word does not stand as many times as the mark is short",
      });
      continue;
    }
    for (let entry of entries) {
      let letters = text_letters_only(entry);
      let to = entry.replace(letters, "$" + offender.glyph);
      let done = await function_call_commit(
        bible_glyph_chapter_verse_word_replace,
        [chapter_code, offender.verse_number, entry, 1, to],
      );
      list_add(drew, done);
    }
  }
  let r = {
    drew,
    left,
  };
  return r;
}
