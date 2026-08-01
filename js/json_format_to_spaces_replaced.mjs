import { arguments_assert } from "./arguments_assert.mjs";
export function json_format_to_spaces_replaced(object, spaces, replacer) {
  arguments_assert(arguments, 3);
  ("json text for an object, indented by the given number of spaces, with every value offered to the given stand-in first");
  ("the plain reading is this one with nobody standing in, so the two cannot drift apart in how they indent or in what they consider worth writing down.");
  let json = JSON.stringify(object, replacer, spaces);
  return json;
}
