import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { list_map_combine_left } from "../../../love/public/src/list_map_combine_left.mjs";
export function app_replace_rule_set_add_rights(rules, symbol, rights) {
  let combineds = list_map_combine_left(rights, symbol + " > ");
  list_add_multiple(rules, combineds);
}
