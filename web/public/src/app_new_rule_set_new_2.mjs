import { text_alphabet_lower } from "../../../love/public/src/text_alphabet_lower.mjs";
export function app_new_rule_set_new_2() {
  let r2 = text_alphabet_lower();
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
