import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_verse_draw } from "./bible_glyph_verse_draw.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export function bible_glyph_chapters_verses_repeated() {
  arguments_assert(arguments, 0);
  ("Every verse of the written picture Bible that draws exactly the same text as an earlier verse of its own chapter, with how many verses were read to find them.");
  ("TWO VERSES THAT READ THE SAME ARE A VERSE THAT WAS NEVER WRITTEN. The commonest way it happens is a pair the author read as one sentence - the LORD said to Moses, saying, and then what He said - where the whole sentence got written into both slots. The first verse then says what the second says and the line it was supposed to carry is simply gone, with nothing anywhere reporting a gap.");
  ("IT IS WORTH GATING BECAUSE OF WHAT IT HAS ALREADY EATEN. The ten commandments are in this Bible twice, in the twentieth of Exodus and the fifth of Deuteronomy, and in both places four verses running carry the commandment about false witness - so murder, adultery and stealing are not in either copy. Every other reading of these chapters is green about that, because each of those four verses is a correct sentence with correctly seated pictures.");
  ("SOME REPEATS ARE THE TEXT ITSELF AND NOT A FAULT. Elijah says the same words at the tenth and the fourteenth verse of the nineteenth of First Kings because he says them twice; the fat and the kidneys are described in the same words for each offering in the third of Leviticus. Those are far apart in their chapter, and the ones that come from this fault are almost always neighbours - but the difference is a judgement rather than a rule, so this reports every repeat and the record next door is what holds the ones a person has read and kept.");
  ("IT COMPARES THE DRAWN TEXT rather than the stored words, because that is what a reader meets and it settles a mark and its English name being the same thing to look at.");
  ("IT COUNTS THE VERSES IT READ beside the offenders, so an empty answer can be told from a walk that reached nothing.");
  let chapters = bible_glyph_chapters();
  let lookup = bible_glyph_characters_lookup("");
  let verses_read = 0;
  let offenders = [];
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let parsed = bible_glyph_chapter(chapter_code);
    let verses = property_get(parsed, "verses");
    let seen = [];
    for (let verse of verses) {
      let verse_number = property_get(verse, "verse_number");
      let words = property_get(verse, "words");
      let drawn = bible_glyph_verse_draw(words, lookup);
      verses_read = verses_read + 1;
      let earlier = 0;
      for (let one of seen) {
        let left = property_get(one, "drawn");
        let same = equal(left, drawn);
        if (same) {
          earlier = property_get(one, "verse_number");
          break;
        }
      }
      let repeated = greater_than(earlier, 0);
      if (repeated) {
        list_add(offenders, {
          chapter_code,
          first: earlier,
          again: verse_number,
          apart: subtract(verse_number, earlier),
          drawn,
        });
        continue;
      }
      list_add(seen, {
        verse_number,
        drawn,
      });
    }
  }
  let r = {
    chapters: list_size(chapters),
    verses_read,
    offenders,
  };
  return r;
}
