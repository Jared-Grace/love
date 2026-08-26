import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_root_lookup } from "./bible_glyph_roots_root_lookup.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_chapter_draft_words } from "./bible_glyph_chapter_draft_words.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_colon } from "./list_join_colon.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_verse_draw } from "./bible_glyph_verse_draw.mjs";
import { add } from "./add.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export async function bible_glyph_chapters_marks_entries_lines(entries) {
  "$plain entries";
  "Each is one mark somebody has to look at, saying which chapter, which verse, which picture, and how many marks the verse drew on it.";
  "A list of marks laid out with everything a person needs to judge them by hand: the verse as a reader sees it drawn, and every original word in that verse the picture is seated on, numbered by where it stands in the original.";
  "IT IS THE SAME LAYOUT FOR EVERY READING THAT ENDS IN A PERSON, and there are at least two of those. One hands over marks whose root the interlinear could not decide; the other hands over verses that drew a picture and left another word for it standing in English. The two findings are not the same fault and are found by different walks, but the thing a person needs in front of them is identical, and it was written twice before it was written once.";
  "BOTH SIDES ARE PRINTED BECAUSE NEITHER SETTLES IT ALONE. The drawn verse says where the marks are and in what order; the original words say what is in play and in what order.";
  "THE POSITION IS PRINTED BECAUSE ADJACENCY IS A REASON. Two seated words standing side by side in the original are not the same case as two at opposite ends of the verse - the Greek emphatic double negative is two words and one negation, and a reader who cannot see that they were touching has to go and look the verse up to find out.";
  "IT DECIDES NOTHING AND WRITES NOTHING. What comes out is text for a person, because the reason any of these arrive here is that no rule reached them.";
  arguments_assert(arguments, 1);
  let lookup = bible_glyph_characters_lookup([]);
  let chapter_rows = {};
  let chapter_filed = {};
  let lines = [];
  for (let entry of entries) {
    let chapter_code = entry.chapter_code;
    let fetched = property_exists(chapter_rows, chapter_code);
    if (not(fetched)) {
      let testament_name = bible_chapter_testament_name(chapter_code);
      let roots = bible_glyph_roots_testament_table(testament_name);
      let value = bible_glyph_roots_root_lookup(roots);
      property_set(chapter_filed, chapter_code, value);
      let fresh = await bible_glyph_chapter_draft_words(
        chapter_code,
        testament_name,
      );
      property_set(chapter_rows, chapter_code, fresh);
    }
    let filed = property_get(chapter_filed, chapter_code);
    let rows = property_get(chapter_rows, chapter_code);
    let joined = list_join_colon(["v", entry.verse_number]);
    let joined2 = list_join_colon(["drew", entry.drew]);
    let heading = list_join_space([chapter_code, joined, entry.glyph, joined2]);
    list_add(lines, heading);
    let parsed = bible_glyph_chapter(chapter_code);
    for (let verse of parsed.verses) {
      let here = equal(verse.verse_number, entry.verse_number);
      if (here) {
        let item = bible_glyph_verse_draw(verse.words, lookup);
        list_add(lines, item);
      }
    }
    for (let row of rows) {
      let here = equal(row.verse_number, entry.verse_number);
      if (not(here)) {
        continue;
      }
      let place = 0;
      for (let word of row.words) {
        place = add(place, 1);
        let seated = equal(word.glyph, entry.glyph);
        if (not(seated)) {
          continue;
        }
        let root_name = property_get(filed, word.strong);
        let joined3 = list_join_empty([word.gloss]);
        let at = list_join_colon(["at", place]);
        let line = list_join_space([
          "   ",
          at,
          root_name,
          word.strong,
          word.original,
          joined3,
        ]);
        list_add(lines, line);
      }
    }
    list_add(lines, "");
  }
  let text = list_join_newline(lines);
  return text;
}
