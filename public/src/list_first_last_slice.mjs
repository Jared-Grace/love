import { list_slice_from } from "../../../love/public/src/list_slice_from.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_first_last } from "../../../love/public/src/list_first_last.mjs";
export function list_first_last_slice(verse_numbers_chosen, verse_numbers) {
  let v = list_first_last(verse_numbers_chosen);
  let first = list_first(v);
  let last = list_last(v);
  let sliced = list_slice_from(verse_numbers, first, last);
  let v2 = {
    sliced,
    first,
    last,
  };
  return v2;
}
