import { text_pad_nested_space_quote_double } from "../../../love/public/src/text_pad_nested_space_quote_double.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_strings_simple_rules_base } from "../../../love/public/src/app_replace_rule_set_strings_simple_rules_base.mjs";
export function app_replace_rule_set_strings_simple() {
  const extra = app_replace_rule_set_strings_simple_rules_base();
  const root = "st";
  let character = "ida";
  const item = "stg";
  let quoted = text_pad_nested_space_quote_double(item);
  const rules = [
    root + " > " + quoted,
    "stg > " + character,
    "stg > " + character + " stg",
  ];
  list_add_multiple(rules, extra);
  let r = {
    name: "Strings simple",
    rules,
    goals: [
      {
        start: "st",
        end: '" ida "',
      },
      {
        start: "st",
        end: '" ida ida "',
      },
      {
        start: "st",
        end: '" ida ida ida "',
      },
      {
        start: "st",
        end: '" ida ida ida ida "',
      },
      {
        start: '" ida "',
        end: '" _ "',
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
        start: '" ida ida ida "',
        end: '" l u v "',
      },
      {
        start: '" ida ida ida ida "',
        end: '" A B B A "',
      },
      {
        start: '" ida ida ida ida "',
        end: '" J 0 $ h "',
      },
    ],
  };
  return r;
}
