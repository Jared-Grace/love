import { app_g_passage_to_reference } from "../../../love/public/src/app_g_passage_to_reference.mjs";
import { app_g_main_books } from "../../../love/public/src/app_g_main_books.mjs";
import { app_g_container_text } from "../../../love/public/src/app_g_container_text.mjs";
import { list_remove_first } from "../../../love/public/src/list_remove_first.mjs";
import { app_g_gospel } from "../../../love/public/src/app_g_gospel.mjs";
import { global_function_property_nested_lambda } from "../../../love/public/src/global_function_property_nested_lambda.mjs";
import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
import { g_sermon_generate_upload_path } from "../../../love/public/src/g_sermon_generate_upload_path.mjs";
import { app_g_chapter_code } from "../../../love/public/src/app_g_chapter_code.mjs";
import { app_g_menu_clear_back } from "../../../love/public/src/app_g_menu_clear_back.mjs";
import { emoji_book_open } from "../../../love/public/src/emoji_book_open.mjs";
import { app_g_button_green } from "../../../love/public/src/app_g_button_green.mjs";
import { app_g_button_uncolored } from "../../../love/public/src/app_g_button_uncolored.mjs";
import { app_g_button_back } from "../../../love/public/src/app_g_button_back.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_g_player_save } from "../../../love/public/src/app_g_player_save.mjs";
import { emoji_bow } from "../../../love/public/src/emoji_bow.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
export function app_g_menu(overlay, player) {
  html_clear(overlay);
  function close() {
    html_remove(overlay);
  }
  let component2 = app_g_button_back(overlay, close);
  let text = emoji_pray() + " Pray";
  function lambda7() {
    app_g_menu_clear_back(overlay, player);
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
  let text2 = emoji_book_open() + " Study";
  async function lambda() {
    app_g_menu_clear_back(overlay, player);
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
    let r = list_remove_first(review);
    let passages = object_property_get(s, "passages");
    let text2 = object_property_get(s, "text");
    app_g_container_text(overlay, text2);
    let books = app_g_main_books();
    const text = app_g_passage_to_reference(s, chapter_code, books);
    app_g_container_text(overlay, text);
    app_g_container_text(
      overlay,
      "What would you like to say about this Bible passage?",
    );
  }
  app_g_button_uncolored(overlay, text2, lambda);
}
