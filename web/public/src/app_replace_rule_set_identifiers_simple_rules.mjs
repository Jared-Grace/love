export function app_replace_rule_set_identifiers_simple_rules() {
  let r2 = [
    "id > idf",
    "id > idf idg",
    "idg > ida",
    "idg > ida idg",
    "ida > idf",
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
    "ida > di",
    "di > 0",
    "di > 1",
    "di > 3",
  ];
  return r2;
}
