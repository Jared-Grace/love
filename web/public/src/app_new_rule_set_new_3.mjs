import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_new_rule_set_new_3() {
  const rules = [];
  list_add_multiple(rules, [
    "fs > for ( ex ; ex ; ex ) sm",
    "ex > let i = 0",
    "ex > i < 12",
    "ex > i = i + 1",
  ]);
  let abbreviations = {};
  let r = {
    name: "Statements for",
    rules,
    abbreviations,
    goals: [
      {
        start: "fs",
        end: "for ( let i = 0 ; i < 12 ; i = i + 1 ) l o g ( a p o s t l e [ i ] ) ;",
      },
    ],
  };
  return r;
}
