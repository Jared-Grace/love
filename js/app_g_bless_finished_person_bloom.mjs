import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_white } from "./app_shared_color_white.mjs";
import { app_shared_color_blue_pale } from "./app_shared_color_blue_pale.mjs";
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
  ("White at the heart and pale blue around it, which is deliberately NOT the gold pair");
  ("this game leaves on a face afterwards. It was gold, to make the loud version and the");
  ("quiet version the same colour so the quiet one could be read off the loud one. That");
  ("only works when the player meets them apart; here the quiet gold is already sitting on");
  ("the face before this opens out of it, so the two were being asked to be told apart");
  ("while overlapping - and a player looking at it could not. Blue is unused anywhere else");
  ("on this street, so it cannot be mistaken for anything, and it says the true thing:");
  ("arriving, rather than remaining.");
  ("It grows by being scaled rather than by being made bigger, because a browser scales on");
  ("the graphics card without laying the page out again. This page is a street of people");
  ("all walking at once; laid out again every frame, the crowd stutters.");
  ("Smaller and quicker than the one a finished house opens. A prayer over a person happens");
  ("every few seconds and a finished house is the rare thing, so the person may not borrow");
  ("the size that is the only way the house has of saying it is rarer.");
  ("Quicker than the house, and still slower than it used to be. Half a second is about the");
  ("shortest a light can open in and still be watched opening; under that the player sees");
  ("the after and never the during, and a mark that was simply there is the one thing this");
  ("is trying not to look like.");
  ("Made see-through and then shown, with the page measured in between. Made and shown in");
  ("one breath the browser measures once, sees a light that was always fully there, and");
  ("gives it no arrival at all.");
  let white = app_shared_color_white();
  let blue = app_shared_color_blue_pale();
  let background = text_combine_multiple([
    "radial-gradient(circle, ",
    white,
    " 0%, ",
    blue,
    " 36%, rgba(255, 255, 255, 0) 68%)",
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
    transition: "transform 0.52s ease-out 0.14s, opacity 0.52s ease-out 0.14s",
    transform: "scale(5.5)",
    opacity: "0.95",
  });
  return bloom;
}
