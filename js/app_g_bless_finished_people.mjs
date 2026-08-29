import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_blue_pale } from "./app_shared_color_blue_pale.mjs";
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
  ("White going out through pale blue, and NOT through the gold this game leaves behind on");
  ("a face that has been prayed for. It was gold, on the argument that a loud version of");
  ("the quiet mark teaches the player to read the quiet one. That argument holds for two");
  ("marks the player meets at different times, and these two are not: the gold mark lands");
  ("on the face the instant the prayer is written down, so it is ALREADY THERE, on the same");
  ("few pixels, when this arrives. Same colour on top of same colour is not a lesson, it is");
  ("a mark getting slightly brighter for a moment - which is what a player reported seeing.");
  ("Blue is chosen because nothing else on this street is blue: the ground wash is flat");
  ("white, the arrow over the next person is orange, and everything settled is gold. So");
  ("there is no second reading available. It is the right meaning as well as the free one -");
  ("gold is what remains, and this is the light arriving, which is a different thing and");
  ("now looks like one.");
  ("It swells, and a round light may. The house does not swell because a shape with");
  ("corners being inflated reads as a panel rather than as light - a circle has no edge");
  ("for the eye to catch, so growing is the one thing it can honestly do.");
  ("The outer stop is transparent WHITE rather than transparent blue, which is the same");
  ("thing every gradient on this screen fades out to. A second spelling of the blue would");
  ("be a copy of it that nothing keeps in step, and at no opacity at all there is nothing");
  ("for the copy to be worth.");
  ("Made see-through and then shown, with the page measured in between. Made and shown in");
  ("one breath the browser only ever measures them once, sees lights that were always");
  ("fully there, and gives them no arrival at all.");
  ("It hangs inside the light a person carries, alongside the gold mark rather than around");
  ("it. That light is an empty box whose whole job is to ride, so anything put in it rides;");
  ("the gold is a second thing in the same box, free to come up on its own clock underneath");
  ("this. Around it, as it once was, the gold could not be faded at all - fading a box fades");
  ("everything in it, so the blue would have had to rise out of nothing along with it.");
  let blue = app_shared_color_blue_pale();
  let white = app_shared_color_white();
  let background = text_combine_multiple([
    "radial-gradient(circle, ",
    white,
    " 0%, ",
    white,
    " 30%, ",
    blue,
    " 56%, rgba(255, 255, 255, 0) 72%)",
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
  ("The brightening is kept slow enough to be seen happening. A light that is up and gone");
  ("inside a third of a second is over before a player watching the face has finished");
  ("registering that anything started, so it reads as a flicker rather than as an event -");
  ("and a flicker over an already-gold face is exactly what could not be told apart.");
  ("The spread was once left much slower than that, and it has been brought back in to");
  ("about the length of the brightening. Opening over a second read as a light drifting");
  ("outward, and a prayer being answered is not a drift; it is something arriving. Quick");
  ("enough to be a burst, and still long enough that the eye follows the edge of it going");
  ("out - which is the whole of what a burst is. It is now about as fast as the light that");
  ("opens beneath it, so the two read as one thing opening rather than as a small fast");
  ("light inside a large slow one.");
  ("The colour is still at full strength while the shape is still travelling, because the");
  ("brightening finishes first. That order is what makes the outward travel visible at all.");
  function burst_show(burst) {
    html_style_assign(burst, {
      transition:
        "opacity 0.3s ease-out, transform 0.58s cubic-bezier(0.07, 0.85, 0.22, 1)",
      opacity: "1",
      transform: "scale(5.2)",
    });
  }
  each(bursts, burst_show);
  return bursts;
}
