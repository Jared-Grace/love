import { bible_glyph_roots_word_row } from "./bible_glyph_roots_word_row.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_strong_glosses } from "./bible_strong_glosses.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
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
      let row = bible_glyph_roots_word_row(root.root, word, ranked);
      list_add(rows, row);
    }
  }
  let sorted = list_sort_number_mapper(
    rows,
    bible_glyph_roots_wordings_split_share,
  );
  return sorted;
}
