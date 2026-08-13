import { app_replace_rules_symbols_properties } from "./app_replace_rules_symbols_properties.mjs";
export function app_replace_rules_symbols(rules) {
  "Every symbol these rules are spelled with, on either side, each said once.";
  "This is what a player has in front of them, so it is also what an explanation of a symbol has to be measured against.";
  let properties = ["left", "right"];
  let symbols = app_replace_rules_symbols_properties(rules, properties);
  return symbols;
}
