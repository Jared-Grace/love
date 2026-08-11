import { app_shared_bible_books_matches_has_any } from "./app_shared_bible_books_matches_has_any.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { ebible_book_division_uncategorized } from "./ebible_book_division_uncategorized.mjs";
import { ebible_book_divisions } from "./ebible_book_divisions.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { ebible_book_testaments } from "./ebible_book_testaments.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_includes } from "./text_includes.mjs";
export function app_shared_bible_books_matches(query, books) {
  "filter the whole Old-and-New-Testament to section to books tree down to what matches the search text, dropping any section or testament left with nothing, so the renderer just draws what comes back";
  let q = text_lower_to(query);
  function match_book(book) {
    let text = property_get(book, "text");
    let lower = text_lower_to(text);
    let m = text_includes(lower, q);
    return m;
  }
  function division_matches(division) {
    let name = property_get(division, "name");
    let codes = property_get(division, "book_codes");
    function to_book(code) {
      let book = list_find_property_or_null(books, "book_code", code);
      return book;
    }
    let present = list_map_filter_null_not_is(codes, to_book);
    let matching = list_filter(present, match_book);
    let section = {
      name,
      books: matching,
    };
    return section;
  }
  function testament_matches(testament) {
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
  let testaments = ebible_book_testaments();
  let mapped = list_map(testaments, testament_matches);
  function testament_has_sections(testament) {
    let any = app_shared_bible_books_matches_has_any(testament, "divisions");
    return any;
  }
  let result = list_filter(mapped, testament_has_sections);
  ("catch any book the source returns that no genre section claims (a different canon, e.g. deuterocanon) and show it under an Other card, so the picker can never silently hide a book whatever the version");
  let divisions_all = ebible_book_divisions();
  let per_division = list_map_property(divisions_all, "book_codes");
  let known_codes = list_concat_multiple(per_division);
  let matching_books = list_filter(books, match_book);
  function is_uncategorized(book) {
    let code = property_get(book, "book_code");
    let unknown = list_includes_not(known_codes, code);
    return unknown;
  }
  let leftovers = list_filter(matching_books, is_uncategorized);
  let has_leftovers = list_empty_not_is(leftovers);
  if (has_leftovers) {
    let uncategorized = ebible_book_division_uncategorized();
    let section_name = property_get(uncategorized, "name");
    let testament_name = property_get(uncategorized, "testament");
    let section = {
      name: section_name,
      books: leftovers,
    };
    let other = {
      name: testament_name,
      divisions: [section],
    };
    list_add(result, other);
  }
  return result;
}
