import { html_remove_lambda } from "../../../love/public/src/html_remove_lambda.mjs";
import { app_g_container_text } from "../../../love/public/src/app_g_container_text.mjs";
import { app_g_study } from "../../../love/public/src/app_g_study.mjs";
import { app_g_menu_clear_back } from "../../../love/public/src/app_g_menu_clear_back.mjs";
import { app_g_button_green } from "../../../love/public/src/app_g_button_green.mjs";
import { app_g_button_uncolored } from "../../../love/public/src/app_g_button_uncolored.mjs";
import { app_g_button_back } from "../../../love/public/src/app_g_button_back.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_g_player_save } from "../../../love/public/src/app_g_player_save.mjs";
import { emoji_bow } from "../../../love/public/src/emoji_bow.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
export function app_g_menu(overlay, player) {
  html_clear(overlay);
  let close = html_remove_lambda(overlay);
  let component2 = app_g_button_back(overlay, close);
  let text = emoji_pray() + " Pray";
  function lambda7() {
    app_g_menu_clear_back(overlay, player);
    app_g_container_text(overlay, "What prayer would you like to pray?");
    function lambda22() {
      let prayer = object_property_get(player, "prayer");
      object_property_set(prayer, "conversation", true);
      app_g_player_save(player);
      close();
    }
    const text =
      emoji_bow() +
      " Heavenly Father, please bless this next conversation, in Jesus' name, amen! " +
      emoji_pray();
    app_g_button_green(overlay, text, lambda22);
  }
  app_g_button_uncolored(overlay, text, lambda7);
  app_g_study(player, overlay, close);
}
