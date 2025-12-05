import { log } from "../../../love/public/src/log.mjs";
import { list_find_property_json } from "../../../love/public/src/list_find_property_json.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
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
  let review = object_property_get(player, "review");
  let ne = list_empty_not_is(review);
  if (ne) {
    let text2 = emoji_book_open() + " Study";
    async function lambda() {
      app_g_menu_clear_back(overlay, player);
      let chapter_code = app_g_chapter_code();
      async function lambda5() {
        let destination = g_sermon_generate_upload_path(chapter_code);
        let o = await firebase_storage_download_json(destination);
        return o;
      }
      let sermons = await global_function_property_nested_lambda(
        app_g_gospel,
        "sermons",
        chapter_code,
        lambda5,
      );
      let r = list_remove_first(review);
      let verse_numbers = object_property_get(r, "verse_numbers");
      let passages = object_property_get(sermons, "passages");
      log({
        verse_numbers,
        passages,
      });
      let s = list_find_property_json(passages, "verse_numbers", verse_numbers);
      let text3 = object_property_get(s, "text");
      app_g_container_text(overlay, text3);
      let books = app_g_main_books();
      const text = app_g_passage_to_reference(s, chapter_code, books);
      app_g_container_text(overlay, text);
      app_g_container_text(
        overlay,
        "What would you like to say about this Bible passage?",
      );
      function lambda3() {}
      let b = app_g_button_green(overlay2, text4, lambda3);
    }
    app_g_button_uncolored(overlay, text2, lambda);
  }
}
