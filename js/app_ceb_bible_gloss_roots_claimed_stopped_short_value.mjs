import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_roots_claimed_rows_generic } from "./gloss_chapters_roots_claimed_rows_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_roots_claimed_stopped_short_value(
  root_read,
  listed,
  claimed_books,
  unvouched_roots,
  unvouched_books,
) {
  arguments_assert(arguments, 5);
  let gathered = await gloss_chapters_roots_claimed_rows_generic(
    app_ceb_bible_gloss_generate,
    root_read,
  );
  list_sort_number_mapper_reverse(listed, gloss_row_sightings);
  let answer = {};
  let value2 = property_get(gathered, "chapters");
  property_set(answer, "chapters", value2);
  let distinct = property_get(gathered, "roots_distinct");
  property_set(answer, "roots_distinct", distinct);
  property_set(answer, "claimed_books", claimed_books);
  property_set(answer, "unvouched_roots", unvouched_roots);
  property_set(answer, "unvouched_books", unvouched_books);
  let value = list_size(listed);
  let r = {
    answer,
    value,
  };
  return r;
}
