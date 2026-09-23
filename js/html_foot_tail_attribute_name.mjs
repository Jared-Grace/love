import { html_attribute_data_prefix } from "./html_attribute_data_prefix.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_foot_tail_attribute_name() {
  "The mark a frame writes on the place it keeps for the two ways out of an app: after the reading, and just above the foot it holds against the bottom of the screen.";
  "Written on the page rather than carried in a variable for the same reason the scrolling box is: the place is made at the start of a screen and the ways out are added at the end of one, through a hook handed the page and nothing else.";
  let prefix = html_attribute_data_prefix();
  let name = text_combine(prefix, "foot-tail");
  return name;
}
