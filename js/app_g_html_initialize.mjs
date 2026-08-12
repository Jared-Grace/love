import { app_g_storage_app } from "./app_g_storage_app.mjs";
import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { app_g_font_size } from "./app_g_font_size.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_viewport_height_full } from "./html_viewport_height_full.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { html_hide_loadable } from "./html_hide_loadable.mjs";
import { g_icon_cross_unpositioned } from "./g_icon_cross_unpositioned.mjs";
import { html_scroll_none } from "./html_scroll_none.mjs";
import { html_div } from "./html_div.mjs";
import { app_g_player_style_initialize } from "./app_g_player_style_initialize.mjs";
import { html_style_overflow_hidden } from "./html_style_overflow_hidden.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_remix_icon } from "./html_remix_icon.mjs";
export function app_g_html_initialize(context) {
  let app_fn = app_g_storage_app();
  app_shared_app_fn_set(context, app_fn);
  let root = html_mobile_default(context);
  html_remix_icon();
  ("the game font is sized to MATCH the other apps' reading text (~20px), not run larger. the conversation chrome renders through the shared 1.2em control token, so it lands at 1.2 × this root; a 16px root puts it at ~19px — level with the reading apps' 20px rather than the 21.6px an 18px root gave. the map is px/vw/vh-based (",
    fn_name("g_img_square_size_css"),
    "), so this only sizes text, never the tiles.");
  ("that 16 is where the game STARTS, not a ceiling. a player who needs bigger words has the same claim on them here as a reader does in the Bible apps, and because no tile is sized from this root, growing them cannot disturb the map — see ",
    fn_name("app_g_font_size"),
    ".");
  let left = app_g_font_size(context);
  html_style_assign(root, {
    "font-size": text_combine(left, "px"),
    margin: "0",
    padding: 0,
    height: "100%",
  });
  html_style_overflow_hidden(root);
  app_g_player_style_initialize();
  let div_map_container = html_div(root);
  ("the camera is the PLAYER, so the map does not scroll by hand: overflow HIDDEN still lets the code set scrollLeft/scrollTop (unlike overflow clip), which is the only thing that ever moves this view — ",
    fn_name("app_g_player_center"),
    " animates it back to the player after each move, and the 350ms glide is the delay you see. dragging the map away from the player used to be possible and left the player off-screen with nothing to bring them back");
  html_style_assign(div_map_container, {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    "pointer-events": "auto",
  });
  ("this was needed instead of 100% to allow vertical scrolling");
  ("and it is the VISIBLE height, not the full one. the full height is the tallest the window ever gets, which on a phone counts the strip the browser's own bar sits over - so a map built to it hangs its bottom row underneath that bar. everything that decides what the player can see is measured off this box: the centring scrolls to put the player in the middle of it, and the gold guide is laid on the furthest tile it says is wholly inside. measured too tall, both are wrong by the same strip, which is what put the gold on a tile only half on the screen");
  let style_value = html_viewport_height_visible();
  html_style_set(div_map_container, "height", style_value);
  html_scroll_none(div_map_container);
  let i = g_icon_cross_unpositioned(root);
  html_hide_loadable(i);
  return div_map_container;
}
