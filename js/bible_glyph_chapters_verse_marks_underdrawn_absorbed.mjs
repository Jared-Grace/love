import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_verse_marks_underdrawn_roots } from "./bible_glyph_chapters_verse_marks_underdrawn_roots.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { bible_glyph_gloss_plain_word_hit_or_null } from "./bible_glyph_gloss_plain_word_hit_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function bible_glyph_chapters_verse_marks_underdrawn_absorbed() {
  arguments_assert(arguments, 0);
  ("Every one root underdrawn verse told apart again, this time by whether the word left behind is STILL IN THE ENGLISH the chapter wrote or was never written there at all - which is the difference between a picture an author forgot to draw and a picture there is nowhere to put.");
  ("THE READING TWO DOORS DOWN COMPARES COUNTS AND NEVER POSITIONS AND SAYS SO ITSELF. That is honest and it is also the whole of the problem: a verse that seated the mark twice and drew it once is reported as a word left in plain letters, when very often the second word was never translated into a separate English word in the first place.");
  ("EZEKIEL THIRTY THREE VERSE TWO IS THE CASE THAT MADE THIS. The Hebrew says son of man, speak to the sons of your people. The author drew the son picture on the first one and wrote the second as your people with the family picture, because sons of your people is how Hebrew says your countrymen and no English translation keeps the word sons there. The count sees two seatings and one drawing and calls it a word left behind. There is no word left behind. There is no word.");
  ("SO THE REPAIR THE COUNT ASKS FOR IS SOMETIMES IMPOSSIBLE AND SOMETIMES TRIVIAL, and nothing in the list says which. Where the English still holds the word, the repair is to draw the mark on it and takes a second. Where the English never held it, drawing the mark means writing a word back into the sentence that every translator took out, and that is an authoring judgment about the reader rather than a defect to be cleared.");
  ("IT DECIDES BY LOOKING FOR THE GLOSS IN THE PLAIN WORDS. The interlinear already carries what each original word means in English, so the question is whether any plain undrawn word of the authored verse begins the way that gloss does. It matches on a shortened stem rather than the whole word because English inflects and the gloss does not, and it ignores pieces shorter than three letters because those match everything.");
  ("IT ANSWERS WITH BOTH LISTS RATHER THAN A NUMBER, because the only use for this is opening the ones that can be repaired, and a count of them cannot be opened.");
  let told = await bible_glyph_chapters_verse_marks_underdrawn_roots();
  let present = [];
  let absorbed = [];
  for (let offender of told) {
    let one_root = property_get(offender, "one_root");
    if (not(one_root)) {
      continue;
    }
    let chapter_code = property_get(offender, "chapter_code");
    let verse_number = property_get(offender, "verse_number");
    let glyph = property_get(offender, "glyph");
    let roots = property_get(offender, "roots");
    let root = roots[0];
    let filed_rows = await bible_glyph_chapter_rows_filed(chapter_code);
    let rows = property_get(filed_rows, "rows");
    let glosses = [];
    for (let row of rows) {
      let number = property_get(row, "verse_number");
      if (not(equal(number, verse_number))) {
        continue;
      }
      let words = property_get(row, "words");
      for (let word of words) {
        let word_glyph = property_get(word, "glyph");
        if (not(equal(word_glyph, glyph))) {
          continue;
        }
        let gloss = property_get(word, "gloss");
        list_add(glosses, gloss);
      }
    }
    let parsed = bible_glyph_chapter(chapter_code);
    let verses = property_get(parsed, "verses");
    let plain = [];
    for (let verse of verses) {
      let number = property_get(verse, "verse_number");
      if (not(equal(number, verse_number))) {
        continue;
      }
      let words = property_get(verse, "words");
      for (let word of words) {
        let drawn = word.startsWith("$");
        if (drawn) {
          continue;
        }
        let letters = text_letters_only(word);
        list_add(plain, text_lower_to(letters));
      }
    }
    let hit = bible_glyph_gloss_plain_word_hit_or_null(glosses, plain);
    let found = null_not_is(hit);
    let record = {
      chapter_code,
      verse_number,
      glyph,
      root,
      glosses,
      hit,
    };
    if (found) {
      list_add(present, record);
      continue;
    }
    list_add(absorbed, record);
  }
  return {
    present,
    absorbed,
  };
}
