import { list_map_property_multiple } from "./list_map_property_multiple.mjs";
import { list_squash } from "./list_squash.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_replace_rules_symbols_properties(rules, properties) {
  "Every symbol the given sides of these rules are spelled with, each said once.";
  "A rule keeps its two sides apart because replacing needs to know which is which. Asking what symbols a player can see does not, so the sides asked for are given as names and flattened together.";
  let mapped = list_map_property_multiple(rules, properties);
  let squashed = list_squash(mapped);
  let unique = list_unique(squashed);
  return unique;
}
