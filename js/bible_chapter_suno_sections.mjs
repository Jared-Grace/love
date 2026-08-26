import { arguments_assert } from "./arguments_assert.mjs";
import { bible_chapter_verses } from "./bible_chapter_verses.mjs";
import { suno_lyrics_characters_limit } from "./suno_lyrics_characters_limit.mjs";
import { property_get } from "./property_get.mjs";
import { text_size } from "./text_size.mjs";
import { add } from "./add.mjs";
import { less_than_equal_assert_json } from "./less_than_equal_assert_json.mjs";
import { list_add } from "./list_add.mjs";
import { text_lines_refrain_ends } from "./text_lines_refrain_ends.mjs";
import { list_sizes_sections_least } from "./list_sizes_sections_least.mjs";
import { list_sizes_section_ends_balanced } from "./list_sizes_section_ends_balanced.mjs";
import { list_sections_at_ends } from "./list_sections_at_ends.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export async function bible_chapter_suno_sections(bible_folder, chapter_code) {
  "$plain bible_folder";
  "$plain chapter_code";
  "One chapter of a bible cut into pieces small enough to be set to music one at a time, each piece ending where the chapter itself ends a part.";
  "A CHAPTER IS TOO LONG TO BE SUNG IN ONE GO AND THE SITE THAT SETS IT SIMPLY REFUSES THE OVERFLOW. Pasting a chapter in and letting the counter stop it takes the cut at whatever word the ceiling lands on, which is halfway through a sentence more often than not, and the part that was cut off then has to be sung as a fragment with no beginning.";
  "The places the writing itself repeats a closing form of words are gathered first and preferred over every other place to cut. Where the six days of the making each close with the same saying, the sections come out as whole days; where a chapter says nothing twice, nothing is preferred and the cuts fall wherever the sections come out most even.";
  "Verse numbers are left out. They would be sung.";
  "Each verse is counted as one character longer than it is, for the line break that will join it to the next. The last verse of a section has no line break after it, so a section is measured one character over and is never measured under - which is the direction that matters, because the ceiling is the site's and being a character under it costs nothing.";
  "Five words is how much of a closing sentence has to match another for the two to count as the same saying. Fewer and ordinary sentences begin alike often enough to mark places that close nothing; more and a saying that runs short is missed. Five was checked against the making of the world, where it finds the six days and the four verdicts and nothing else.";
  "A single verse longer than the whole ceiling is refused here rather than quietly given a section of its own that still overflows. No verse in any bible is anywhere near that long, so this is a claim about the reading having gone wrong - a whole chapter handed back as one row, most likely - and it says which bible and which chapter for that reason.";
  arguments_assert(arguments, 2);
  let verses = await bible_chapter_verses(bible_folder, chapter_code);
  let limit = suno_lyrics_characters_limit();
  let lines = [];
  let sizes = [];
  for (let verse of verses) {
    let line = property_get(verse, "text");
    let size = text_size(line);
    let with_break = add(size, 1);
    less_than_equal_assert_json(with_break, limit, {
      bible_folder,
      chapter_code,
      verse,
    });
    list_add(lines, line);
    list_add(sizes, with_break);
  }
  let preferred_ends = text_lines_refrain_ends(lines, 5);
  let sections = list_sizes_sections_least(sizes, limit);
  let ends = list_sizes_section_ends_balanced(
    sizes,
    limit,
    sections,
    preferred_ends,
  );
  let runs = list_sections_at_ends(lines, ends);
  let texts = [];
  for (let run of runs) {
    let text = list_join_newline(run);
    list_add(texts, text);
  }
  return texts;
}
