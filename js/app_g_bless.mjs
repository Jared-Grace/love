import { bless_container_new } from "./bless_container_new.mjs";
import { app_g_bless_overlay_loaded } from "./app_g_bless_overlay_loaded.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function app_g_bless(context) {
  arguments_assert(arguments, 1);
  ("a page of its own for the praying game, sibling to the gospel-share game rather than part of it. it shares that game's world - the same tiles, the same compass, the same panels and buttons - and differs in the one thing a player does with a person standing in front of them");
  ("the box the screen is drawn in is a plain empty div, sized to the height that is actually VISIBLE rather than the tallest the window ever gets, because on a phone the taller figure counts the strip the browser's own bar sits over and would hang the bottom row underneath it. the overlay measures itself against this box, so a box measured wrong is a screen wrong by the same strip");
  ("there is a world to walk about in and no saving, so a refresh begins a new one. what is here is the loop: look somewhere, see who is there, pray for them, and walk until somebody else is in front of you");
  ("the zoom is set once here, at the top, before anything is drawn. every tile, person and icon is sized and placed from that one variable, so setting it on the page means the whole map is drawn to this game's camera rather than the gospel game's - without either game having to know the other exists");
  ("the animations the map's own pieces name are put on the page here, before any of them is drawn. they are named as plain CSS by whatever uses them, so a page that never asks for them shows a player with no glow at all and says nothing about it - which is a screen that looks merely wrong rather than broken");
  let container = bless_container_new(context);
  await app_g_bless_overlay_loaded(container);
}
