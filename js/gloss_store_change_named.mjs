import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
export function gloss_store_change_named(change, name) {
  "What changed for each gloss store, with the name of the number it changed on written into every row.";
  "$plain name";
  "the name is the word a measurement is filed under, like across_share. It names a part of a record and nothing that runs.";
  "A ratchet kept on two numbers at once hands back two sets of rows, and once they are joined nothing in a row says which question it answers - so a store reads as having gone backwards without saying at what, which is the one thing whoever has to mend it needs first.";
  function row_named(row) {
    let store = property_get(row, "store");
    let counted = property_get(row, "counted");
    let recorded = property_get(row, "recorded");
    let r = {
      store,
      name,
      counted,
      recorded,
    };
    return r;
  }
  let added_rows = property_get(change, "added");
  let stale_rows = property_get(change, "stale");
  let r2 = {
    added: list_map(added_rows, row_named),
    stale: list_map(stale_rows, row_named),
  };
  return r2;
}
