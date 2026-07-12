import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map_combine_left } from "./list_map_combine_left.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_replace_rule_set_add_rights(rules, symbol, rights) {
  let combineds = list_map_combine_left(rights, text_combine(symbol, " > "));
  list_add_multiple(rules, combineds);
}
