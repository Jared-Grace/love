import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_to } from "../../../love/public/src/list_to.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { ebible_references_parse_lines } from "../../../love/public/src/ebible_references_parse_lines.mjs";
export async function bible_verse_grace(reference) {
  let args = list_to(arguments);
  let joined = list_join_space(args);
  let v = await ebible_references_parse_lines(["cebulb", "tglulb"], [joined]);
  let mapped = list_map_property(list, property_name);
  log(v);
}
