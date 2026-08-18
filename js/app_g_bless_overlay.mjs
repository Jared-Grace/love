import { app_g_bless_overlay_transfer } from "./app_g_bless_overlay_transfer.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_overlay_tapped } from "./app_g_bless_overlay_tapped.mjs";
import { app_g_bless_overlay_turned } from "./app_g_bless_overlay_turned.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_g_bless_transfer_overlay } from "./app_g_bless_transfer_overlay.mjs";
export function app_g_bless_overlay(container_map) {
  arguments_assert(arguments, 1);
  ("The praying game: a world seen from above and filling the screen, the player standing in");
  ("the middle of it, the ground they are looking across washed pale, and one button that");
  ("prays for everybody in it.");
  ("Two things move the cone and they are the two verbs the game has. Turning swings it,");
  ("from four small arrows along the bottom where a thumb already is. Walking carries it,");
  ("from a tap on any tile - the player walks there a step at a time and what they can see");
  ("changes the whole way, so a walk is not travel between two screens, it is the game.");
  ("You still cannot tap a person. Aiming is the verb, and a tap that blessed somebody");
  ("standing behind you would delete it. Tapping the ground moves you until they are in");
  ("front of you, which is the same wish answered the way this game answers it.");
  ("The prayer is on the button rather than beside it, so the player reads the words as they");
  ("pray them. Reading the prayer is the player's part of this game; a label they skipped");
  ("would leave the game praying by itself, which is the one thing it must never do.");
  ("The map is drawn once and never again. Only the wash, the readout and the button are");
  ("redrawn, because rebuilding the map would replace the very picture that is sliding and");
  ("the player would jump rather than walk.");
  let r = app_g_bless_overlay_turned(container_map);
  let r2 = app_g_bless_overlay_tapped(r);
  let tapped = property_get(r2, "tapped");
  let transfer = app_g_bless_overlay_transfer(r2, tapped, container_map);
  function begun() {
    html_remove(transfer);
  }
  app_g_bless_transfer_overlay(transfer, begun);
  return transfer;
}
