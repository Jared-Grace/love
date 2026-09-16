import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_hero_sprite } from "./app_g_hero_sprite.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { app_g_hero_translate_text } from "./app_g_hero_translate_text.mjs";
import { app_g_hero_projectile_ms } from "./app_g_hero_projectile_ms.mjs";
import { html_animate_start } from "./html_animate_start.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_hero_bolt(fx, from, to, text, glow) {
  arguments_assert(arguments, 5);
  ("A thrown power that is set flying and handed straight back, still in the air.");
  ("It is the half of `$fn ",
    fn_name("app_g_hero_projectile"),
    "` that does not WAIT. A flight that is waited");
  ("for can only ever be thrown on its own, and two powers meeting in mid air have to be in");
  ("the air at the same time - so one of the two is thrown with this and the other is waited");
  ("for, and they land together because they share one duration.");
  ("It sheds nothing behind it, and that is the difference the player is meant to see. The");
  ("fire leaves a trail of itself and the dark power does not, so even as they fly at each");
  ("other it is plain which of the two has more in it.");
  ("The caller is given the ball because the caller has to take it away. Something still");
  ("hanging in the air when the flight is over is the caller's to clear, and only the caller");
  ("knows whether what comes next replaces it or carries it on.");
  let ball = app_g_hero_sprite(fx, from, text, 1.4);
  html_style_set(ball, "filter", glow);
  let left = property_get(to, "x");
  let right = property_get(from, "x");
  let dx = subtract(left, right);
  let left2 = property_get(to, "y");
  let right2 = property_get(from, "y");
  let dy = subtract(left2, right2);
  let travel = app_g_hero_translate_text(dx, dy);
  let duration = app_g_hero_projectile_ms();
  html_animate_start(
    ball,
    [
      {
        transform: "translate(0px, 0px) scale(0.5)",
      },
      {
        transform: text_combine(travel, " scale(2.2)"),
      },
    ],
    {
      duration,
      easing: "cubic-bezier(0.55, 0, 0.85, 0.5)",
      fill: "forwards",
    },
  );
  return ball;
}
