import { text_alphabet } from "../../../love/public/src/text_alphabet.mjs";
export function app_new_rule_set_new_2() {
  let combined = text_alphabet();
  let r = {
    name: "Identifier",
    rules: ["id > a"],
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
