import { undefined } from "../../../love/public/src/undefined.mjs";
export function list_sort_text_mapper(list, lambda$item) {
  function lambda(a, b) {
    let v = lambda$item(b);
    let r = lambda$item(a).localeCompare(v, undefined, {
      numeric: true,
      sensitivity: "base",
    });
    return r;
  }
  list.sort(lambda);
}
