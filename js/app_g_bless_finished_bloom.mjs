import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_white } from "./app_shared_color_white.mjs";
import { app_shared_color_gold_glow } from "./app_shared_color_gold_glow.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div } from "./html_div.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
export function app_g_bless_finished_bloom(div_map, middle) {
  arguments_assert(arguments, 2);
  ("The soft round light that opens out of a house that has just been prayed for, from");
  ("about the size of one square to something that reaches past the edges of the screen.");
  ("This is the part that spreads. The house itself is lit in its own shape and holds");
  ("still, and everything moving outward is carried here - because this has no edge. It is");
  ("a gradient that is already fading to nothing well before it stops, so however far it");
  ("opens there is never a line for the eye to catch, and it reads as light going out");
  ("rather than as a shape being blown up. A square doing the same journey reads as a");
  ("rectangle being inflated, which is why the two jobs are two different things.");
  ("White at the heart and gold around it, the same pair the game already uses on the face");
  ("of somebody who has been prayed for. The player is being shown a mark they know, at");
  ("the size of a street.");
  ("It grows by being scaled rather than by being made bigger. A browser scales on the");
  ("graphics card without laying the page out again, and this page holds a whole street of");
  ("moving people - laid out again on every frame of the growth, the crowd stutters.");
  ("It is laid on the ground layer, so the people standing in it are lit from behind and");
  ("never washed out. A light that erased the people would be saying the opposite of what");
  ("this game is about.");
  let white = app_shared_color_white();
  let gold = app_shared_color_gold_glow();
  let background = text_combine_multiple([
    "radial-gradient(circle, ",
    white,
    " 0%, ",
    gold,
    " 30%, rgba(255, 255, 255, 0) 70%)",
  ]);
  let bloom = html_div(div_map);
  g_img_square_style_position(bloom, middle, "ground_tint");
  html_style_assign(bloom, {
    background: background,
    "border-radius": "50%",
    "pointer-events": "none",
    opacity: "0",
    transform: "scale(0.6)",
    transition: "none",
  });
  html_reflow_force(bloom);
  html_style_assign(bloom, {
    transition: "transform 0.36s ease-out, opacity 0.36s ease-out",
    transform: "scale(9)",
    opacity: "0.9",
  });
  return bloom;
}
