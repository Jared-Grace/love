import { app_g_player_get } from "../../../love/public/src/app_g_player_get.mjs";
import { emoji_bow } from "../../../love/public/src/emoji_bow.mjs";
import { app_karate_button_uncolored } from "../../../karate_code/public/src/app_karate_button_uncolored.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { app_karate_button_back } from "../../../karate_code/public/src/app_karate_button_back.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
export function app_g_menu_refresh(overlay) {
  html_clear(overlay);
  function lambda21() {
    html_remove(overlay);
  }
  let component2 = app_karate_button_back(overlay, lambda21);
  let text = emoji_pray() + " Pray";
  function lambda7() {
    html_clear(overlay);
    function lambda23() {
      app_g_menu_refresh(overlay);
    }
    let button2 = app_karate_button_back(overlay, lambda23);
    function lambda22() {
      let player2 = app_g_player_get();
    }
    let component3 = app_karate_button_uncolored(
      overlay,
      emoji_bow() +
        " Heavenly Father, please bless this next conversation, in Jesus' name, amen! " +
        emoji_pray(),
      lambda22,
    );
  }
  let button = app_karate_button_uncolored(overlay, text, lambda7);
}
