import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export function text_index_of_last(s, search) {
  assert_arguments(arguments, 2);
  let i = s.lastIndexOf(search);
  return i;
}
