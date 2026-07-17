import { undefined } from "./undefined.mjs";
export function list_sort_text_mapper(list, lambda$item) {
  "numeric true gives natural ordering (item2 before item10), NOT a numeric sort; keep list_sort_number separate — string collation is wrong for negatives and decimals, and typed transpile targets sort numbers by < rather than by a string collator";
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
