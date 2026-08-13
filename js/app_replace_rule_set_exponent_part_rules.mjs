import { list_add_multiple } from "./list_add_multiple.mjs";
export function app_replace_rule_set_exponent_part_rules(rules) {
  "The rules an exponent part is spelled with: the letter, then an optionally signed run of digits.";
  "Two exercises teach this same tail - the second only changes what may stand in front of it - so they read it from here rather than each keeping a copy that the other's correction would miss.";
  list_add_multiple(rules, [
    "se > eE ex",
    "eE > e",
    "eE > E",
    "ex > + ig",
    "ex > - ig",
    "ex > ig",
  ]);
}
