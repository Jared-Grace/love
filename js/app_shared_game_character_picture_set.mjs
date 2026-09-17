import { arguments_assert } from "./arguments_assert.mjs";
import { g_character_img_url_direction } from "./g_character_img_url_direction.mjs";
import { html_src_set } from "./html_src_set.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_game_character_picture_set(
  character,
  img,
  direction,
) {
  arguments_assert(arguments, 3);
  ("Shows a person's picture facing one way, without saying that is the way they face.");
  ("The way somebody faces and the picture on the screen are two facts, and during a turn");
  ("they differ on purpose: the person already faces where they are going, while the");
  ("picture is still passing through the facings in between. The picture shown is written");
  ("on the picture itself, so the next turn starts from what is actually on the screen");
  ("rather than from where the person was meant to be looking.");
  let src = g_character_img_url_direction(character, direction);
  html_src_set(img, src);
  property_set(img, "facing_shown", direction);
}
