import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { bible_glyph_characters } from "./bible_glyph_characters.mjs";
import { property_set } from "./property_set.mjs";
import { ebible_book_testaments } from "./ebible_book_testaments.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { add } from "./add.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
export function bible_glyph_roots_characters_gate_run() {
  "Checks that every glyph a root table seats a word under is a glyph the vocabulary actually has a character for.";
  "A GLYPH TABLE IS THREE TABLES AND NOTHING WAS CHECKING THE JOIN BETWEEN TWO OF THEM. A word is seated under a glyph name in a root table; the vocabulary turns that name into a character; the artwork list turns it into a picture. The artwork check walks the vocabulary and the chapter check walks the chapters, so between them they cover the second and third tables - and a name that exists only in a ROOT table, seated under a word no written chapter has reached yet, is checked by neither.";
  "AND IT FAILS BY THROWING RATHER THAN BY LEAVING A BLANK, which is why it is worth a gate of its own rather than a note. The lookup that turns a name into a character asserts, so the first chapter to use that word takes the whole page down; there is no half-drawn verse to notice and no placeholder to read. The mistake is made in one table months before the table that suffers it is opened.";
  "IT WALKS THE TESTAMENTS RATHER THAN NAMING THE TABLES, so a third table added later is covered without this being edited. The testament list is the same one the book divisions are grouped by, and the one place that says which table belongs to which testament answers for each name in turn - so this gate cannot fall behind the tables it is checking.";
  "IT PASSES AT ZERO AND ALWAYS SHOULD. Both tables were clean the day it was written, so this is a door shut before anything got in rather than a queue of work; there is no baseline to ratchet and none is wanted. A gate that starts at zero is the only kind that can honestly refuse the first offender.";
  "IT COUNTS WHAT IT WALKED and hands the count back, because a gate that returns nothing on a clean run reads the same whether it swept two tables or none.";
  "A SEATED FIELD MAY NAME A GROUP RATHER THAN ONE PICTURE, so each name in it is asked about separately and the count still counts words. A group half seated is the worst version of this fault - one picture draws, the other comes out as a name in angle brackets, and the reader meets half a word - so a report names both the whole field and the one name inside it that is missing.";
  let characters = bible_glyph_characters();
  let known = {};
  for (let character of characters) {
    property_set(known, character.name, true);
  }
  let testaments = ebible_book_testaments();
  let missing = [];
  let walked = 0;
  for (let testament of testaments) {
    let testament_name = property_get(testament, "name");
    let roots = bible_glyph_roots_testament_table(testament_name);
    for (let root of roots) {
      for (let word of root.words) {
        walked = add(walked, 1);
        for (let name of bible_glyph_group_names(word.glyph)) {
          let drawn = property_exists(known, name);
          if (drawn) {
            continue;
          }
          let gap = {
            testament_name,
            root: root.root,
            strong: word.strong,
            glyph: word.glyph,
            name,
          };
          list_add(missing, gap);
        }
      }
    }
  }
  let none = list_empty_is(missing);
  assert_json(none, {
    missing,
    hint: "these roots are seated under a glyph the vocabulary has no character for, so the first chapter to use one of these words will throw rather than draw - give each glyph a character, or seat the word under one that already has one",
  });
  let r = {
    testaments: testaments.length,
    words: walked,
    glyphs: characters.length,
  };
  return r;
}
