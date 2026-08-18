import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { html_reload_on_hash_change } from "./html_reload_on_hash_change.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_overflow_hidden } from "./html_style_overflow_hidden.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_viewport_height_visible } from "./html_viewport_height_visible.mjs";
import { app_g_bless_overlay } from "./app_g_bless_overlay.mjs";
export async function app_g_bless(context) {
  arguments_assert(arguments, 1);
  ("a page of its own for the praying game, sibling to the gospel-share game rather than part of it. it shares that game's world - the same tiles, the same compass, the same panels and buttons - and differs in the one thing a player does with a person standing in front of them");
  ("the box the screen is drawn in is a plain empty div, sized to the height that is actually VISIBLE rather than the tallest the window ever gets, because on a phone the taller figure counts the strip the browser's own bar sits over and would hang the bottom row underneath it. the overlay measures itself against this box, so a box measured wrong is a screen wrong by the same strip");
  ("there is no world behind it yet, and no saving. what is here is the loop: look somewhere, see who is there, pray for them");
  html_reload_on_hash_change();
  let root = html_mobile_default(context);
  html_style_assign(root, {
    margin: "0",
    padding: "0",
    height: "100%",
  });
  html_style_overflow_hidden(root);
  let container = html_div(root);
  html_style_assign(container, {
    position: "relative",
    overflow: "hidden",
    width: "100%",
  });
  let height = html_viewport_height_visible();
  html_style_set(container, "height", height);
  app_g_bless_overlay(container);
}
