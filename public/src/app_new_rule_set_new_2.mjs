import { text_alphabet } from "../../../love/public/src/text_alphabet.mjs";
export function app_new_rule_set_new_2() {
  let combined = text_alphabet();
  let r = {
    name: "Identifier",
    rules: ["id > idf", "id > idf idp", "idp > a", "idp > b", "idp > c"],
    goals: [
      {
        start: "id",
        end: "abba",
      },
    ],
  };
  return r;
}
