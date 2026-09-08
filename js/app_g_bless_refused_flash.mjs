import { arguments_assert } from "./arguments_assert.mjs";
import { g_img_square_div } from "./g_img_square_div.mjs";
import { html_click_none } from "./html_click_none.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_animation_sleep_quick } from "./app_shared_animation_sleep_quick.mjs";
import { app_shared_animation_sleep } from "./app_shared_animation_sleep.mjs";
import { html_remove } from "./html_remove.mjs";
export async function app_g_bless_refused_flash(div_map, target) {
  arguments_assert(arguments, 2);
  ("Flashes one square RED for a moment, to say that the player may not go there.");
  ("It exists because a refusal that says nothing is indistinguishable from a broken tap. The");
  ("road is shut to walkers, so a tap on it comes back with no way at all and the player");
  ("simply stands still - and standing still is exactly what a game that has stopped");
  ("listening looks like. Tapped twice, tapped harder, and then the player decides the game");
  ("does not work rather than that the road does.");
  ("RED and only for a moment, which is the whole shape of the answer. Red is the one colour");
  ("that means no without a word in it, so it needs no reading and no language; and a mark");
  ("that goes away by itself needs no dismissing, so the player is not made to answer for");
  ("having asked. Left on the screen it would be a scolding.");
  ("It is a WASH over the square rather than a cross or a sign, because the answer is about");
  ("that square. A symbol in the middle of a tile says something is there; a whole square");
  ("turning colour says the square itself is the thing being spoken about.");
  ("Laid above the people, so it is not hidden by whoever happens to be standing on the road");
  ("- the tap that gets refused is most often the one aimed past somebody.");
  ("It may not be TOUCHED, so a second tap while it is fading reaches the ground under it");
  ("rather than the mark. A refusal that swallowed the next tap would earn the very");
  ("suspicion it was put there to prevent.");
  ("It fades rather than vanishing, and then it is TAKEN OFF the map. A mark left behind");
  ("would be one more thing for every later tap to search through, and there is no end of");
  ("taps.");
  let mark = g_img_square_div(div_map, target, "tint");
  html_click_none(mark);
  html_style_assign(mark, {
    background: "rgba(214, 64, 52, 0.42)",
    "box-shadow": "inset 0 0 0 2px rgba(214, 64, 52, 0.75)",
    transition: "opacity 260ms ease-out",
    opacity: "1",
  });
  await app_shared_animation_sleep_quick();
  html_style_assign(mark, {
    opacity: "0",
  });
  await app_shared_animation_sleep();
  html_remove(mark);
}
