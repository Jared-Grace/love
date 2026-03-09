import { digits_positive } from "../../../love/public/src/digits_positive.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { list_map_combine_left } from "../../../love/public/src/list_map_combine_left.mjs";
export function app_replace_rule_set_integer_digits_2() {
  let r2 = digits_positive();
  let combineds = list_map_combine_left(r2, "c > ");
  const rules = ["a > c b", "a > d", "b > d b", "d > 0", "d > c", "b > d"];
  list_add_multiple(rules, combineds);
  let r = {
    name: "Integers",
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
        end: "13",
      },
      {
        start: "a",
        end: "77",
      },
      {
        start: "a",
        end: "40",
      },
      {
        start: "a",
        end: "969",
      },
      {
        start: "a",
        end: "5678",
      },
    ],
  };
  return r;
}
