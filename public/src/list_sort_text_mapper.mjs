import { undefined } from "../../../love/public/src/undefined.mjs";
export function list_sort_text_mapper(list, lambda$item) {
  function lambda(a, b) {
    let v = lambda$item(b);
    let v2 = lambda$item(a);
    let r = v2.localeCompare(v, undefined, {
      numeric: true,
      sensitivity: "base",
    });
    return r;
  }
  list.sort(lambda);
}
