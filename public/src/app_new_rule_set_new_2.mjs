import { text_alphabet } from "../../../love/public/src/text_alphabet.mjs";
export function app_new_rule_set_new_2() {
  let combined = text_alphabet();
  let r = {
    name: "Identifiers simple",
    rules: [
      "id > idf",
      "id > idf idg",
      "idg > idp idg",
      "idf > A",
      "idf > B",
      "idf > l",
      "idf > t",
      "idf > u",
      "idf > v",
      "idf > $",
      "idf > _",
      "idp > di",
      "di > 1",
    ],
    goals: [
      {
        start: "id",
        end: "t3",
      },
      {
        start: "id",
        end: "t3",
      },
      {
        start: "id",
        end: "luv",
      },
      {
        start: "id",
        end: "ABBA",
      },
    ],
  };
  return r;
}
