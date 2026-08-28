import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_gold_glow } from "./app_shared_color_gold_glow.mjs";
import { app_shared_color_white } from "./app_shared_color_white.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_game_npc_glow_get } from "./app_shared_game_npc_glow_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { list_map } from "./list_map.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { each } from "./each.mjs";
export function app_g_bless_finished_people(div_map, people) {
  arguments_assert(arguments, 2);
  ("A burst of white light out of everybody who has just been prayed for, and the bursts");
  ("handed back so they can be taken away again.");
  ("It is hung on the light each person already carries rather than drawn on the ground");
  ("they are standing on, and that is the whole of this. People WALK. A square lit under");
  ("somebody is lit under where they were a moment ago, and by the time the light has");
  ("finished arriving they have left it - so the player watches a patch of empty road");
  ("celebrate while the person it was about walks away from it. Worse, a tile is written");
  ("the moment a step BEGINS, so a light placed from one lands at the far end of a step");
  ("already under way and sits there waiting for them.");
  ("Their own light has neither fault, because it is not placed at all: it is made once,");
  ("before anybody has moved, and from then on it is carried by the same act that carries");
  ("their picture. A burst put inside it inherits every one of those moves for free.");
  ("So this is also why the burst is a CHILD of that light and not a second thing tracking");
  ("it. Two things following one person are two things that can disagree, and the one way");
  ("to be sure they never do is to have only one of them moving.");
  ("White going to gold, which is the same light this game puts on a face that has been");
  ("prayed for, arriving all at once instead of breathing. The player already knows what");
  ("the quiet version means; this is that mark being handed to them.");
  ("It swells, and a round light may. The house does not swell because a shape with");
  ("corners being inflated reads as a panel rather than as light - a circle has no edge");
  ("for the eye to catch, so growing is the one thing it can honestly do.");
  ("Made see-through and then shown, with the page measured in between. Made and shown in");
  ("one breath the browser only ever measures them once, sees lights that were always");
  ("fully there, and gives them no arrival at all.");
  let gold = app_shared_color_gold_glow();
  let white = app_shared_color_white();
  let background = text_combine_multiple([
    "radial-gradient(circle, ",
    white,
    " 0%, ",
    white,
    " 28%, ",
    gold,
    " 52%, rgba(255, 255, 255, 0) 70%)",
  ]);
  function person_burst(person) {
    let halo = app_shared_game_npc_glow_get(person);
    let burst = html_div(halo);
    html_style_assign(burst, {
      position: "absolute",
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
      background: background,
      "pointer-events": "none",
      opacity: "0",
      transform: "scale(0.7)",
      transition: "none",
    });
    return burst;
  }
  let bursts = list_map(people, person_burst);
  html_reflow_force(div_map);
  function burst_show(burst) {
    html_style_assign(burst, {
      transition: "opacity 0.3s ease-out, transform 0.8s ease-out",
      opacity: "1",
      transform: "scale(3)",
    });
  }
  each(bursts, burst_show);
  return bursts;
}
