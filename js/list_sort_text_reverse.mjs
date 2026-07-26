import { list_reverse } from "./list_reverse.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function list_sort_text_reverse(operands) {
  "sort by text, then turn it around - descending. It called itself here rather than the plain sort, so every call ran out of stack; the only caller sits on a path nothing reaches yet, which is why nothing had failed.";
  list_sort_text(operands);
  list_reverse(operands);
}
