import { list_map_property_unique } from "./list_map_property_unique.mjs";
export function ebible_index_flat_chapter_codes(list) {
  "Every chapter a flat index names, in the order the index names them.";
  "The order is kept rather than sorted, because it is the bible's own and nothing else here holds it. Chapter codes carry their book at the front, so sorting them would put Amos before Genesis and a reader going on to the next chapter would be sent somewhere else in the bible.";
  let chapter_codes = list_map_property_unique(list, "chapter_code");
  return chapter_codes;
}
