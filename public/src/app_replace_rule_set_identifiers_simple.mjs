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
      "ida > di",
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
        end: "idf ida",
      },
      {
        start: "idf ida",
        end: "_ 1",
      },
      {
        start: "id",
        end: "t 3",
      },
      {
        start: "id",
        end: "idf ida ida",
      },
      {
        start: "idf ida ida",
        end: "l u v",
      },
      {
        start: "id",
        end: "l u v",
      },
      {
        start: "id",
        end: "idf ida ida ida",
      },
      {
        start: "idf ida ida ida",
        end: "idf idf idf idf",
      },
      {
        start: "idf ida ida ida",
        end: "A B B A",
      },
      {
        start: "idf ida ida ida",
        end: "J 0 $ h",
      },
    ],
  };
  return r;
}
