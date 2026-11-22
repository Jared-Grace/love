import { arguments_assert } from "./arguments_assert.mjs";
export function list_or_text_at(held, index) {
  arguments_assert(arguments, 2);
  ('what JavaScript\'s .at gives, on either kind of thing that has it: the item at that index, a negative index counting back from the end - ["love", "joy", "peace"].at(-1) gives "peace", and "joy".at(0) gives "j"');
  let item = held.at(index);
  return item;
}
