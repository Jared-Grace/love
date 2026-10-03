import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_color_rule_faint() {
  "A faint line's colour, for the hairline that separates one card from the next down a long page.";
  "It is a mid gray carrying about half its weight, which is why it works on a page that starts white and on one that starts black without being chosen twice. A solid gray would have to be picked for one of those and would then be either invisible or loud on the other.";
  "Faint on purpose. The line is there to say where one card ends, and a reader who notices the line rather than the ending has been shown the furniture instead of the room.";
  arguments_assert(arguments, 0);
  let color = "#8888";
  return color;
}
