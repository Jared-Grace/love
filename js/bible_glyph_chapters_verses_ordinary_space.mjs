import { arguments_assert } from "./arguments_assert.mjs";
import { text_from_code_number } from "./text_from_code_number.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_verse_draw } from "./bible_glyph_verse_draw.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export function bible_glyph_chapters_verses_ordinary_space() {
  "Every verse of the written picture Bible whose drawn text still holds an ordinary space, with how many verses were drawn to find them.";
  "AN ORDINARY SPACE IN A DRAWN VERSE IS A LOST WORD BOUNDARY. The gap between two words is the entire punctuation of this writing system - pictures touching are one word, pictures apart are two - and the pictures either side of it are about an em wide each. An ordinary space is a quarter of that, so where one survives the reader is being asked to see a boundary a quarter the width of the things it separates, and the likeliest thing they see instead is one long word nobody wrote.";
  "IT ASKS THE DRAWN TEXT RATHER THAN THE JOINER, and that is the whole reason it is worth running. The separator is a single named character now and reading that function says nothing about the page: text is joined in more than one place, a page hands a finished line to a second view, and any of those can put a space back without touching the function that decided what the separator is. What a reader meets is the finished text, so the finished text is what gets asked.";
  "IT DRAWS RATHER THAN READING WHAT IS STORED, because the store holds glyph names and English words and no separator at all. The separator only exists once a verse has been drawn, which means this reading cannot be replaced by a search of the chapter files.";
  "THE VERSE NUMBER IS NOT PART OF WHAT IS ASKED. A drawn chapter puts the number in front of each verse with an ordinary space after it, which is correct - that space separates a number from a sentence, not one word from the next - so this walks verses and never chapters, and the number never enters the text being looked at.";
  "IT COUNTS THE VERSES IT DREW beside the offenders, so an empty answer can be told from a walk that reached nothing. A reading that loaded no chapters would report no ordinary spaces anywhere, and that reads as good news while meaning that nothing was looked at.";
  arguments_assert(arguments, 0);
  let space = text_from_code_number(32);
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
      let found = text_includes(drawn, space);
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
