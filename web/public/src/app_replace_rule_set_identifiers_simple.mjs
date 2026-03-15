export function app_replace_rule_set_identifiers_simple() {
  let r = {
    name: "Identifiers simple",
    rules: [
      "id > idf",
      "id > idf idg",
      "idg > idp",
      "idg > idp idg",
      "idf > A",
      "idf > B",
      "idf > h",
      "idf > l",
      "idf > t",
      "idf > u",
      "idf > v",
      "idf > $",
      "idf > _",
      "idp > di",
      "di > 0",
      "di > 1",
    ],
    goals: [
      {
        start: "id",
        end: "$",
      },
      {
        start: "id",
        end: "_1",
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
      {
        start: "id",
        end: "J0$h",
      },
    ],
  };
  return r;
}
