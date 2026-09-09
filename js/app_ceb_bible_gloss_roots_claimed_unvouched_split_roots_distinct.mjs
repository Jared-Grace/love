import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_claimed_unvouched_split_root_read } from "./app_ceb_bible_gloss_roots_claimed_unvouched_split_root_read.mjs";
import { gloss_chapters_roots_claimed_rows_generic } from "./gloss_chapters_roots_claimed_rows_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
import { property_set } from "./property_set.mjs";
export async function app_ceb_bible_gloss_roots_claimed_unvouched_split_roots_distinct(
  piles,
  vouched,
  known,
  vocabulary,
) {
  arguments_assert(arguments, 4);
  let counts = {};
  let root_read = app_ceb_bible_gloss_roots_claimed_unvouched_split_root_read(
    piles,
    counts,
    vouched,
    known,
    vocabulary,
  );
  let gathered = await gloss_chapters_roots_claimed_rows_generic(
    app_ceb_bible_gloss_generate,
    root_read,
  );
  let pile_names = object_property_names(piles);
  function pile_sort(name) {
    let held = property_get(piles, name);
    list_sort_number_mapper_reverse(held, gloss_row_sightings);
  }
  each(pile_names, pile_sort);
  let sizes = {};
  function size_note(name) {
    let held = property_get(piles, name);
    let value = list_size(held);
    property_set(sizes, name, value);
  }
  each(pile_names, size_note);
  let answer = {};
  let roots_distinct = property_get(gathered, "roots_distinct");
  return {
    counts,
    sizes,
    answer,
    roots_distinct,
  };
}
