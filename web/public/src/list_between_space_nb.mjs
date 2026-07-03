import { list_between } from "../../../love/public/src/list_between.mjs";
import { text_space_nb } from "../../../love/public/src/text_space_nb.mjs";
export function list_between_space_nb(list) {
  let nb1 = text_space_nb();
  let parts = list_between(list, nb1);
  return parts;
}
