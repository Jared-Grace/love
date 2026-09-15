import { arguments_assert } from "./arguments_assert.mjs";
import { html_animate } from "./html_animate.mjs";
export async function app_g_hero_burn_charge(player_img_c) {
  arguments_assert(arguments, 1);
  ("The player gathers the fire before throwing it: she swells and blazes orange for a moment, so the fireball reads as coming out of her rather than appearing from nowhere.");
  await html_animate(
    player_img_c,
    [
      {
        transform: "scale(1)",
        filter: "brightness(1)",
      },
      {
        transform: "scale(1.35)",
        filter:
          "brightness(1.8) drop-shadow(0 0 0.2em rgba(255, 170, 0, 1)) drop-shadow(0 0 0.6em rgba(255, 80, 0, 1))",
        offset: 0.7,
      },
      {
        transform: "scale(1.1)",
        filter: "brightness(1.4) drop-shadow(0 0 0.1em rgba(255, 170, 0, 1))",
      },
    ],
    {
      duration: 450,
      easing: "ease-in",
    },
  );
}
