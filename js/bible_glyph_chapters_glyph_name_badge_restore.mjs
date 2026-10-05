import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { bible_glyph_name_badge_entry } from "./bible_glyph_name_badge_entry.mjs";
import { bible_glyph_chapter_word_entry_replace } from "./bible_glyph_chapter_word_entry_replace.mjs";
export async function bible_glyph_chapters_glyph_name_badge_restore(
  glyph,
  name,
) {
  "Puts the name badge and the name's letters back wherever the written picture Bible chapters draw a name by a seat that has been taken away, over every chapter.";
  "$plain glyph";
  "the glyph is the seat the name was drawn by, spelled as the table spells it, a group's halves joined by a plus. It names text to find and nothing that runs.";
  "$plain name";
  "the name is the English letters the badge carries, capital first, the way the badge drawer wrote it. It is written down as text and nothing about it runs.";
  "IT IS THE UNDO OF THE SEATED DRAWER, and it exists because a seat can be right in the table and wrong on the page. On 2026-10-05 Esau was seated on the hair and the tag and Jonathan on the I AM and the giving hands, and the seated drawer drew both before the gates said no: the hair has no artwork, so half of Esau arrived from the reader's font, and the LORD gave, written as two words side by side, now read as Jonathan. Taking the seat out of the table stops it spreading; this takes it off the page.";
  "IT ONLY TOUCHES A WHOLE ENTRY THAT IS THE SEAT AND ITS PUNCTUATION, so a longer group sharing the seat's first half is never mistaken for it, and the punctuation behind the seat goes back behind the letters.";
  arguments_assert(arguments, 2);
  let seat = "$" + glyph;
  let restored = 0;
  let touched = 0;
  for (let chapter of bible_glyph_chapters()) {
    let words = [];
    for (let verse of chapter.verses) {
      for (let word of verse.words) {
        if (not_equal(typeof word, "string") || not(word.startsWith(seat))) {
          continue;
        }
        let suffix = word.slice(seat.length);
        let left = text_letters_only(suffix);
        if (not_equal(left, "") && not(/^['’]s/.test(suffix))) {
          continue;
        }
        let b = words.includes(word);
        if (not(b)) {
          words.push(word);
        }
      }
    }
    for (let word of words) {
      let suffix = word.slice(seat.length);
      let entry = bible_glyph_name_badge_entry(name + suffix);
      let done = await bible_glyph_chapter_word_entry_replace(
        chapter.chapter_code,
        word,
        entry,
      );
      restored = restored + done.replaced;
    }
    if (greater_than(words.length, 0)) {
      touched = touched + 1;
    }
  }
  let r = {
    glyph,
    name,
    touched,
    restored,
  };
  return r;
}
