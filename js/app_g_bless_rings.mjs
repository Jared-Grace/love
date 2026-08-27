import { app_g_bless_mark_visibility } from "./app_g_bless_mark_visibility.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_color_household_remaining } from "./app_g_bless_color_household_remaining.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { app_shared_game_npc_ring_get } from "./app_shared_game_npc_ring_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_div } from "./html_div.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_game_npc_ring_set } from "./app_shared_game_npc_ring_set.mjs";
import { each } from "./each.mjs";
export function app_g_bless_rings(rings, everyone, remaining) {
  arguments_assert(arguments, 3);
  ("Rings everybody who is left in a house the player has started, and nobody else.");
  ("A broken line rather than a solid one, and that is the whole of what it says. A solid");
  ("mark is a thing that is finished; a mark with gaps in it is a thing that is not, and a");
  ("player meeting one has been told what to do about it without a word being written.");
  ("Drawn as an open ring where a blessing is a filled light, so the two are told apart by");
  ("shape and not only by colour - which is what makes them readable at the size a phone");
  ("draws a person at, and readable to somebody who cannot tell the two colours apart at");
  ("all.");
  ("Its line is a tenth of a tile rather than a fixed thickness, because the map is drawn at");
  ("whatever size the screen has room for. Written in a fixed unit it would be a hairline on");
  ("a tablet and a band on a phone.");
  ("EVERYBODY is given a ring when the street is first drawn and praying only SHOWS one, for");
  ("the reason the lights are made that way: a person's tile names the square their step is");
  ("heading for rather than the one they are on, so a ring placed at the moment it becomes");
  ("true arrives ahead of them and stands waiting. A ring made before anybody has moved is");
  ("carried by their steps instead of placed by them, which is why the whole street is");
  ("handed in here and not only the people to ring.");
  ("Hidden by being INVISIBLE and not by being undisplayed. Something undisplayed has no box");
  ("on the page, so it does not slide with a step - it would simply appear at the far end of");
  ("one, which is the very fault this is written to avoid. Invisible, it keeps its box and");
  ("crosses squares all along with nobody watching.");
  ("Every ring is hidden and then the ones that are true are shown, rather than only the");
  ("changes being written, because unlike a light a ring GOES OUT - the person is prayed for");
  ("and it has nothing left to say. Writing only what changed would need a memory of what");
  ("was showing last time, and that memory is the thing that drifts away from the record.");
  let color = app_g_bless_color_household_remaining();
  let size = g_img_square_size_css();
  let width = text_combine_multiple(["calc((", size, ") * 0.13)"]);
  let border = text_combine_multiple([width, " dashed ", color]);
  let people_all = bless_view_people(everyone);
  function person_ring(person) {
    let already = app_shared_game_npc_ring_get(person);
    let made = null_not_is(already);
    if (made) {
      return;
    }
    let ring = html_div(rings);
    g_img_square_style_position(ring, person, "ground_tint");
    html_style_assign(ring, {
      border: border,
      "border-radius": "50%",
      "box-sizing": "border-box",
      filter: app_g_bless_mark_edge_filter(),
      "pointer-events": "none",
      visibility: "hidden",
    });
    app_shared_game_npc_ring_set(person, ring);
  }
  each(people_all, person_ring);
  app_g_bless_mark_visibility(
    app_shared_game_npc_ring_get,
    everyone,
    remaining,
  );
}
