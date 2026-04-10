import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
export function list_to_dictionary_value_curried_right(lambda$item2v) {
  let r = function list_to_dictionary_value_curried_right_result(list) {
    let dictionary = list_to_dictionary_value(list, lambda$item2v);
    return dictionary;
  };
  return r;
}
