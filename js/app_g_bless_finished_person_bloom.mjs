import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_white } from "./app_shared_color_white.mjs";
import { app_shared_color_gold_glow } from "./app_shared_color_gold_glow.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_game_npc_glow_get } from "./app_shared_game_npc_glow_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
export function app_g_bless_finished_person_bloom(div_map, person) {
  arguments_assert(arguments, 2);
  ("The round light that opens out of one person who has just been prayed for, from about");
  ("the size of the square they are standing on to something several squares across.");
  ("This is the part that carries past them. The light they keep is the size of a person,");
  ("and a mark that size is read as a label on a face rather than as something happening.");
  ("A light that leaves the person and travels is the difference between being told");
  ("somebody was blessed and being shown it.");
  ("It is hung inside the light they already carry, for the one reason everything else");
  ("about a person is: they walk. Ground under somebody is ground they are about to leave,");
  ("and a light left standing on it celebrates an empty patch of road while the person it");
  ("was about walks out of it. Their own light is carried by the same act that carries");
  ("their picture, so anything put inside it is carried for free and cannot fall behind.");
  ("Round, and it grows, and those two go together. A circle drawn as a gradient is already");
  ("fading to nothing before it stops, so there is no edge for the eye to catch and growing");
  ("reads as light going out. A shape with corners doing the same journey reads as a panel");
  ("being inflated, which is why the house is lit in its own shape and holds still while");
  ("everything that moves outward is round.");
  ("White at the heart and gold around it, which is the pair this game already puts on a");
  ("face that has been prayed for. Loud here, quiet afterwards, and the same colour both");
  ("times - that is how the player learns to read the quiet one.");
  ("It grows by being scaled rather than by being made bigger, because a browser scales on");
  ("the graphics card without laying the page out again. This page is a street of people");
  ("all walking at once; laid out again every frame, the crowd stutters.");
  ("Smaller and quicker than the one a finished house opens. A prayer over a person happens");
  ("every few seconds and a finished house is the rare thing, so the person may not borrow");
  ("the size that is the only way the house has of saying it is rarer.");
  ("Made see-through and then shown, with the page measured in between. Made and shown in");
  ("one breath the browser measures once, sees a light that was always fully there, and");
  ("gives it no arrival at all.");
  let white = app_shared_color_white();
  let gold = app_shared_color_gold_glow();
  let background = text_combine_multiple([
    "radial-gradient(circle, ",
    white,
    " 0%, ",
    gold,
    " 34%, rgba(255, 255, 255, 0) 68%)",
  ]);
  let halo = app_shared_game_npc_glow_get(person);
  let bloom = html_div(halo);
  html_style_assign(bloom, {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    background: background,
    "border-radius": "50%",
    "pointer-events": "none",
    opacity: "0",
    transform: "scale(0.6)",
    transition: "none",
  });
  html_reflow_force(div_map);
  html_style_assign(bloom, {
    transition: "transform 0.34s ease-out, opacity 0.34s ease-out",
    transform: "scale(3.4)",
    opacity: "0.95",
  });
  return bloom;
}
