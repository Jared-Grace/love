import { app_replace_rule_set_identifiers_simple_rules } from "./app_replace_rule_set_identifiers_simple_rules.mjs";
export function app_replace_rule_set_identifiers_simple() {
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
    why: "An identifier is a name you choose for something. It may start with a letter, a $ or an _ - but never a digit - and after that first symbol digits are allowed too. That is why there are two placeholders: idf for the first symbol, ida for any later one.",
  };
  return r;
}
