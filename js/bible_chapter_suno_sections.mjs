import { arguments_assert } from "./arguments_assert.mjs";
import { bible_chapter_verses } from "./bible_chapter_verses.mjs";
import { bible_chapter_sense_groups } from "./bible_chapter_sense_groups.mjs";
import { bible_chapter_sense_group_texts } from "./bible_chapter_sense_group_texts.mjs";
import { suno_lyrics_characters_limit } from "./suno_lyrics_characters_limit.mjs";
import { text_size } from "./text_size.mjs";
import { add } from "./add.mjs";
import { less_than_equal_assert_json } from "./less_than_equal_assert_json.mjs";
import { list_add } from "./list_add.mjs";
import { list_sizes_sections_least } from "./list_sizes_sections_least.mjs";
import { list_sizes_section_ends_balanced } from "./list_sizes_section_ends_balanced.mjs";
import { list_sections_at_ends } from "./list_sections_at_ends.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export async function bible_chapter_suno_sections(bible_folder, chapter_code) {
  "$plain bible_folder";
  "$plain chapter_code";
  "One chapter of a bible cut into pieces small enough to be set to music one at a time, never cutting through one of the chapter's own parts.";
  "A CHAPTER IS TOO LONG TO BE SUNG IN ONE GO AND THE SITE THAT SETS IT SIMPLY REFUSES THE OVERFLOW. Pasting a chapter in and letting the counter stop it takes the cut at whatever word the ceiling lands on, which is halfway through a sentence more often than not, and the part that was cut off then has to be sung as a fragment with no beginning.";
  "WHERE THE PARTS OF A CHAPTER ARE IS READ, NOT WORKED OUT HERE. Nothing in the letters says where a thought begins and ends, and every rule that seems to say so is a rule about one chapter that happens to be tidy. So the divisions come from somebody who read the chapter, and a chapter nobody has read stops this rather than being cut on a guess.";
  "All this does with them is decide how many of them go in each piece. Whichever parts a piece holds it holds whole, so wherever a piece ends, it ends where the chapter itself ends something.";
  "Nothing is preferred over anything else when choosing where a piece stops, because every place it could stop is already the end of a part. Evenness is the only question left, and the pieces come out as near the same length as the parts allow.";
  "Verse numbers are left out. They would be sung.";
  "Each part is counted as one character longer than it is, for the line break that will join it to the next. The last part of a piece has no line break after it, so a piece is measured one character over and is never measured under - which is the direction that matters, because the ceiling is the site's and being a character under it costs nothing.";
  "A single part longer than the whole ceiling stops this rather than being quietly given a piece of its own that still overflows. That is a division written too coarsely for singing, and the repair is to say where it divides again, so it names the chapter and the words that would not fit.";
  arguments_assert(arguments, 2);
  let verses = await bible_chapter_verses(bible_folder, chapter_code);
  let groups = await bible_chapter_sense_groups(chapter_code);
  let parts = bible_chapter_sense_group_texts(verses, groups, chapter_code);
  let limit = suno_lyrics_characters_limit();
  let sizes = [];
  for (let part of parts) {
    let size = text_size(part);
    let with_break = add(size, 1);
    less_than_equal_assert_json(with_break, limit, {
      bible_folder,
      chapter_code,
      part,
    });
    list_add(sizes, with_break);
  }
  let sections = list_sizes_sections_least(sizes, limit);
  let ends = list_sizes_section_ends_balanced(sizes, limit, sections, []);
  let runs = list_sections_at_ends(parts, ends);
  let texts = [];
  for (let run of runs) {
    let text = list_join_newline(run);
    list_add(texts, text);
  }
  return texts;
}
