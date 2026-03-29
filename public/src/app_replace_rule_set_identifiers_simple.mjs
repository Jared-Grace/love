import { app_replace_rule_set_identifiers_simple_abbreviations } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_abbreviations.mjs";
import { app_replace_rule_set_identifiers_simple_goals } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_goals.mjs";
import { app_replace_rule_set_identifiers_simple_rules } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_rules.mjs";
export function app_replace_rule_set_identifiers_simple() {
  let abbreviations = {
    idg: ["", "id", "entifier ", "g", "rower"],
  };
  app_replace_rule_set_identifiers_simple_abbreviations(abbreviations);
  let r = {
    name: "Identifiers Simple",
    rules: app_replace_rule_set_identifiers_simple_rules(),
    goals: [
    {
      start: "id",
      end: "_",
    },
    {
      start: "id",
      end: "idf ida",
    },
    {
      start: "idf ida",
      end: "$ 1",
    },
    {
      start: "id",
      end: "t 3",
    },
    {
      start: "id",
      end: "idf ida ida",
    },
    {
      start: "idf ida ida",
      end: "l u v",
    },
    {
      start: "id",
      end: "idf ida ida ida",
    },
    {
      start: "idf ida ida ida",
      end: "idf idf idf idf",
    },
    {
      start: "idf idf idf idf",
      end: "A B B A",
    },
    {
      start: "idf ida ida ida",
      end: "idf di idf idf",
    },
    {
      start: "idf di idf idf",
      end: "J 0 $ h",
    },
  ],
    abbreviations,
    why: "The replacement rules define a context-free grammar for a simplified identifier system, where identifiers can start with certain letters or symbols and may include a limited set of digits and additional characters, demonstrating how identifiers are constructed from allowed starting and subsequent characters.",
  };
  return r;
}
