import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_hash_index_settings } from "./app_shared_hash_index_settings.mjs";
import { app_shared_dev_overlay } from "./app_shared_dev_overlay.mjs";
import { app_shared_hash_index_render } from "./app_shared_hash_index_render.mjs";
export function app_shared_dev_index_show(all, prefixes, app_fn) {
  arguments_assert(arguments, 3);
  ("Draws a game's dev directory: a full-screen panel headed Dev routes, holding every");
  ("screen the game answers to as a card you can tap.");
  ("Both games had this written out, and the copies were the same five lines each. What");
  ("they actually disagree about is which names go on the page and whose storage remembers");
  ("the drilled-open folders, so those two are handed in and everything else is decided");
  ("once, here.");
  ("Deciding it once is the point rather than the saving. How a card OPENS is a judgement");
  ("about what a dev directory is for, and a judgement kept in two places is one that gets");
  ("changed in one of them - which had already happened once, the two copies arguing the");
  ("same case in different words.");
  ("A card opens a NEW TAB. The directory is a list somebody is working through: they open");
  ("a screen, look at it, and want the list again to reach the next one. Opening in place");
  ("spends the list to see one entry, and getting it back means finding the way back and");
  ("waiting for the game to build its street a second time.");
  ("It also survives the screen it opened. A dev screen can be a long animation or a world");
  ("in a particular state; watched in a tab of its own it can be reloaded, watched again,");
  ("and closed, with the list still sitting where it was.");
  let new_tab = true;
  let settings = app_shared_hash_index_settings(app_fn, new_tab);
  let column = app_shared_dev_overlay("Dev routes");
  app_shared_hash_index_render(column, all, prefixes, settings);
}
