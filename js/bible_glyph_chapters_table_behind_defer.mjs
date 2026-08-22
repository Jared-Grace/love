import { arguments_assert } from "./arguments_assert.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_chapters_table_behind_defer(
  rows,
  revisited,
  behind,
  deferred,
) {
  "Sorts the chapters lagging behind the root table into the ones somebody has already been back to and the ones still waiting their turn.";
  "IT IS THE THIRD STATE, and it exists because a gap and a fault stopped being the same thing. The order of work is one pass over every chapter and then a second pass back over all of them, so a word left in English in a chapter nobody has revisited is the queue for that second pass rather than something anybody got wrong.";
  "A CHAPTER SOMEBODY HAS BEEN BACK TO IS THE OTHER ANSWER ENTIRELY. There a word still in English is a person having read the verse and left the word alone without writing down why, which is the one case the settled list next door was built to catch and did not.";
  "IT WRITES INTO TWO LISTS IT WAS HANDED for the same reason as the reading above it: the two counts are only worth anything read together, and a caller that got one of them alone would draw the wrong conclusion from a number that looks small.";
  arguments_assert(arguments, 4);
  for (let row of rows) {
    let seen_again = property_in_list(row, "chapter_code", revisited);
    if (seen_again) {
      list_add(behind, row);
      continue;
    }
    list_add(deferred, row);
  }
}
