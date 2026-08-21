import { text_letters_digits_none_is } from "./text_letters_digits_none_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_rosetta_lines } from "./bible_glyph_chapters_rosetta_lines.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { property_set_if_exists_not } from "./property_set_if_exists_not.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
export function bible_glyph_chapters_rosetta_lines_marks_only() {
  arguments_assert(arguments, 0);
  ("Every word of every written Rosetta band that is nothing but marks, with the distinct marks found and one line showing each - so a mark that reached the English is read here rather than by a stranger.");
  ("IT ASKS THE QUESTION THE GATE NEXT DOOR CANNOT ASK. That gate holds the band to a reading of notation that knows four marks, and it is green. Green there means no word of the band is one of those four; it says nothing whatever about a fifth mark, because a mark the reading has never heard of is not recognised, is not dropped, and passes the gate wearing the same face as a word. The two questions look like one question and they are opposites: the gate asks whether a known mark got through, this asks whether an unknown one did.");
  ("IT FINDS ITS SET BY A PROPERTY AND NEVER BY A LIST OF MARKS. A survey that went looking for a hyphen, an en dash and an em dash would find exactly the three somebody thought of, and would be silent about the fourth on the day it appeared - which is the whole failure being hunted, rebuilt one level up. Being nothing but marks is a property of the word itself, so a mark nobody has imagined yet is caught by the same line that catches the ones we know.");
  ("IT READS THE BANDS AND NOT THE TABLES, and that is deliberate. A mark the tables print and the reading drops correctly never reaches anybody and is not a fault; a mark that survives into the band is in front of a reader. Reading the tables would answer about marks, reading the bands answers about readers, and the second is the question. It is also the cheap one: the bands are fifteen small files in this repo, and the tables are seventy-seven megabytes.");
  ("IT ASKS THE SAME READING THE BUILDER ASKS, and that is what makes the answer mean anything. The builder of the band drops a word that is nothing but marks; this looks for one that is. Written with two readings of what counts as a mark, the survey would go green on exactly the words the builder had decided to keep, and the disagreement would be invisible because both halves would look right on their own.");
  ("A NUMERAL IS NOT A MARK AND STAYS. Three hundred has no letter in it and is still something a reader can say out loud, so a gloss that is a bare number is left alone by the builder and is not reported here. The property being asked is whether the word can be spoken at all, not whether it is spelled with letters.");
  ("IT DOES NOT THROW AND THE GATE NEXT DOOR DOES. What comes back needs a person to decide whether a mark should be dropped, spelled out, or left alone; this is the reading somebody does while deciding, and the gate is what holds the answer once it is made.");
  let chapters = bible_glyph_chapters_rosetta_lines();
  let found = [];
  let marks_seen = [];
  let examples = {};
  let words_total = 0;
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let verses = property_get(chapter, "verses");
    for (let verse of verses) {
      let english = property_get(verse, "english");
      let verse_number = property_get(verse, "verse_number");
      let words = text_split(english, " ");
      for (let word of words) {
        words_total = add(words_total, 1);
        let marks_only = text_letters_digits_none_is(word);
        if (not(marks_only)) {
          continue;
        }
        list_add(found, {
          chapter_code,
          verse_number,
          word,
        });
        list_add(marks_seen, word);
        property_set_if_exists_not(examples, word, english);
      }
    }
  }
  let marks = list_unique(marks_seen);
  let r = {
    chapters: list_size(chapters),
    words: words_total,
    marks_only: list_size(found),
    marks,
    examples,
    found,
  };
  return r;
}
