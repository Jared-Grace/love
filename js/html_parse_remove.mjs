import { arguments_assert } from "./arguments_assert.mjs";
export function html_parse_remove(node) {
  arguments_assert(arguments, 1);
  ("Take one piece of a parsed page out of the page it belongs to.");
  ("Named apart from the reading that finds a piece because taking a piece out and choosing which pieces to take out are two different decisions, and only the second one is ever worth arguing about.");
  node.remove();
}
