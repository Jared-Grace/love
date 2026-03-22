import { app_replace_rule_set_identifiers_simple_rules } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_rules.mjs";
export function app_replace_rule_set_identifiers_simple() {
  let r = {
    name: "Identifiers simple",
    rules: app_replace_rule_set_identifiers_simple_rules(),
    goals: [
      {
        start: "id",
        end: "$",
      },
      {
        start: "id",
        end: "idf ida",
      },
      {
        start: "idf ida",
        end: "_ 1",
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
  };
  return r;
}
