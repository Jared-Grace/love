import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { and } from "./and.mjs";
import { or } from "./or.mjs";
export function js_file_color_artwork_is(name) {
  "whether a js file name draws game artwork rather than a screen. A painted house or car, or the glow of a fireball, picks its colours for the picture, not to match a button, so the palette rule and the near miss rule both leave these files alone.";
  let game_g = text_starts_with(name, "app_g_");
  let game_bless = text_starts_with(name, "bless_");
  let game = or(game_g, game_bless);
  let draw = text_ends_with(name, "_draw.mjs");
  let game_draw = and(game, draw);
  let vehicle = text_starts_with(name, "bless_vehicle_");
  let hero = text_starts_with(name, "app_g_hero_");
  let effect = or(game_draw, hero);
  let r = or(effect, vehicle);
  return r;
}
