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

export async function bible_glyph_roots_wordings_split(testament_name) {
  arguments_assert(arguments, 1);
  ("Every word one testament's seed table seats on a picture, measured against every English wording the interlinear gives it, weakest seat first.");
  ("$plain testament_name");
  ("the name is a testament's own, spelled as the book divisions spell it. It names which table to read and nothing that runs.");
  ("EVERY SEAT IN THE TABLE WAS ARGUED ONE AT A TIME BY HAND, and the argument was always this reading: the staff was refused because the interlinear glosses it of the tribe far more often than the staff, the bread was taken because every wording given it says bread. Each of those was somebody doing this by eye for one number and then writing the answer into the prose. Done for the whole table at once it stops being an argument and becomes a reading list, ordered so the seats most worth re-reading come first.");
  ("IT HANDS BACK NO VERDICT AND CANNOT. Whether two wordings are the same word in different clothes is a question about the language, and darkness against blackness answers one way while of the tribe against the staff answers the other. Nothing here can tell those apart, so nothing here tries: the share is the top wording's alone, which puts a word spread over several near-synonyms low in the list beside a word genuinely split in two, and a person reads the wordings to say which it is.");
  ("THE WHOLE TALLY TRAVELS WITH EACH ROW rather than the share on its own, because the share is the thing that got somebody to look and the wordings are the thing they look at. Handing back the number alone would send every reader back to the interlinear to ask the question this already asked.");
  ("A word the interlinear never glosses comes back measured and empty rather than missing, so a seat nobody can measure sits at the top of the reading list instead of quietly falling out of it.");
  function bible_glyph_roots_wordings_split_count(wording) {
    let n = wording.count;
    return n;
  }
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
      let total = list_map_sum(wordings, bible_glyph_roots_wordings_split_count);
      let top = "";
      let top_count = 0;
      let measured = list_empty_not_is(wordings);
      if (measured) {
        let commonest = list_first(wordings);
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
        wordings,
      };
      list_add(rows, row);
    }
  }
  let sorted = list_sort_number_mapper(rows, bible_glyph_roots_wordings_split_share);
  return sorted;
}

function bible_glyph_roots_wordings_split_count(wording) {
  let n = wording.count;
  return n;
}

function bible_glyph_roots_wordings_split_share(row) {
  let n = row.share;
  return n;
}
