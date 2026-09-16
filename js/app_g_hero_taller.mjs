import { app_g_hero_grow_close_factor } from "./app_g_hero_grow_close_factor.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_hero_tall } from "./app_g_hero_tall.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { bless_camera_close } from "./bless_camera_close.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_g_hero_tall_text } from "./app_g_hero_tall_text.mjs";
import { multiply } from "./multiply.mjs";
import { html_animate } from "./html_animate.mjs";
import { bless_camera_player_return } from "./bless_camera_player_return.mjs";
export async function app_g_hero_taller(hero) {
  arguments_assert(arguments, 1);
  ("One more evil person stopped, and the player stands a little taller for it - the camera");
  ("comes in close on her, she rises out of the pavement with a swell of white light, and the");
  ("street opens out again around a woman who is bigger than she was.");
  ("This is the only thing in the game that KEEPS. The fire is spent, the ash blows away,");
  ("somebody new walks in to replace the one who was burned and the street closes up as");
  ("though nothing happened - which is right, because nothing did happen to the street. What");
  ("happened, happened to her. Without this the game has no memory of anything the player");
  ("ever did, and a tenth victory is indistinguishable from a first.");
  ("The camera comes in because the growth is otherwise too small to see. She gains a");
  ("fifteenth of her height, and a fifteenth of a figure the height of a thumbnail is a pixel");
  ("or two - real, permanent, and invisible. Shown once at close quarters the player learns");
  ("what is happening, and every later victory reads as more of the same thing even at the");
  ("distance the game is played at. The moment is the right one to spend it on, too: the fire");
  ("is out, nothing is chasing her, and there is nothing else on the screen to look at.");
  ("Nothing counts it out loud. There is no number on the screen and no line of words,");
  ("because the growing IS the number - she is exactly as tall as what she has done, and a");
  ("player who has not noticed yet is a player who has something left to notice.");
  ("The height is written onto her BEFORE the swell rather than left for the swell to hold,");
  ("so what keeps her tall is a plain line of style and not an animation that has to go on");
  ("running for ever. The swell is then only how the change is shown, and it may be");
  ("interrupted, replaced or never finish without her losing the height it was showing.");
  let player_img_c = property_get(hero, "player_img_c");
  let div_map = property_get(hero, "div_map");
  let player = property_get(hero, "player");
  let slain = property_get(hero, "slain");
  let was = app_g_hero_tall(slain);
  let more = add(slain, 1);
  property_set(hero, "slain", more);
  let tall = app_g_hero_tall(more);
  let factor = app_g_hero_grow_close_factor();
  await bless_camera_close(div_map, player_img_c, player, factor);
  ("Grown from the feet, and said here as well as in the height itself because the height is");
  ("written over and over and this is true once.");
  html_style_set(player_img_c, "transform-origin", "bottom center");
  let text = app_g_hero_tall_text(tall);
  html_style_set(player_img_c, "transform", text);
  let before = app_g_hero_tall_text(was);
  let over = multiply(tall, 1.12);
  let surge = app_g_hero_tall_text(over);
  await html_animate(
    player_img_c,
    [
      {
        transform: before,
        filter: "brightness(1)",
      },
      {
        transform: surge,
        filter:
          "brightness(1.5) drop-shadow(0 0 0.2em rgba(255, 250, 220, 1)) drop-shadow(0 0 0.7em rgba(255, 230, 140, 0.9))",
        offset: 0.45,
      },
      {
        transform: text,
        filter: "brightness(1)",
      },
    ],
    {
      duration: 620,
      easing: "cubic-bezier(0.2, 0.9, 0.3, 1)",
    },
  );
  await bless_camera_player_return(div_map, player_img_c, player);
}
