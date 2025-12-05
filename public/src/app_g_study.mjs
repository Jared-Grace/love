import { lambda_invoke_multiple_shuffle_2 } from "../../../love/public/src/lambda_invoke_multiple_shuffle_2.mjs";
import { app_g_button_uncolored } from "../../../love/public/src/app_g_button_uncolored.mjs";
import { app_g_button_green } from "../../../love/public/src/app_g_button_green.mjs";
import { app_g_wrong } from "../../../love/public/src/app_g_wrong.mjs";
import { app_g_passage_to_reference } from "../../../love/public/src/app_g_passage_to_reference.mjs";
import { app_g_main_books } from "../../../love/public/src/app_g_main_books.mjs";
import { app_g_container_text } from "../../../love/public/src/app_g_container_text.mjs";
import { list_find_property_json } from "../../../love/public/src/list_find_property_json.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_remove_first } from "../../../love/public/src/list_remove_first.mjs";
import { app_g_gospel } from "../../../love/public/src/app_g_gospel.mjs";
import { global_function_property_nested_lambda } from "../../../love/public/src/global_function_property_nested_lambda.mjs";
import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
import { g_sermon_generate_upload_path } from "../../../love/public/src/g_sermon_generate_upload_path.mjs";
import { app_g_chapter_code } from "../../../love/public/src/app_g_chapter_code.mjs";
import { app_g_menu_clear_back } from "../../../love/public/src/app_g_menu_clear_back.mjs";
import { emoji_book_open } from "../../../love/public/src/emoji_book_open.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_g_study(player, overlay) {
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
      let passage = list_find_property_json(
        passages,
        "verse_numbers",
        verse_numbers,
      );
      let text3 = object_property_get(passage, "text");
      app_g_container_text(overlay, text3);
      let books = app_g_main_books();
      const text = app_g_passage_to_reference(passage, chapter_code, books);
      app_g_container_text(overlay, text);
      app_g_container_text(
        overlay,
        "What would you like to say about this Bible passage?",
      );
      const property = "sermon";
      let { passage_wrong } = app_g_wrong(passage, passages, property);
      let sermon_correct = object_property_get(passage, property);
      function correct() {
        function lambda3() {}
        let b = app_g_button_green(overlay, text4, lambda3);
      }
      function wrong() {
        let sermon_wrong = object_property_get(passage_wrong, property);
      }
      lambda_invoke_multiple_shuffle_2(correct, wrong);
    }
    app_g_button_uncolored(overlay, text2, lambda);
  }
}
