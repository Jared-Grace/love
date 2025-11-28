import { app_g_button_uncolored } from "../../../love/public/src/app_g_button_uncolored.mjs";
import { app_g_button_back } from "../../../love/public/src/app_g_button_back.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_g_player_save } from "../../../love/public/src/app_g_player_save.mjs";
import { app_g_player_get } from "../../../love/public/src/app_g_player_get.mjs";
import { emoji_bow } from "../../../love/public/src/emoji_bow.mjs";
import { app_karate_button_uncolored } from "../../../karate_code/public/src/app_karate_button_uncolored.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
export function app_g_menu_refresh(overlay) {
  html_clear(overlay);
  function close() {
    html_remove(overlay);
  }
  let component2 = app_g_button_back(overlay, close);
  let text = emoji_pray() + " Pray";
  function lambda7() {
    html_clear(overlay);
    function lambda23() {
      app_g_menu_refresh(overlay);
    }
    let button2 = app_g_button_back(overlay, lambda23);
    function lambda22() {
      let player = app_g_player_get();
      let prayer = object_property_get(player, "prayer");
      object_property_set(prayer, "conversation", true);
      app_g_player_save(player);
      close();
    }
    let component3 = app_karate_button_uncolored(
      overlay,
      emoji_bow() +
        " Heavenly Father, please bless this next conversation, in Jesus' name, amen! " +
        emoji_pray(),
      lambda22,
    );
  }
  app_g_button_uncolored(overlay, text, lambda7);
}
