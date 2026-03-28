import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_new_rule_set_new_3() {
  const rules = [];
  list_add_multiple(rules, ["fs > for ( ex ; ex ; ex ) sm"]);
  let abbreviations = {};
  let r = {
    name: "Statements for",
    rules,
    abbreviations,
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
