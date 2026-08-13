import { text_pad_nested_space_quote_double } from "./text_pad_nested_space_quote_double.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_replace_rule_set_strings_simple_rules_base } from "./app_replace_rule_set_strings_simple_rules_base.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_rule_set_strings_simple() {
  let extra = app_replace_rule_set_strings_simple_rules_base();
  let character = "ida";
  let item = "stg";
  let quoted = text_pad_nested_space_quote_double(item);
  let combined = text_combine("st > ", quoted);
  let combined2 = text_combine("stg > ", character);
  let combined3 = text_combine_multiple(["stg > ", character, " stg"]);
  let rules = [combined, combined2, combined3];
  list_add_multiple(rules, extra);
  let r = {
    name: "Strings Simple",
    rules,
    goals: [
      {
        start: "st",
        end: '" ida "',
      },
      {
        start: '" ida "',
        end: '" _ "',
      },
      {
        start: "st",
        end: '" ida ida "',
      },
      {
        start: '" ida ida "',
        end: '" $ 1 "',
      },
      {
        start: '" ida ida "',
        end: '" t 3 "',
      },
      {
        start: "st",
        end: '" ida ida ida "',
      },
      {
        start: '" ida ida ida "',
        end: '" l u v "',
      },
      {
        start: "st",
        end: '" ida ida ida ida "',
      },
      {
        start: '" ida ida ida ida "',
        end: '" idf idf idf idf "',
      },
      {
        start: '" idf idf idf idf "',
        end: '" A B B A "',
      },
      {
        start: '" ida ida ida ida "',
        end: '" idf di idf idf "',
      },
      {
        start: '" idf di idf idf "',
        end: '" J 0 $ h "',
      },
    ],
    why: "The replacement rules define a grammar for simple string literals consisting of double quotes surrounding a sequence of identifier characters (letters, $, or _), possibly interleaved with a few digits (0, 1, 3), demonstrating how identifiers and digits can be combined to form the contents of quoted strings.",
  };
  return r;
}
