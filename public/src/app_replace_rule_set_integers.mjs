import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { list_map_combine_left } from "../../../love/public/src/list_map_combine_left.mjs";
import { range } from "../../../love/public/src/range.mjs";
export function app_replace_rule_set_integers() {
  let r2 = range(10);
  let combineds = list_map_combine_left(r2, "b > ");
  const rules = ["a > b a", "a > b"];
  list_add_multiple(rules, combineds);
  let r = {
    name: "Integer digits",
    rules,
    goals: [
      {
        start: "a",
        end: "2",
      },
      {
        start: "a",
        end: "3",
      },
      {
        start: "a",
        end: "54",
      },
      {
        start: "a",
        end: "76",
      },
      {
        start: "a",
        end: "890",
      },
      {
        start: "a",
        end: "1234",
      },
    ],
  };
  return r;
}
