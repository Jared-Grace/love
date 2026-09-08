import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
export function g_img_square_div(parent, tile, z) {
  arguments_assert(arguments, 3);
  ("An empty BOX laid over one square of the ground, on the layer named, handed back for");
  ("whoever asked to decorate.");
  ("Nearly everything drawn onto the world that is not a picture is one of these: a wash of");
  ("colour over a tile, a ring round somebody, a pointer above them, a light on a house.");
  ("Each of those wants the same two things first - a box, and that box put where the square");
  ("is - and then wants something different, which is the part worth writing out.");
  ("A DIV rather than a picture, which is the whole of what separates it from its sibling");
  ("that makes an img. A box has no content of its own, so what it looks like is entirely");
  ("what is styled onto it afterwards, and that is what a decoration is: colour, a border, a");
  ("shadow, a letter drawn in it.");
  ("It does not make it untouchable, though nearly every caller goes on to. A decoration");
  ("that swallowed taps would be a bug in most of them and is the point in a few, and a box");
  ("that refused clicks before its maker had said so would have to be argued back out of it.");
  let square = html_div(parent);
  g_img_square_style_position(square, tile, z);
  return square;
}
