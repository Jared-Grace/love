import { app_replace_rule_set_identifiers_simple_abbreviation_id } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_abbreviation_id.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
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
    di: ["", "di", "git sample: a few choices of digits"],
  };
  let to2 = object_merge(abbreviations, abbreviations2);
  app_replace_rule_set_identifiers_simple_abbreviation_id(abbreviations);
}
