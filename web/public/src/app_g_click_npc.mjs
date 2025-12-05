import { g_sermon_generate_upload_path } from "../../../love/public/src/g_sermon_generate_upload_path.mjs";
import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
import { app_g_chapter_code } from "../../../love/public/src/app_g_chapter_code.mjs";
import { app_g_gospel } from "../../../love/public/src/app_g_gospel.mjs";
import { global_function_property_nested_lambda } from "../../../love/public/src/global_function_property_nested_lambda.mjs";
import { app_g_player_save } from "../../../love/public/src/app_g_player_save.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { list_remove_first } from "../../../love/public/src/list_remove_first.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { g_img_square_size_css } from "../../../love/public/src/g_img_square_size_css.mjs";
import { app_g_conversation } from "../../../love/public/src/app_g_conversation.mjs";
import { app_g_container } from "../../../love/public/src/app_g_container.mjs";
import { app_g_p_text } from "../../../love/public/src/app_g_p_text.mjs";
import { html_click_none } from "../../../love/public/src/html_click_none.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_g_button_back } from "../../../love/public/src/app_g_button_back.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { g_img_square_style_position } from "../../../love/public/src/g_img_square_style_position.mjs";
import { app_g_refresh } from "../../../love/public/src/app_g_refresh.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_g_overlay } from "../../../love/public/src/app_g_overlay.mjs";
import { json_format_to } from "./json_format_to.mjs";
export async function app_g_click_npc(
  div_map,
  npcs_matched,
  player,
  game_prefix,
) {
  marker("1");
  let overlay = app_g_overlay(div_map);
  function overlay_close() {
    app_g_player_save(player);
    html_remove(overlay);
  }
  html_style_assign(overlay, {
    display: "flex",
    flexDirection: "column",
    gap: "0px",
  });
  let prayer = object_property_get(player, "prayer");
  let conversation = object_property_get(prayer, "conversation");
  if (not(conversation)) {
    let container = app_g_container(overlay);
    app_g_p_text(
      container,
      emoji_pray() +
        " You remember that you have not prayed, yet, before your next conversation!",
    );
    let conversed = object_property_get(player, "conversed");
    if (not(conversed)) {
      app_g_p_text(
        container,
        " To pray, tap or click on yourself (You glow with white)",
      );
    }
    function lambda21() {
      overlay_close();
      let conversed = object_property_get(player, "conversed");
      if (conversed) {
        return;
      }
      let tutorial = html_div(div_map);
      html_click_none(tutorial);
      global_function_property_set(app_g_refresh, "tutorial", tutorial);
      g_img_square_style_position(tutorial, player, "tutorial");
      let text = emoji_pray();
      html_text_set(tutorial, text);
      const square_size = `calc(` + g_img_square_size_css() + `*.4)`;
      html_style_assign(tutorial, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: square_size,
        animation: "upDown 1.25s infinite ease-in-out alternate",
      });
    }
    app_g_button_back(overlay, lambda21);
  } else {
    let review = object_property_get(player, "review");
    let ne = list_empty_not_is(review);
    if (ne) {
      let chapter_code = app_g_chapter_code();
      async function lambda5() {
        let destination = g_sermon_generate_upload_path(chapter_code);
        let o = await firebase_storage_download_json(destination);
        return o;
      }
      let s = await global_function_property_nested_lambda(
        app_g_gospel,
        "sermons",
        chapter_code,
        lambda5,
      );
      let container = app_g_container(overlay);
      app_g_p_text(
        container,
        emoji_pray() +
          " You remember that you have not prayed, yet, before your next conversation!",
      );
      let v = list_remove_first(review);
      let v2 = json_format_to({
        v,
        s,
      });
      alert(v2);
    } else {
      app_g_conversation(
        prayer,
        npcs_matched,
        overlay,
        player,
        game_prefix,
        overlay_close,
      );
    }
  }
}
