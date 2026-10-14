import { arguments_assert } from "./arguments_assert.mjs";
import { bible_strong_chapter_tallies_cache } from "./bible_strong_chapter_tallies_cache.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_proper_name_numbers_cache } from "./bible_glyph_proper_name_numbers_cache.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_drawn_lookup } from "./bible_glyph_roots_drawn_lookup.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { add } from "./add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { bible_strong_glosses } from "./bible_strong_glosses.mjs";
import { list_take } from "./list_take.mjs";
export async function bible_glyph_book_unseated(book_code) {
  arguments_assert(arguments, 1);
  ("Every Strong's number one book uses that no glyph seats yet, commonest in that book first, each carrying the wordings the interlinear gives it most often.");
  ("$plain book_code");
  ("the code is a book's name, like MRK or RUT, chosen from the Bible's own book numbering. It names a stretch of text to read and nothing that runs.");
  ("A BOOK IS THE UNIT THAT CAN BE FINISHED. Working the whole testament down by frequency leaves every book almost done and none done, and an almost done book cannot be handed to a reader. Asking one book at a time turns the same seating work into a book a person can read with a picture on every word.");
  ("A PROPER NAME IS COUNTED APART AND NOT LISTED, for the same reason the testament-wide list does it: a name is already finished on the page by its badge and its letters.");
  let tallies = await bible_strong_chapter_tallies_cache();
  let testament_name = null;
  let totals = {};
  let total = 0;
  let occurrences = 0;
  let name_occurrences = 0;
  let is_name = null;
  let drawn = null;
  for (let chapter_code of object_property_names(tallies)) {
    let book = ebible_chapter_code_to_book(chapter_code);
    let mine = equal(book, book_code);
    if (not(mine)) {
      continue;
    }
    let first = null_is(testament_name);
    if (first) {
      testament_name = bible_chapter_testament_name(chapter_code);
      let told = await bible_glyph_proper_name_numbers_cache(testament_name);
      is_name = {};
      for (let strong of told.numbers) {
        property_set(is_name, strong, true);
      }
      let roots = bible_glyph_roots_testament_table(testament_name);
      drawn = bible_glyph_roots_drawn_lookup(roots);
    }
    let tally = property_get(tallies, chapter_code);
    for (let strong of object_property_names(tally)) {
      let seen = property_get(tally, strong);
      let named_word = property_exists(is_name, strong);
      if (named_word) {
        name_occurrences = add(name_occurrences, seen);
        continue;
      }
      total = add(total, seen);
      let seated = property_exists(drawn, strong);
      if (seated) {
        continue;
      }
      occurrences = add(occurrences, seen);
      let before = property_get_or_null(totals, strong);
      let unmet = null_is(before);
      if (unmet) {
        before = 0;
      }
      let value = add(before, seen);
      property_set(totals, strong, value);
    }
  }
  let ranked = [];
  for (let strong of object_property_names(totals)) {
    list_add(ranked, {
      strong,
      count: property_get(totals, strong),
    });
  }
  function lambda(row) {
    let r2 = row.count;
    return r2;
  }
  list_sort_number_mapper_reverse(ranked, lambda);
  let glosses = await bible_strong_glosses(testament_name);
  for (let row of ranked) {
    let wordings = property_get_or_null(glosses, row.strong);
    let silent = null_is(wordings);
    if (silent) {
      wordings = [];
    }
    let value2 = list_take(wordings, 3);
    property_set(row, "wordings", value2);
  }
  let r = {
    book_code,
    testament_name,
    numbers: ranked.length,
    occurrences,
    total,
    name_occurrences,
    shown: ranked,
  };
  return r;
}
