import { arguments_assert } from "./arguments_assert.mjs";
import { bible_verses_hyphen_words_measured } from "./bible_verses_hyphen_words_measured.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
export function bible_verses_hyphen_pieces_unwritten(verses) {
  "The words a search laid out letter by letter will say this translation contains, that this translation never writes, each one named beside the hyphened words it was cut out of.";
  "A search lays a translation out as its words with a space around each, and lays the run being looked for out the same way, so that a run can only be found where a word starts and stops. Both halves being laid out alike is what makes looking a word up work at all - a word with a hyphen in it is cut the same way on both sides, so asking for it finds it. What that sameness cannot save is asking for something smaller. The layout of panan-aw holds the run panan, so a search for panan is answered yes by a translation that never once writes it.";
  "★ THE FAULT ONLY EVER RUNS ONE WAY, WHICH IS WHY NOTHING HAS EVER LOOKED WRONG. Nothing goes missing and no search comes back empty that should not; what happens is that a question gets a yes it did not earn. So a no from such a search is worth exactly what it always was, and it is a yes that has to be brought here first.";
  "Only the pieces written nowhere else on their own are named. A piece that is also a word in its own right is left out, because a yes about it is not wrong - the translation does write it - even though the number of times it does is a separate question this does not answer.";
  "$plain verses";
  "each verse of the translation, as its publisher wrote it.";
  arguments_assert(arguments, 1);
  let measured = bible_verses_hyphen_words_measured(verses);
  let rows = property_get(measured, "rows");
  let cut_from = {};
  function row_read(row) {
    let word = property_get(row, "word");
    let parts = property_get(row, "parts");
    function part_read(part) {
      let alone = property_get(part, "alone");
      let written = greater_than(alone, 0);
      if (written) {
        return;
      }
      let piece = property_get(part, "piece");
      let held = property_initialize_list(cut_from, piece);
      list_add_if_not_includes(held, word);
    }
    each(parts, part_read);
  }
  each(rows, row_read);
  let words = object_property_names(cut_from);
  let r = {
    count: list_size(words),
    words,
    cut_from,
  };
  return r;
}
