import { global_function_initialize } from "./global_function_initialize.mjs";
export function app_g_player_walk_state() {
  "which walk the player is on: a count that goes up by one every time a new walk is set off, and nothing else. it is the whole of what one walk needs to know about the others - not who they were, not where they were going, only whether it is still the newest one";
  "kept apart from the day session on purpose. the day is a demo that is switched off nearly everywhere, and the player walks on every map there is, so a walk that asked the day where it stood would be asking a room that is usually empty";
  "a count rather than a flag saying stop. a flag has to be put back down by whoever raised it, and the one thing certain about a walk being cut short is that the one who raised the flag is busy walking somewhere else";
  "the walk that was last seen through to its end is written beside it, and the two together say whether anybody is walking now. it is a second count rather than a flag for the same reason as the first: whoever would have to put a flag down is the one who has just been left behind";
  "both start at nought, which is a walk that never happened - so before anybody has moved the two agree, and nobody is walking";
  let state = global_function_initialize(app_g_player_walk_state, {
    walk: 0,
    ended: 0,
  });
  return state;
}
