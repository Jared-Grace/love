import { arguments_assert } from "./arguments_assert.mjs";
import { html_box_shadow_inset_value } from "./html_box_shadow_inset_value.mjs";
import { html_box_shadow_set } from "./html_box_shadow_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_edge_color_set(component, color, width) {
  arguments_assert(arguments, 3);
  ("colour the edge drawn round a thing, whichever of the two ways that edge was drawn");
  ("There are two ways because there are two kinds of thing wearing one. A button carries a real border. A chip set into a line of writing cannot: a border is drawn outside the box and so grows it, and the grown box stands proud of the line above and below, so its edge is drawn as a shadow just inside itself instead.");
  ("Both are coloured rather than asking which one this thing has. Colouring a border on something that has none says nothing, and neither does drawing an edge the same colour as the fill it sits inside, so the one that is not there costs nothing and the caller is spared knowing which it was.");
  html_style_set(component, "border-color", color);
  let edge = html_box_shadow_inset_value(color, width);
  html_box_shadow_set(component, edge);
}
