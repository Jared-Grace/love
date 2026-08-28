import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_verse_draw } from "./bible_glyph_verse_draw.mjs";
import { bible_glyph_text_space_wrong_positions } from "./bible_glyph_text_space_wrong_positions.mjs";
import { not } from "./not.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export function bible_glyph_chapters_verses_space_wrong() {
  arguments_assert(arguments, 0);
  ("Every verse of the written picture Bible whose drawn text sets a gap at the wrong width, with how many verses were drawn to find them.");
  ("THE GAP IS THE ENTIRE PUNCTUATION OF THIS WRITING SYSTEM. Pictures touching are one word and pictures apart are two, and nothing else says so - no ring round the group, no joining mark. The width of one character carries the whole difference between a word and two words, which is why a character nobody can see on a screen is worth a walk of the whole Bible.");
  ("IT ASKS BOTH DIRECTIONS AT ONCE BECAUSE THEY ARE ONE RULE. Too narrow between two pictures and the reader meets one long word nobody wrote; too wide between two English words and a sentence reads as a list. ",
    fn_name("bible_glyph_text_space_wrong_positions"),
    " holds the rule, and this walks the Bible past it.");
  ("IT ASKS THE DRAWN TEXT RATHER THAN THE JOINER, and that is the whole reason it is worth running. The separator is chosen in one named place now, and reading that function says nothing about the page: text is joined in more than one place, a page hands a finished line to a second view, and any of those can put the wrong character back without touching the function that decided what the separator is. What a reader meets is the finished text, so the finished text is what gets asked.");
  ("IT DRAWS RATHER THAN READING WHAT IS STORED, because the store holds glyph names and English words and no separator at all. The separator only exists once a verse has been drawn, which means this reading cannot be replaced by a search of the chapter files.");
  ("THE VERSE NUMBER IS NOT PART OF WHAT IS ASKED. A drawn chapter puts the number in front of each verse with an ordinary space after it, which is correct - that space separates a number from a sentence, not one word from the next - so this walks verses and never chapters, and the number never enters the text being looked at.");
  ("IT COUNTS THE VERSES IT DREW beside the offenders, so an empty answer can be told from a walk that reached nothing. A reading that loaded no chapters would report no bad gaps anywhere, and that reads as good news while meaning that nothing was looked at.");
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
      let wrong = bible_glyph_text_space_wrong_positions(drawn, lookup);
      let b = list_empty_is(wrong);
      let any = not(b);
      if (any) {
        list_add(offenders, {
          chapter_code,
          verse_number,
          wrong,
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
