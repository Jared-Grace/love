import { arguments_assert } from "./arguments_assert.mjs";
import { json_format_to_spaces_replaced } from "./json_format_to_spaces_replaced.mjs";
export function json_format_to_replaced(object, replacer) {
  arguments_assert(arguments, 2);
  ("json text for an object at the usual width, with every value offered to the given stand-in first");
  ("the usual width is spelled here and nowhere else. The plain reading is this one with nobody standing in, so neither can drift from the other in how wide it writes.");
  let json = json_format_to_spaces_replaced(object, 1, replacer);
  return json;
}
