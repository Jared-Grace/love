import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_g_hero_dark_glow() {
  arguments_assert(arguments, 0);
  ("The light the killer's dark power gives off: violet at the heart of it and near black");
  ("further out.");
  ("It is the opposite of `$fn ",
    fn_name("app_g_hero_fire_glow"),
    "` on purpose - light that darkens as it");
  ("spreads instead of warming - so the two powers can be told apart at a glance even where");
  ("they are touching each other.");
  let glow =
    "drop-shadow(0 0 0.15em rgba(150, 0, 255, 1)) drop-shadow(0 0 0.5em rgba(30, 0, 60, 1))";
  return glow;
}
