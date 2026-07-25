import { ebible_book_divisions } from "./ebible_book_divisions.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_map } from "./list_map.mjs";
export function ebible_book_testaments() {
  ("the two testaments, each holding its genre sections in canonical order, so the book picker can nest section cards under an Old or New Testament card");
  let divisions = ebible_book_divisions();
  function by_name(name) {
    let division = list_find_property(divisions, "name", name);
    return division;
  }
  let old_names = ["Law", "History", "Poetry", "Prophets"];
  let new_names = ["Gospels and Acts", "Letters", "Revelation"];
  let testaments = [
    {
      name: "Old Testament",
      divisions: list_map(old_names, by_name),
    },
    {
      name: "New Testament",
      divisions: list_map(new_names, by_name),
    },
  ];
  return testaments;
}
