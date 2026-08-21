import { bible_glyph_group_characters } from "./bible_glyph_group_characters.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_drawn_lookup } from "./bible_glyph_roots_drawn_lookup.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { bible_glyph_draft_gap } from "./bible_glyph_draft_gap.mjs";
import { add } from "./add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
export async function bible_glyph_chapter_draft_lines(
  chapter_code,
  testament_name,
  traditions,
) {
  "A chapter drawn STRAIGHT FROM THE SEED TABLE, one numbered line of pictures per verse, so a person can see the page a reader would actually meet at today's coverage.";
  "$plain chapter_code";
  "$plain testament_name";
  "$plain traditions";
  "This is a DRAFT and never scripture. An authored chapter is a person's judgment about what each word of that verse is doing, and this is a lookup - it draws whatever glyph the table happens to seat under each number, with no view about the sentence at all. Reading it as a Bible would be reading a table as a translation.";
  "It exists because a coverage percentage cannot be read. Knowing that a quarter of the words are drawn says nothing about whether the drawn quarter carries a sentence, and one look at a real verse settles it - a page that turns out to be pictures strung on nothing has just told you the vocabulary is missing the joints rather than the nouns.";
  "AN UNDRAWN WORD IS A VISIBLE GAP rather than a silent omission, and the difference is the whole value of looking. Dropping the undrawn words would close the sentence up and make the coverage look far better than it is; leaving a mark shows the reader exactly how much of the line is missing.";
  let roots = bible_glyph_roots_testament_table(testament_name);
  let drawn = bible_glyph_roots_drawn_lookup(roots);
  let lookup = bible_glyph_characters_lookup(traditions);
  let verses = await bible_interlinear_chapter_words(chapter_code);
  let gap = bible_glyph_draft_gap();
  let lines = [];
  let verse_number = 0;
  for (let verse of verses) {
    verse_number = add(verse_number, 1);
    let pictures = [];
    for (let word of verse.words) {
      let glyph = property_get_or_null(drawn, word.strong);
      let undrawn = null_is(glyph);
      if (undrawn) {
        list_add(pictures, gap);
        continue;
      }
      let character = bible_glyph_group_characters(glyph, lookup);
      list_add(pictures, character);
    }
    let joined = list_join_space(pictures);
    let line = verse_number + " " + joined;
    list_add(lines, line);
  }
  return lines;
}
