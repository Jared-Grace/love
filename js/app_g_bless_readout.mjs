import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { bless_people_noun } from "./bless_people_noun.mjs";
import { bless_place_seen } from "./bless_place_seen.mjs";
import { bless_prayer_place } from "./bless_prayer_place.mjs";
export function app_g_bless_readout(container, cone, street, visible, count) {
  arguments_assert(arguments, 5);
  ("What the player is told about what they can see: how many people are in front of them,");
  ("how many of those the prayer they have unlocked so far actually reaches, and whether a");
  ("whole street has come into sight.");
  ("The second line only appears when the two numbers differ, and it is where the player");
  ("learns the rule the game runs on - sight and the unlock are two different limits, and");
  ("seeing more people does not by itself let you pray for more of them.");
  let noun = bless_people_noun(visible);
  let seeing = text_combine_multiple(["You can see ", visible, " ", noun]);
  app_g_p_text(container, seeing);
  let short = less_than(count, visible);
  if (short) {
    let reach = text_combine_multiple([
      "Your prayer reaches ",
      count,
      " of them so far",
    ]);
    app_g_p_text(container, reach);
  }
  let whole = bless_place_seen(cone, street);
  if (whole) {
    app_g_p_text(container, "The whole street is in sight");
    let prayer = bless_prayer_place("street");
    app_g_p_text(container, prayer);
  }
}
