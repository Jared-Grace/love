import { undefined } from "./undefined.mjs";
export function list_sort_text_mapper(list, lambda$item) {
  "numeric true gives natural ordering (item2 before item10), NOT a numeric sort; the numeric sort stays a separate helper because string collation is wrong for negatives and decimals, and typed transpile targets sort numbers by comparison rather than by a string collator";
  "the thing that knows how to compare two pieces of text is made once for the whole sort rather than once for every comparison. Handing the options to localeCompare reads as one call, but each call has to build that comparer from them before it can answer, and a sort asks for a comparison tens of thousands of times - it was three quarters of the entire repo-wide permission gate, and it is paid by everything in the repo that sorts text.";
  let collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base",
  });
  function lambda(a, b) {
    let v = lambda$item(b);
    let v2 = lambda$item(a);
    let r = collator.compare(v2, v);
    return r;
  }
  list.sort(lambda);
  return list;
}
