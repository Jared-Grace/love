import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_white } from "./app_shared_color_white.mjs";
import { app_shared_color_blue_pale } from "./app_shared_color_blue_pale.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_g_bless_finished_person_beam_ms } from "./app_g_bless_finished_person_beam_ms.mjs";
import { divide } from "./divide.mjs";
import { app_shared_game_npc_glow_get } from "./app_shared_game_npc_glow_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
export function app_g_bless_finished_person_beam(person) {
  arguments_assert(arguments, 1);
  ("A shaft of light that comes down out of the sky onto one person the moment they are");
  ("prayed for, and lands exactly where the burst then opens.");
  ("Everything else in this celebration goes OUTWARD from the person, and that is why the");
  ("celebration needed this. Lights that only spread say a light happened; nothing says");
  ("where it came from, so the answer looks like it grew out of the person who was prayed");
  ("for. Something arriving from off the top of the screen is the one movement on this");
  ("street that comes from outside it, and the prayer was addressed outside it.");
  ("It is also the wind-up the burst never had. A light that simply begins has no before,");
  ("so there is nothing for it to be the answer to; a light that is watched falling gives");
  ("the player a third of a second of knowing something is about to land. That is the");
  ("whole difference between an effect and an event.");
  ("It falls FASTER as it goes rather than at an even speed, because a light travelling at");
  ("one speed reads as a bar being slid down a track. Gathering pace is what makes the");
  ("touchdown a touchdown.");
  ("White at the bottom fading to nothing at the top, so it is a head of light with a tail");
  ("behind it rather than a pole. The tail is what makes the direction readable at all: a");
  ("shape lit evenly end to end is falling and rising at the same time.");
  ("The glow around it is the same pale blue the burst is made of, so the thing that lands");
  ("and the thing that opens are visibly one light and not two events on the same face.");
  ("It hangs inside the light the person already carries, like everything else here, so it");
  ("is over the right person however far they have walked. Its box is one square, and this");
  ("stands several squares tall above it - nothing clips it, because that box has no edge");
  ("of its own, only a place.");
  ("It is made see-through and still, the page is measured, and only then is it set going.");
  ("Made and moved in one breath, the browser measures once and sees a light that was");
  ("always at the bottom, so there is no fall at all.");
  let white = app_shared_color_white();
  let blue = app_shared_color_blue_pale();
  let size = g_img_square_size_css();
  let background = text_combine_multiple([
    "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.16) 62%, rgba(255, 255, 255, 0.7) 90%, ",
    white,
    " 100%)",
  ]);
  let spill = text_combine_multiple([
    "drop-shadow(0 0 calc((",
    size,
    ") * 0.32) ",
    blue,
    ")",
  ]);
  let ms = app_g_bless_finished_person_beam_ms();
  let seconds = divide(ms, 1000);
  let travel = text_combine_multiple([
    "transform ",
    seconds,
    "s ease-in, opacity 0.14s ease-out",
  ]);
  let halo = app_shared_game_npc_glow_get(person);
  let beam = html_div(halo);
  html_style_assign(beam, {
    position: "absolute",
    left: "40%",
    bottom: "50%",
    width: "40%",
    height: "620%",
    background: background,
    filter: spill,
    "border-radius": "50%",
    "pointer-events": "none",
    opacity: "0",
    transform: "translateY(-150%)",
    transition: "none",
  });
  html_reflow_force(beam);
  ("The distance is written as a share of the shaft's own height rather than in squares, so");
  ("it is the same five squares of sky at every size the street is drawn at. A distance in");
  ("pixels would be half a screen on a phone and a hand's width on a desk.");
  html_style_assign(beam, {
    transition: travel,
    opacity: "1",
    transform: "translateY(0)",
  });
  return beam;
}
