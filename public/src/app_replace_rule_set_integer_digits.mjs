import { digits } from "../../../love/public/src/digits.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { list_map_combine_left } from "../../../love/public/src/list_map_combine_left.mjs";
export function app_replace_rule_set_integer_digits() {
  let d = digits();
  const rules = ["a > b a", "a > b"];
  let combineds = list_map_combine_left(d, "b > ");
  list_add_multiple(rules, combineds);
  let r = {
    name: "Integer digits",
    rules,
    goals: [
      {
        start: "a",
        end: "0",
      },
      {
        start: "a",
        end: "2",
      },
      {
        start: "a",
        end: "03",
      },
      {
        start: "a",
        end: "54",
      },
      {
        start: "a",
        end: "89",
      },
      {
        start: "a",
        end: "777",
      },
      {
        start: "a",
        end: "01234",
      },
    ],
  };
  return r;
}
