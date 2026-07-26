import { each } from "./each.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { property_get } from "./property_get.mjs";
export function shadowing_entries_print(entries, label) {
  "one line per rule broken per function, each starting with label so a reader can tell a new offense from a listing of what was already known";
  function print(entry) {
    let name = property_get(entry, "name");
    let shadows_outer = property_get(entry, "shadows_outer");
    let shadows_function = property_get(entry, "shadows_function");
    let any_outer = greater_than(shadows_outer.length, 0);
    if (any_outer) {
      console.log(
        label +
          "HIDES OUTER  " +
          name +
          "  -> " +
          list_join_comma(shadows_outer),
      );
    }
    let any_function = greater_than(shadows_function.length, 0);
    if (any_function) {
      console.log(
        label +
          "HIDES FN     " +
          name +
          "  -> " +
          list_join_comma(shadows_function),
      );
    }
  }
  each(entries, print);
}
