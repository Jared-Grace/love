import { app_replace_rules_symbols_properties } from "./app_replace_rules_symbols_properties.mjs";
export function app_replace_rules_symbols_rewritten(rules) {
  "Every symbol some rule turns into something else, each said once.";
  "A symbol that gets rewritten stands for a thing being built rather than for itself, so it is exactly the sort a reader cannot work out by looking at it. A symbol only ever arrived at is a symbol in its own right and needs no standing-for.";
  let properties = ["left"];
  let symbols = app_replace_rules_symbols_properties(rules, properties);
  return symbols;
}
