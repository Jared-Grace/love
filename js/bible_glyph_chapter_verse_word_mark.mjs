import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_characters } from "./bible_glyph_characters.mjs";
import { equal } from "./equal.mjs";
import { null_is } from "./null_is.mjs";
import { error } from "./error.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { not } from "./not.mjs";
import { text_is } from "./text_is.mjs";
import { bible_glyph_chapter_verse_word_replace } from "./bible_glyph_chapter_verse_word_replace.mjs";
export async function bible_glyph_chapter_verse_word_mark(
  chapter_code,
  verse_number,
  word,
  occurrence,
  glyph,
) {
  "Draws one mark on one plain word of one verse, the word named by its letters alone, keeping whatever punctuation the verse spells around it.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It names a file to read and nothing that runs.";
  "$plain word";
  "the word's letters, in any case. It names text to find and nothing that runs.";
  "$plain glyph";
  "a mark's name as the character table spells it. It names a picture and nothing that runs.";
  "THE ENTRY WRITER NEXT DOOR NEEDS THE ENTRY SPELLED EXACTLY, full stop and comma included, and a command line cannot carry those, because a list argument is split on commas and dots. So this names the word by its letters and finds the spelling itself, the same way the underdrawn repair compares a verse's words: case and punctuation cannot part two spellings of one word.";
  "OCCURRENCE COUNTS WORDS WITH THOSE LETTERS, NOT EXACT SPELLINGS. In for this is from me the second this is written this and in over this, and he called it is written this, - the person naming the verse counts the word they read, so the count here is over letters, and the exact spelling's own count is worked out before handing on.";
  "IT REFUSES A MARK THE TABLE DOES NOT HOLD, because a misspelt mark would be written into scripture as a word nothing can draw.";
  arguments_assert(arguments, 5);
  let known = null;
  for (let one of bible_glyph_characters()) {
    if (equal(one.name, glyph)) {
      known = one;
    }
  }
  if (null_is(known)) {
    error({
      hint: "no mark with this name is in the character table",
      glyph,
    });
  }
  let t = text_lower_to(word);
  let wanted = text_letters_only(t);
  let parsed = bible_glyph_chapter(chapter_code);
  let verse = null;
  for (let one of parsed.verses) {
    let left = String(one.verse_number);
    let right = String(verse_number);
    if (equal(left, right)) {
      verse = one;
    }
  }
  if (null_is(verse)) {
    error({
      hint: "no verse with this number was found in the chapter",
      chapter_code,
      verse_number,
    });
  }
  let seen = 0;
  let spelled_seen = {};
  let entry = null;
  let spelled_occurrence = 0;
  for (let one of verse.words) {
    let b = text_is(one);
    if (not(b)) {
      continue;
    }
    let count = spelled_seen[one] || 0;
    spelled_seen[one] = count + 1;
    let t2 = text_lower_to(one);
    let letters = text_letters_only(t2);
    let b2 = equal(letters, wanted);
    if (not(b2)) {
      continue;
    }
    seen = seen + 1;
    let left2 = String(seen);
    let right2 = String(occurrence);
    if (equal(left2, right2)) {
      entry = one;
      spelled_occurrence = spelled_seen[one];
    }
  }
  if (null_is(entry)) {
    error({
      hint: "the verse holds no such occurrence of this word",
      chapter_code,
      verse_number,
      word,
      occurrence,
      seen,
    });
  }
  let letters = text_letters_only(entry);
  let to = entry.replace(letters, "$" + glyph);
  if (equal(to, entry)) {
    error({
      hint: "the word's letters are not one unbroken run inside the entry, so there is no single place to draw the mark",
      entry,
    });
  }
  let done = await bible_glyph_chapter_verse_word_replace(
    chapter_code,
    verse_number,
    entry,
    spelled_occurrence,
    to,
  );
  return done;
}
