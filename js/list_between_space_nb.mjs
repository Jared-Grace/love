import { list_between } from "./list_between.mjs";
import { text_space_nb } from "./text_space_nb.mjs";
export function list_between_space_nb(list) {
  let nb = text_space_nb();
  let parts = list_between(list, nb);
  return parts;
}
