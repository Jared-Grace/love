import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_prayer_skipped_is } from "./app_g_bless_prayer_skipped_is.mjs";
import { app_g_bless_pray_overlay } from "./app_g_bless_pray_overlay.mjs";
export function app_g_bless_overlay_render_tap_prayed_amen_ask(
  container_map,
  rung,
  amen,
) {
  "Puts the prayer to the player and waits for their amen - or says it for them, on an opening that asked for the panel to be left out.";
  "AN OPENING CAN ASK FOR THE PANEL TO BE LEFT OUT, and then the tap IS the amen - the same thing the button would have called, called by the tap that would have put the button up.";
  "Nothing between them is skipped, because there is nothing between them: the panel reads out the prayer and waits, and everything the screen is worked on for happens after it.";
  arguments_assert(arguments, 3);
  let skipped = app_g_bless_prayer_skipped_is();
  if (skipped) {
    amen();
    return;
  }
  app_g_bless_pray_overlay(container_map, rung, amen);
}
