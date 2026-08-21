import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { list_join } from "./list_join.mjs";
export function app_replace_rule_row(rule) {
  ("Puts one of the replacing app's saved rules into the short form it is stored in, the twin of ",
    fn_name("app_replace_rule_from_row"),
    ".");
  ("A rule record spells each of its three parts twice, once as the name of the slot and once as the thing in it, and there are fourteen hundred of them saved - so the slot names alone are a fifth of the file, and about the same share of the replacing app's bundle.");
  let left = property_get(rule, "left");
  let right = property_get(rule, "right");
  let original = property_get(rule, "original");
  let left_text = list_join(left, " ");
  let right_text = list_join(right, " ");
  let row = [left_text, right_text, original];
  return row;
}
