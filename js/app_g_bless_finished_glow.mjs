import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_white } from "./app_shared_color_white.mjs";
import { app_shared_color_gold_glow } from "./app_shared_color_gold_glow.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div } from "./html_div.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { multiply } from "./multiply.mjs";
export function app_g_bless_finished_glow(div_map, middle, span) {
  arguments_assert(arguments, 3);
  ("A round light that opens over a patch of ground that has just been prayed for, from");
  ("almost nothing to a little wider than the patch itself.");
  ("Gold with a white heart, which is the same light this game already puts around the");
  ("face of somebody who has been prayed for. That is deliberate and it is the whole");
  ("message: the player has been watching that light appear on people one at a time, and");
  ("here it appears over a HOUSE. Nobody has to be told that a house full of people has");
  ("just been covered; they are being shown the mark they already know, at the size of a");
  ("building.");
  ("It grows rather than simply appearing, because a light that arrives at full size reads");
  ("as a panel opening and a light that opens outwards reads as something happening. The");
  ("player is being told that a prayer reached further than the person they said it over,");
  ("and reaching outward is the shape of that sentence.");
  ("Sized from the patch instead of from a fixed number of squares, so one household and a");
  ("whole finished block are each covered by their own light rather than one of them being");
  ("lost inside a light built for the other.");
  ("Drawn as one square scaled up rather than as a square the right size to begin with. A");
  ("browser grows a scaled thing on the graphics card without laying the page out again,");
  ("and the page here holds a whole street of moving people - laid out again on every");
  ("frame of the growth, the crowd stutters while the light opens.");
  ("It is laid on the ground layer, so people standing in the middle of it are lit from");
  ("behind and never painted over. A light that erased the people would be saying the");
  ("opposite of what this game is about.");
  let white = app_shared_color_white();
  let gold = app_shared_color_gold_glow();
  let background = text_combine_multiple([
    "radial-gradient(circle, ",
    white,
    " 0%, ",
    gold,
    " 34%, rgba(255, 255, 255, 0) 68%)",
  ]);
  let glow = html_div(div_map);
  g_img_square_style_position(glow, middle, "ground_tint");
  html_style_assign(glow, {
    background: background,
    "border-radius": "50%",
    "pointer-events": "none",
    opacity: "0",
    transform: "scale(0.35)",
    transition: "none",
  });
  html_reflow_force(glow);
  let reach = multiply(span, 1.15);
  let scale = text_combine_multiple(["scale(", reach, ")"]);
  html_style_assign(glow, {
    transition: "transform 0.34s ease-out, opacity 0.34s ease-out",
    transform: scale,
    opacity: "0.95",
  });
  return glow;
}
