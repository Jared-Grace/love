import { app_replace_rule_set_abbreviation_di } from "./app_replace_rule_set_abbreviation_di.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export function app_replace_rule_set_identifiers_simple_abbreviations(
  abbreviations,
) {
  let abbreviations2 = {
    idf: [
      "",
      "id",
      "entifier ",
      "f",
      "irst: symbol that can be used as the first symbol of an identifier",
    ],
    ida: [
      "",
      "id",
      "entifier ",
      "a",
      "ny: symbol that can be used as any symbol of an identifier",
    ],
  };
  object_merge_set(abbreviations, abbreviations2);
  app_replace_rule_set_abbreviation_di(abbreviations);
  ("what an identifier itself is belongs to whoever has a rule that rewrites one - the strings set borrows these pieces without ever spelling id, and would have shown an explanation for a word its exercise never reaches");
}
