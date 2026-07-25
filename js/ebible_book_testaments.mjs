import { ebible_book_divisions } from "./ebible_book_divisions.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map } from "./list_map.mjs";
export function ebible_book_testaments() {
  "group the genre sections under their testament by reading each section's own testament tag, so the section names live in exactly one place (the divisions list) and a rename never has to be mirrored here";
  let divisions = ebible_book_divisions();
  let names = ["Old Testament", "New Testament"];
  function to_testament(name) {
    let members = list_filter_property(divisions, "testament", name);
    let testament = {
      name,
      divisions: members,
    };
    return testament;
  }
  let testaments = list_map(names, to_testament);
  return testaments;
}
