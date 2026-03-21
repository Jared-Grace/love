export function app_replace_rule_set_identifiers_simple() {
  let r = {
    name: "Identifiers simple",
    rules: [
      "id > idf",
      "id > idf idg",
      "idg > ida",
      "idg > ida idg",
      "ida > idf",
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
      "di > 3",
    ],
    goals: [
      {
        start: "id",
        end: "$",
      },
      {
        start: "id",
        end: "_ 1",
      },
      {
        start: "id",
        end: "t 3",
      },
      {
        start: "id",
        end: "l u v",
      },
      {
        start: "id",
        end: "l u v",
      },
      {
        start: "id",
        end: "A B B A",
      },
      {
        start: "id",
        end: "J 0 $ h",
      },
    ],
  };
  return r;
}
