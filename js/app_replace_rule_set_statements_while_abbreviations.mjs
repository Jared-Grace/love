import { object_merge_set } from "./object_merge_set.mjs";
import { app_replace_rule_set_statements_if_abbreviations } from "./app_replace_rule_set_statements_if_abbreviations.mjs";
export function app_replace_rule_set_statements_while_abbreviations(
  abbreviations,
) {
  "the while rules are the if rules and one more, so the explanations follow the same way - taking only the block ones left every symbol the borrowed rules spell with nothing beside it";
  app_replace_rule_set_statements_if_abbreviations(abbreviations);
  object_merge_set(abbreviations, {
    ws: ["", "w", "hile ", "s", "tatement"],
  });
}
