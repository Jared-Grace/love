import { arguments_assert } from "./arguments_assert.mjs";
import { and } from "./and.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
import { html_data_set_json } from "./html_data_set_json.mjs";
import { html_div } from "./html_div.mjs";
import { html_img } from "./html_img.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_size_square } from "./html_style_size_square.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { emoji_person_outline } from "./emoji_person_outline.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { g_tile_path } from "./g_tile_path.mjs";
import { bless_cone_holds } from "./bless_cone_holds.mjs";
import { bless_people_at } from "./bless_people_at.mjs";
import { bless_tiles_hold } from "./bless_tiles_hold.mjs";
import { app_g_bless_color_looking } from "./app_g_bless_color_looking.mjs";
import { app_g_bless_marker } from "./app_g_bless_marker.mjs";
import { app_g_bless_tile_size } from "./app_g_bless_tile_size.mjs";
export function app_g_bless_cell(grid, world, x, y) {
  arguments_assert(arguments, 4);
  "One tile of the prayer grid: the ground, a wash over it if the player is looking this";
  "way, and everybody standing on it.";
  "Hands back the markers of the people here that the player can SEE, and only those, so a";
  "caller wanting to show a blessing landing gets exactly the people the blessing covers.";
  "The two answers come from the same call to the cone, which is what stops the glow and the";
  "count ever disagreeing about who was blessed.";
  let cone = property_get(world, "cone");
  let people = property_get(world, "people");
  let street = property_get(world, "street");
  let size = app_g_bless_tile_size();
  let cell = html_div(grid);
  html_style_assign(cell, { position: "relative", "line-height": "0" });
  let on_street = bless_tiles_hold(street, x, y);
  let tile_name = "grass";
  if (on_street) {
    tile_name = "construction_path";
  }
  let src = g_tile_path(tile_name);
  let ground = html_img(cell, src);
  html_style_size_square(ground, size);
  html_style_assign(ground, { display: "block" });
  let looking = bless_cone_holds(cone, x, y);
  if (looking) {
    let wash = html_div(cell);
    html_style_assign(wash, {
      position: "absolute",
      inset: "0",
      background: app_g_bless_color_looking(),
      "pointer-events": "none",
    });
  }
  let same_x = equal(property_get(cone, "x"), x);
  let same_y = equal(property_get(cone, "y"), y);
  let player_here = and(same_x, same_y);
  if (player_here) {
    let praying = emoji_pray();
    app_g_bless_marker(cell, praying);
  }
  let standing = bless_people_at(people, x, y);
  let seen = [];
  function lambda$person(person) {
    let walker = emoji_person_outline();
    let marker = app_g_bless_marker(cell, walker);
    ("the person is written onto their own marker the way a tile carries its coordinates, so anything later that has an element in hand can find out who it belongs to without having to search the crowd for a matching pair of numbers");
    html_data_set_json(marker, "person", person);
    if (looking) {
      list_add(seen, marker);
    }
  }
  each(standing, lambda$person);
  return seen;
}
