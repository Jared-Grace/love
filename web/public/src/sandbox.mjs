import { string_symbols_unique } from "../../../love/public/src/string_symbols_unique.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
export async function sandbox() {
  let list = await ebible_verses("engbsb", "GEN01");
  let mapped = list_map_property(list, "text");
  let joined2 = string_symbols_unique(mapped);
  return joined2;
}
