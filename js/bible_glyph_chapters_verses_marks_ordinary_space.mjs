import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_verse_draw } from "./bible_glyph_verse_draw.mjs";
import { bible_glyph_text_marks_ordinary_space_is } from "./bible_glyph_text_marks_ordinary_space_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export function bible_glyph_chapters_verses_marks_ordinary_space() {
  "Every verse of the written picture Bible whose drawn text puts an ordinary space between two pictures, with how many verses were drawn to find them.";
  "AN ORDINARY SPACE BETWEEN TWO PICTURES IS A LOST WORD BOUNDARY. The gap between two words is the entire punctuation of this writing system - pictures touching are one word, pictures apart are two - and the pictures either side of it are about an em wide each. An ordinary space is a quarter of that, so where one falls between two pictures the reader is being asked to see a boundary a quarter the width of the things it separates, and the likeliest thing they see instead is one long word nobody wrote.";
  ("AN ORDINARY SPACE ANYWHERE ELSE IS CORRECT AND IS WHAT MOST OF A VERSE IS MADE OF. ",
    fn_name("bible_glyph_word_pair_separator"),
    " widens only the gap that can be misread, because a letter or a comma at either edge separates the two words by itself. This reading was once a refusal of the ordinary space outright, which was right while every gap was widened and would now condemn nearly every verse in the Bible.");
  ("IT ASKS THE DRAWN TEXT RATHER THAN THE JOINER, and that is the whole reason it is worth running. The separator is chosen in one named place now and reading that function says nothing about the page: text is joined in more than one place, a page hands a finished line to a second view, and any of those can put a space back without touching the function that decided what the separator is. What a reader meets is the finished text, so the finished text is what gets asked.");
  ("IT DRAWS RATHER THAN READING WHAT IS STORED, because the store holds glyph names and English words and no separator at all. The separator only exists once a verse has been drawn, which means this reading cannot be replaced by a search of the chapter files.");
  ("THE VERSE NUMBER IS NOT PART OF WHAT IS ASKED. A drawn chapter puts the number in front of each verse with an ordinary space after it, which is correct - that space separates a number from a sentence, not one word from the next - so this walks verses and never chapters, and the number never enters the text being looked at.");
  ("IT COUNTS THE VERSES IT DREW beside the offenders, so an empty answer can be told from a walk that reached nothing. A reading that loaded no chapters would report no bad spaces anywhere, and that reads as good news while meaning that nothing was looked at.");
  arguments_assert(arguments, 0);
  let chapters = bible_glyph_chapters();
  let lookup = bible_glyph_characters_lookup("");
  let verses_drawn = 0;
  let offenders = [];
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let parsed = bible_glyph_chapter(chapter_code);
    let verses = property_get(parsed, "verses");
    for (let verse of verses) {
      let verse_number = property_get(verse, "verse_number");
      let words = property_get(verse, "words");
      let drawn = bible_glyph_verse_draw(words, lookup);
      verses_drawn = verses_drawn + 1;
      let found = bible_glyph_text_marks_ordinary_space_is(drawn, lookup);
      if (found) {
        list_add(offenders, {
          chapter_code,
          verse_number,
          drawn,
        });
      }
    }
  }
  let r = {
    chapters: list_size(chapters),
    verses_drawn,
    offenders,
  };
  return r;
}
