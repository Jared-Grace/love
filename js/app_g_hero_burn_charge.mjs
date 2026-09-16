import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_hero_tall } from "./app_g_hero_tall.mjs";
import { app_g_hero_tall_text } from "./app_g_hero_tall_text.mjs";
import { multiply } from "./multiply.mjs";
import { html_animate } from "./html_animate.mjs";
export async function app_g_hero_burn_charge(hero) {
  arguments_assert(arguments, 1);
  ("The player gathers the fire before throwing it: she swells and blazes orange for a");
  ("moment, so the fireball reads as coming out of her rather than appearing from nowhere.");
  ("The swell is measured from the height she has GROWN to and not from the height she began");
  ("at. Written as a plain swell it set her size outright, so a player who had stopped");
  ("several people shrank back to her first height for the half second she was gathering the");
  ("fire and sprang back afterwards - the one moment in the game she is most looked at.");
  ("So it is handed the whole player rather than her picture, because what it needs is not an");
  ("element to animate but an answer to how tall she is, and that is kept with her.");
  let player_img_c = property_get(hero, "player_img_c");
  let slain = property_get(hero, "slain");
  let tall = app_g_hero_tall(slain);
  let stood = app_g_hero_tall_text(tall);
  let tall2 = multiply(tall, 1.35);
  let swollen = app_g_hero_tall_text(tall2);
  let tall3 = multiply(tall, 1.1);
  let held = app_g_hero_tall_text(tall3);
  await html_animate(
    player_img_c,
    [
      {
        transform: stood,
        filter: "brightness(1)",
      },
      {
        transform: swollen,
        filter:
          "brightness(1.8) drop-shadow(0 0 0.2em rgba(255, 170, 0, 1)) drop-shadow(0 0 0.6em rgba(255, 80, 0, 1))",
        offset: 0.7,
      },
      {
        transform: held,
        filter: "brightness(1.4) drop-shadow(0 0 0.1em rgba(255, 170, 0, 1))",
      },
    ],
    {
      duration: 450,
      easing: "ease-in",
    },
  );
}
