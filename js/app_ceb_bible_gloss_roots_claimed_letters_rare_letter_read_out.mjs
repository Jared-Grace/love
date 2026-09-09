import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { value_or_if_null } from "./value_or_if_null.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { or } from "./or.mjs";
import { each } from "./each.mjs";
import { property_set } from "./property_set.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_chapters_roots_claimed_rows_generic } from "./gloss_chapters_roots_claimed_rows_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_roots_claimed_letters_rare_letter_read_out(
  letter_words,
  by_letter,
) {
  arguments_assert(arguments, 2);
  function root_file(row) {
    let name = property_get(row, "stated_root");
    let characters = text_split(name, "");
    let rarest = "";
    let fewest = -1;
    function character_weigh(character) {
      let held = property_get_or_null(letter_words, character);
      let words = value_or_if_null(held, 0);
      let first = equal(fewest, -1);
      let rarer = less_than(words, fewest);
      let take = or(first, rarer);
      if (take) {
        fewest = words;
        rarest = character;
      }
    }
    each(characters, character_weigh);
    property_set(row, "rarest_letter", rarest);
    property_set(row, "letter_words", fewest);
    let listed = property_initialize_list(by_letter, rarest);
    list_add(listed, row);
  }
  let gathered = await gloss_chapters_roots_claimed_rows_generic(
    app_ceb_bible_gloss_generate,
    root_file,
  );
  let letters_used = object_property_names(by_letter);
  let letters = [];
  function letter_read_out(letter) {
    let listed = property_get(by_letter, letter);
    list_sort_number_mapper_reverse(listed, gloss_row_sightings);
    let held = property_get_or_null(letter_words, letter);
    let words = value_or_if_null(held, 0);
    let row = {
      letter,
      bible_words: words,
      roots: list_size(listed),
      listed,
    };
    list_add(letters, row);
  }
  let r = {
    gathered,
    letters_used,
    letters,
    letter_read_out,
  };
  return r;
}
