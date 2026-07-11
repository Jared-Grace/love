import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { list_between } from "../../../love/public/src/list_between.mjs";
import { text_comma_space } from "../../../love/public/src/text_comma_space.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_take_less_ } from "../../../love/public/src/list_take_less_1.mjs";
export function list_to_or_list_generic(list, word_relationship) {
  let taken = list_take_less_(list);
  let last2 = list_last(list);
  let last = [last2];
  let separator = text_comma_space();
  let betweened = list_between(taken, separator);
  let ne = list_empty_not_is(taken);
  if (ne) {
    let prefix = text_combine_multiple([" ", word_relationship, " "]);
    list_add_first(last, prefix);
  }
  let concated = list_concat(betweened, last);
  return concated;
}
