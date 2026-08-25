import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_strong_glosses } from "./bible_strong_glosses.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_first } from "./list_first.mjs";
import { greater_than } from "./greater_than.mjs";
import { divide } from "./divide.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { text_words_content } from "./text_words_content.mjs";
import { list_unique } from "./list_unique.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { add } from "./add.mjs";
export async function bible_glyph_roots_wordings_split(testament_name) {
  arguments_assert(arguments, 1);
  ("Every word one testament's seed table seats on a picture, measured against every English wording the interlinear gives it, weakest seat first.");
  ("$plain testament_name");
  ("the name is a testament's own, spelled as the book divisions spell it. It names which table to read and nothing that runs.");
  ("EVERY SEAT IN THE TABLE WAS ARGUED ONE AT A TIME BY HAND, and the argument was always this reading: the staff was refused because the interlinear glosses it of the tribe far more often than the staff, the bread was taken because every wording given it says bread. Each of those was somebody doing this by eye for one number and then writing the answer into the prose. Done for the whole table at once it stops being an argument and becomes a reading list, ordered so the seats most worth re-reading come first.");
  ("HOW ONE SEAT IS MEASURED IS ANSWERED NEXT DOOR, one row at a time. What is left here is which table to read, that every word of every root gets a row, and the order they come back in.");
  ("THE WORDINGS THEMSELVES ARE NOT CARRIED. They are one call to ",
    fn_name("bible_strong_gloss_wordings"),
    " away and are left there, because a hundred and thirty rows each carrying every turn of phrase given it is not a list anybody reads.");
  function bible_glyph_roots_wordings_split_share(row) {
    let n = row.share;
    return n;
  }
  let roots = bible_glyph_roots_testament_table(testament_name);
  let ranked = await bible_strong_glosses(testament_name);
  let rows = [];
  for (let root of roots) {
    for (let word of root.words) {
      let strong = word.strong;
      let glyph = word.glyph;
      let wordings = property_get_or_null(ranked, strong);
      let unglossed = null_is(wordings);
      if (unglossed) {
        wordings = [];
      }
      let total = list_map_sum(
        wordings,
        bible_glyph_roots_wordings_split_count,
      );
      let tally = {};
      for (let wording of wordings) {
        let content = text_words_content(wording.value);
        let said_once = list_unique(content);
        for (let said of said_once) {
          let before = property_get_or_null(tally, said);
          let fresh = null_is(before);
          if (fresh) {
            before = 0;
          }
          let after = add(before, wording.count);
          property_set(tally, said, after);
        }
      }
      let words = [];
      for (let said of object_property_names(tally)) {
        let count = property_get(tally, said);
        let counted_word = {
          value: said,
          count,
        };
        list_add(words, counted_word);
      }
      let ranked_words = list_sort_number_mapper_reverse(
        words,
        bible_glyph_roots_wordings_split_count,
      );
      let top = "";
      let top_count = 0;
      let measured = list_empty_not_is(ranked_words);
      if (measured) {
        let commonest = list_first(ranked_words);
        top = commonest.value;
        top_count = commonest.count;
      }
      let share = 0;
      let counted = greater_than(total, 0);
      if (counted) {
        share = divide(top_count, total);
      }
      let row = {
        root: root.root,
        strong,
        glyph,
        total,
        top,
        top_count,
        share,
        words: ranked_words,
      };
      list_add(rows, row);
    }
  }
  let sorted = list_sort_number_mapper(
    rows,
    bible_glyph_roots_wordings_split_share,
  );
  return sorted;
}
