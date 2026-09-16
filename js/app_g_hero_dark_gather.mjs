import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_animate } from "./html_animate.mjs";
export async function app_g_hero_dark_gather(evil_img) {
  arguments_assert(arguments, 1);
  ("The killer draws their power up: they swell, darken, and burn purple around the edges.");
  ("It is the killer's half of what `$fn ",
    fn_name("app_g_hero_burn_charge"),
    "` is for the player - the");
  ("wind-up that says an attack is coming before anything is thrown, so nothing ever arrives");
  ("out of nowhere.");
  ("They are left a little swollen and a little dark rather than snapping back, because the");
  ("power is now held and not yet spent.");
  await html_animate(
    evil_img,
    [
      {
        transform: "scale(1)",
        filter: "brightness(1)",
      },
      {
        transform: "scale(1.3)",
        filter:
          "brightness(0.5) drop-shadow(0 0 0.2em rgba(120, 0, 200, 1)) drop-shadow(0 0 0.6em rgba(40, 0, 80, 1))",
        offset: 0.7,
      },
      {
        transform: "scale(1.1)",
        filter: "brightness(0.7) drop-shadow(0 0 0.1em rgba(120, 0, 200, 1))",
      },
    ],
    {
      duration: 450,
      easing: "ease-in",
    },
  );
}
