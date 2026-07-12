import { text_to } from "./text_to.mjs";
import { list_sort_text_mapper } from "./list_sort_text_mapper.mjs";
export function list_sort_text_to(list) {
  list_sort_text_mapper(list, text_to);
}
