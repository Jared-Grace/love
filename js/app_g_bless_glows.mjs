import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_game_emoji_glow_apply } from "./app_shared_game_emoji_glow_apply.mjs";
import { app_shared_color_gold_glow } from "./app_shared_color_gold_glow.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
export function app_g_bless_glows(glows, view) {
  arguments_assert(arguments, 2);
  ("Lights everybody who has been prayed for with the gold breathing glow, and nobody else.");
  ("The mark does not fade, and that is what makes it the map. A prayer that reached a whole");
  ("block lights every person on it, so the player walks to the edge of their own work and");
  ("sees the crowd go dark - which is where to pray next, told without a list of chores ever");
  ("being put in front of them.");
  ("Drawn behind the person rather than on them, so it reads as light around somebody rather");
  ("than as a change to who they are - and their face is never covered by it.");
  ("Gold to white is God's presence, which is why it is spent here and on nothing else on");
  ("this screen. The cone the player is looking down gets plain pale light instead: aiming");
  ("your eyes is your own doing, and a blessing landing is not.");
  html_clear(glows);
  let gold = app_shared_color_gold_glow();
  let background = text_combine_multiple([
    "radial-gradient(circle, ",
    gold,
    " 0%, rgba(255, 255, 255, 0) 70%)",
  ]);
  let people = bless_view_people(view);
  function person_light(person) {
    let halo = html_div(glows);
    g_img_square_style_position(halo, person, "ground_tint");
    html_style_assign(halo, {
      background: background,
      "pointer-events": "none",
    });
    app_shared_game_emoji_glow_apply(halo);
  }
  each(people, person_light);
}
