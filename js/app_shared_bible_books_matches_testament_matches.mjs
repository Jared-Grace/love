import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_shared_bible_books_matches_has_any } from "./app_shared_bible_books_matches_has_any.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_shared_bible_books_matches_testament_matches(
  testament,
  division_matches,
) {
  arguments_assert(arguments, 2);
  let name = property_get(testament, "name");
  let divisions = property_get(testament, "divisions");
  let divisions_mapped = list_map(divisions, division_matches);
  function section_has_books(section) {
    let any = app_shared_bible_books_matches_has_any(section, "books");
    return any;
  }
  let sections = list_filter(divisions_mapped, section_has_books);
  let filled = {
    name,
    divisions: sections,
  };
  return filled;
}
