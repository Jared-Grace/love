import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { each } from "./each.mjs";
export function return_key_shapes_entries_print(entries, label) {
  arguments_assert(arguments, 2);
  ("$plain entries");
  ("$plain label");
  ("One line per function whose ways out disagree, each starting with the label so a reader can tell a new offense from a listing of what was already known.");
  ("Each set of keys is put inside brackets and the sets stand side by side, because the thing a reader has to do here is hold two sets of words together and see which word is in one and not the other. The keys inside a set are already separated by commas, so without the brackets the two sets would run into one list and the comparison would be the reader's to reconstruct.");
  ("A count is not printed. A number would say that something disagrees and leave undone the only work that matters, which is seeing which word went missing.");
  function shape_bracketed(shape) {
    let said = "[" + shape + "]";
    return said;
  }
  function print(entry) {
    let name = property_get(entry, "name");
    let shapes = property_get(entry, "shapes");
    let bracketed = shapes.map(shape_bracketed);
    let side_by_side = list_join_space(bracketed);
    console.log(label + "RETURNS DIFFER  " + name + "  -> " + side_by_side);
  }
  each(entries, print);
}
