import { arguments_assert } from "./arguments_assert.mjs";
import { bless_container_new } from "./bless_container_new.mjs";
import { app_g_bless_cover } from "./app_g_bless_cover.mjs";
import { app_g_hero_play } from "./app_g_hero_play.mjs";
import { bless_cover_lift } from "./bless_cover_lift.mjs";
export async function app_g_hero(context) {
  arguments_assert(arguments, 1);
  ("A sibling of the praying game on the same large street: a crowd walks about, and one of them at a time is evil and hunts the others down. The player is a woman who can stop them with fire.");
  let container = bless_container_new(context);
  let cover = app_g_bless_cover();
  app_g_hero_play(container);
  await bless_cover_lift(container, cover);
}
