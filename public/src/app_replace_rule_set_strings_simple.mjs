export function app_replace_rule_set_strings_simple() {
  let r = {
    name: "Strings simple",
    rules: [
      "id > idf",
      "id > idf idg",
      "idg > ida",
      "idg > ida idg",
      "ida > idf",
      "ida > di",
      "idf > A",
      "idf > B",
      "idf > h",
      "idf > J",
      "idf > l",
      "idf > t",
      "idf > u",
      "idf > v",
      "idf > $",
      "idf > _",
      "di > 0",
      "di > 1",
      "di > 3",
    ],
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
