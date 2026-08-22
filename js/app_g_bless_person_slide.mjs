import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_game_npc_img_get } from "./app_shared_game_npc_img_get.mjs";
import { app_shared_game_npc_cross_get } from "./app_shared_game_npc_cross_get.mjs";
import { g_img_square_style_transition_seconds } from "./g_img_square_style_transition_seconds.mjs";
import { g_img_square_style_transition_timing } from "./g_img_square_style_transition_timing.mjs";
import { bless_step_timing } from "./bless_step_timing.mjs";
export function app_g_bless_person_slide(person, seconds) {
  arguments_assert(arguments, 2);
  ("How long this person's step takes to cross the tile - said for them, and not taken");
  ("from the one length the map gives every square.");
  ("Given the whole of the wait between their steps, the picture is never at rest: it is");
  ("still arriving when the next step is asked for, so what the eye sees is somebody");
  ("walking. Given the map's own quick length instead, the picture arrives at once and");
  ("then stands there for the rest of the wait, and the same person reads as stepping,");
  ("stopping, stepping, stopping - which is the one thing a crowd on a pavement never");
  ("does.");
  ("It is also the whole of what makes a slow person LOOK slow. Everybody keeps their own");
  ("pace already, but a pace is only a length of standing still, and standing still looks");
  ("the same at every speed. The difference between somebody dawdling and somebody brisk");
  ("is the speed of their walking, and until the slide carries their pace there was");
  ("nowhere for that difference to be seen.");
  ("Their cross goes with them at the same speed when they have one, because it is its");
  ("own thing on the map rather than part of the picture - left at the shared length it");
  ("would arrive first and hang over an empty square until the person caught up.");
  ("The step is also given its SHAPE here, and not only its length. Length alone makes a");
  ("person take the right amount of time to cross a tile; it does nothing about their");
  ("crossing it at one unvarying rate, which is a piece being slid rather than somebody");
  ("walking. The two belong together because they are one act, and a caller who set the");
  ("length and forgot the shape would get the slow glide the length was meant to fix.");
  let timing = bless_step_timing();
  let img = app_shared_game_npc_img_get(person);
  g_img_square_style_transition_seconds(img, seconds);
  g_img_square_style_transition_timing(img, timing);
  let cross = app_shared_game_npc_cross_get(person);
  let b = null_is(cross);
  let crossed = not(b);
  if (crossed) {
    g_img_square_style_transition_seconds(cross, seconds);
    g_img_square_style_transition_timing(cross, timing);
  }
}
