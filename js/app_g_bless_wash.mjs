import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { app_g_bless_color_looking } from "./app_g_bless_color_looking.mjs";
import { bless_cone_tiles } from "./bless_cone_tiles.mjs";
export function app_g_bless_wash(wash, cone, people) {
  arguments_assert(arguments, 3);
  ("Lights the ground the player may pray over, one pale square per tile - the tiles the");
  ("cone reaches, and the tiles the people being held are standing on.");
  ("The held squares are lit for the same reason the cone is: the light IS the rule, said");
  ("in the only language a player reads while playing. Somebody held who has walked out of");
  ("the cone is still prayable, and lighting only the cone would have told the player the");
  ("opposite of the truth about them.");
  ("Somebody mid-step lights both squares they are on, which is honest - a tap on either");
  ("finds them - and it also draws the eye along with them as they go.");
  ("Aiming your eyes is this game's whole verb, and a facing you cannot see is a verb the");
  ("player has to work out from a compass. The wash makes the answer to who you can pray");
  ("for a shape on the screen rather than a calculation.");
  ("Cleared and drawn again rather than moved, because the cone changes shape as well as");
  ("place - turning swings it round and walking carries it along - and there is no cheaper");
  ("thing to reuse than a plain coloured square.");
  ("It sits at the ground layer, above the tiles and below the people, so a lit tile never");
  ("hides the person standing on it.");
  html_clear(wash);
  let tiles_cone = bless_cone_tiles(cone);
  function person_tiles(person) {
    let tiles_person = bless_person_tiles(person);
    return tiles_person;
  }
  let tiles_people = list_map(people, person_tiles);
  let tiles_held = list_flat(tiles_people);
  let tiles = list_concat(tiles_cone, tiles_held);
  function tile_light(tile) {
    let square = html_div(wash);
    g_img_square_style_position(square, tile, "ground_tint");
    html_style_assign(square, {
      background: app_g_bless_color_looking(),
      "pointer-events": "none",
    });
  }
  each(tiles, tile_light);
}
