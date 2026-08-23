import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_game_emoji_glow_apply } from "./app_shared_game_emoji_glow_apply.mjs";
import { app_shared_game_npc_glow_get } from "./app_shared_game_npc_glow_get.mjs";
import { app_shared_game_npc_glow_set } from "./app_shared_game_npc_glow_set.mjs";
import { app_shared_color_gold_glow } from "./app_shared_color_gold_glow.mjs";
import { app_shared_color_white } from "./app_shared_color_white.mjs";
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
  ("Each light is drawn ONCE, when its person is first prayed for, and is then filed under");
  ("that person and left alone. Everything on this screen is otherwise thrown away and drawn");
  ("again on every beat, which is right for anything that only reflects where things are -");
  ("but it was wrong here, and visibly. A person's tile is written the moment their step");
  ("begins, so a light drawn afresh from that tile appeared at the square they were walking");
  ("TOWARDS while their picture was still crossing the one before it: their own light ran on");
  ("ahead of them and waited. Filed instead, the light is one of the things a step carries,");
  ("and it crosses the tile at their speed because it is moved by the same act that moves");
  ("them.");
  ("Nothing is ever taken away, which is what makes drawing-once safe as well as cheaper:");
  ("a person prayed for stays prayed for, so a light once drawn is never wrong afterwards.");
  ("The light has a WHITE heart, a solid gold body and a dark rim, and every one of those");
  ("three is there because the ground it lies on is not one colour. The grass this map is");
  ("built from runs from jungle green through snow to a pale yellow, and a soft gold fading");
  ("to nothing - which is what this was - all but disappeared on the yellow: same hue, same");
  ("lightness, so there was nothing for an eye to catch. A mark that only shows up on some");
  ("of the ground is worse than no mark, because the player reads the gap as somebody they");
  ("have not prayed for yet.");
  ("Hue could not fix it without spending a different colour, and the colour is the meaning");
  ("here. Lightness could: white is brighter than any ground on this map and the dark rim is");
  ("darker than all of it, so whichever end the grass sits at, one of the two stands away");
  ("from it. The gold in between is then read as gold rather than looked for.");
  ("The rim is drawn from the light's own shape rather than laid on as a border, which is");
  ("why it follows the circle and not the square the light is drawn in.");
  let gold = app_shared_color_gold_glow();
  let white = app_shared_color_white();
  let background = text_combine_multiple([
    "radial-gradient(circle, ",
    white,
    " 0%, ",
    gold,
    " 34%, ",
    gold,
    " 50%, rgba(255, 255, 255, 0) 62%)",
  ]);
  let rim = "drop-shadow(0 0 2px rgba(0, 0, 0, 0.55))";
  let people = bless_view_people(view);
  function person_light(person) {
    let already = app_shared_game_npc_glow_get(person);
    let lit = null_not_is(already);
    if (lit) {
      return;
    }
    let halo = html_div(glows);
    g_img_square_style_position(halo, person, "ground_tint");
    html_style_assign(halo, {
      background: background,
      filter: rim,
      "pointer-events": "none",
    });
    app_shared_game_emoji_glow_apply(halo);
    app_shared_game_npc_glow_set(person, halo);
  }
  each(people, person_light);
}
