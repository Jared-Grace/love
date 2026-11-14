import { arguments_assert } from "./arguments_assert.mjs";
export function list_or_text_index_of_or_minus_one(held, part) {
  arguments_assert(arguments, 2);
  ('what JavaScript\'s .indexOf gives, on either kind of thing that has it: ["love", "joy"] and "joy" give 1, and -1 when the part is not there');
  let r = held.indexOf(part);
  return r;
}
