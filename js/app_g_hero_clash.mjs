import { each } from "./each.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { divide } from "./divide.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { app_g_hero_dark_gather } from "./app_g_hero_dark_gather.mjs";
import { emoji_moon_new } from "./emoji_moon_new.mjs";
import { app_g_hero_dark_glow } from "./app_g_hero_dark_glow.mjs";
import { app_g_hero_bolt } from "./app_g_hero_bolt.mjs";
import { app_g_hero_fireball } from "./app_g_hero_fireball.mjs";
import { html_remove } from "./html_remove.mjs";
import { emoji_fire } from "./emoji_fire.mjs";
import { app_g_hero_sprite } from "./app_g_hero_sprite.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_g_hero_fire_glow } from "./app_g_hero_fire_glow.mjs";
import { app_g_hero_ring } from "./app_g_hero_ring.mjs";
import { app_g_hero_struggle } from "./app_g_hero_struggle.mjs";
export async function app_g_hero_clash(hero, evil_img, from, to) {
  arguments_assert(arguments, 4);
  ("The player throws her fire and the killer answers with dark power. The two meet midway,");
  ("burst, lock together, and she overpowers them.");
  ("The killer ANSWERS rather than being struck down where they stand, because a killer who");
  ("simply falls over is not somebody who had to be stopped. They are given their moment of");
  ("throwing everything they have at her, and the fire still comes on.");
  ("They meet MIDWAY, at the point half way along, so neither of them is winning yet when");
  ("they touch. Starting the lock anywhere nearer to one of the two would have decided the");
  ("fight before it began.");
  ("The two balls that flew are thrown away at the meeting and two fresh ones are stood up in");
  ("their place. A ball in flight is carrying the whole of its travel in its transform, and");
  ("shoving it about afterwards would move it relative to where it was THROWN from rather");
  ("than to where it now is - so the flight ends and the struggle begins with clean ground.");
  ("They are stood a little APART, on either side of the meeting point, so there is a seam");
  ("between them for the shoving to be seen along. Two symbols on one spot would read as one");
  ("muddled thing rather than as two powers pressed against each other.");
  let fx = property_get(hero, "fx");
  let from_x = property_get(from, "x");
  let to_x = property_get(to, "x");
  let from_y = property_get(from, "y");
  let to_y = property_get(to, "y");
  let top = add(from_x, to_x);
  let top2 = add(from_y, to_y);
  let mid = {
    x: divide(top, 2),
    y: divide(top2, 2),
  };
  let mid_x = property_get(mid, "x");
  let mid_y = property_get(mid, "y");
  let dx = subtract(to_x, mid_x);
  let dy = subtract(to_y, mid_y);
  let apart = 0.12;
  let step_x = multiply(dx, apart);
  let step_y = multiply(dy, apart);
  let fire_point = {
    x: subtract(mid_x, step_x),
    y: subtract(mid_y, step_y),
  };
  let dark_point = {
    x: add(mid_x, step_x),
    y: add(mid_y, step_y),
  };
  ("The killer gathers their power while the fire is already coming, and both are in the air");
  ("at once - one thrown and handed back, the other thrown and waited for, landing together");
  ("because they share one time of flight.");
  await app_g_hero_dark_gather(evil_img);
  let orb = emoji_moon_new();
  let dark_glow = app_g_hero_dark_glow();
  let thrown = app_g_hero_bolt(fx, to, mid, orb, dark_glow);
  await app_g_hero_fireball(fx, from, mid);
  html_remove(thrown);
  let fire_text = emoji_fire();
  let fire = app_g_hero_sprite(fx, fire_point, fire_text, 2);
  let style_value = app_g_hero_fire_glow();
  html_style_set(fire, "filter", style_value);
  let dark = app_g_hero_sprite(fx, dark_point, orb, 2);
  html_style_set(dark, "filter", dark_glow);
  app_g_hero_ring(fx, mid, "rgba(255, 210, 60, 1)", 0, 4);
  app_g_hero_ring(fx, mid, "rgba(150, 0, 255, 1)", 90, 3.2);
  await app_g_hero_struggle(hero, fire, dark, mid, to);
  each([dark, fire], html_remove);
}
