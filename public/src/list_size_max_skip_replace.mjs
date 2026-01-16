import { list_replace_all } from "../../../love/public/src/list_replace_all.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_size_max_skip_copy } from "../../../love/public/src/list_size_max_skip_copy.mjs";
export function list_size_max_skip_replace(verse_numbers_chosen, max) {
  let copy = list_size_max_skip_copy(verse_numbers_chosen, max);
  log({
    copy,
  });
  list_replace_all(verse_numbers_chosen, copy);
}
