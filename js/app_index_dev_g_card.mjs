import { emoji_gear } from "./emoji_gear.mjs";
import { app_index_label_generic } from "./app_index_label_generic.mjs";
import { app_shared_g_dev_index_hash_name } from "./app_shared_g_dev_index_hash_name.mjs";
import { app_index_card } from "./app_index_card.mjs";
import { fn_name } from "./fn_name.mjs";
import { window_go_app_hash_name } from "./window_go_app_hash_name.mjs";
export function app_index_dev_g_card(root) {
  "the card on the index page that opens the game's dev tools - the directory listing every test screen the game has";
  "it is here because a phone has no localhost to develop from, so the dev screens are reached on the deployed site or not at all, and the only way in was the Dev Tools button inside the game itself - which means starting a game to look at a screen that has nothing to do with playing one";
  function opened() {
    let a_name = fn_name("app_g");
    let hash_name = app_shared_g_dev_index_hash_name();
    window_go_app_hash_name(a_name, hash_name);
  }
  ("the picture is a gear rather than the game's own cross, which is the one card on this page where the app's picture would say the wrong thing. This does not lead to the game; it leads through the game to the screens the game is BUILT with, and a cross in front of it would offer a reader the thing they already have a card for two rows up.");
  let emoji = emoji_gear();
  let label = app_index_label_generic(emoji, "g dev tools");
  let text = "Opens the game's test screens - every dev route in one directory";
  app_index_card(root, label, text, opened);
}
