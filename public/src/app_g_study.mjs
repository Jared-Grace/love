import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { app_g_player_save } from "../../../love/public/src/app_g_player_save.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_index_last_is } from "../../../love/public/src/list_index_last_is.mjs";
import { html_bold } from "../../../love/public/src/html_bold.mjs";
import { html_border_invalid_color } from "../../../love/public/src/html_border_invalid_color.mjs";
import { html_style_background_color } from "../../../love/public/src/html_style_background_color.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { app_g_openai_split } from "../../../love/public/src/app_g_openai_split.mjs";
import { lambda_invoke_multiple_shuffle_2 } from "../../../love/public/src/lambda_invoke_multiple_shuffle_2.mjs";
import { app_g_button_uncolored } from "../../../love/public/src/app_g_button_uncolored.mjs";
import { app_g_button_green } from "../../../love/public/src/app_g_button_green.mjs";
import { app_g_wrong } from "../../../love/public/src/app_g_wrong.mjs";
import { app_g_passage_to_reference } from "../../../love/public/src/app_g_passage_to_reference.mjs";
import { app_g_main_books } from "../../../love/public/src/app_g_main_books.mjs";
import { app_g_container_text } from "../../../love/public/src/app_g_container_text.mjs";
import { list_find_property_json } from "../../../love/public/src/list_find_property_json.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_g_gospel } from "../../../love/public/src/app_g_gospel.mjs";
import { global_function_property_nested_lambda } from "../../../love/public/src/global_function_property_nested_lambda.mjs";
import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
import { g_sermon_generate_upload_path } from "../../../love/public/src/g_sermon_generate_upload_path.mjs";
import { app_g_chapter_code } from "../../../love/public/src/app_g_chapter_code.mjs";
import { app_g_menu_clear_back } from "../../../love/public/src/app_g_menu_clear_back.mjs";
import { emoji_book_open } from "../../../love/public/src/emoji_book_open.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { string_take } from "../../../love/public/src/string_take.mjs";
export function app_g_study(player, overlay, close) {
  marker("1");
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
      let r = list_first(review);
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
      let books = app_g_main_books();
      const text = app_g_passage_to_reference(passage, chapter_code, books);
      let c = app_g_container_text(overlay, text);
      html_bold(c);
      html_style_background_color(c, "#ffffffcd");
      app_g_container_text(
        overlay,
        "If you were preaching from this Bible passage, what would you say?",
      );
      let div = html_div(overlay);
      const property = "sermon";
      let sermon_correct = object_property_get(passage, property);
      let sermon_correct_list = app_g_openai_split(sermon_correct);
      let sermon_index = 0;
      refresh();
      function refresh() {
        html_clear(div);
        let { passage_wrong } = app_g_wrong(passage, passages, property);
        let sermon_wrong = object_property_get(passage_wrong, property);
        let sermon_wrong_list = app_g_openai_split(sermon_wrong);
        function correct() {
          let item = list_get(sermon_correct_list, sermon_index);
          function lambda3() {
            sermon_index++;
            let li = list_index_last_is(sermon_correct_list, sermon_index);
            if (li) {
              list_remove(review, r);
              object_property_set(player, "studied", false);
              app_g_player_save(player);
              close();
            } else {
              refresh();
            }
          }
          let b = app_g_button_green(div, item, lambda3);
        }
        function wrong() {
          let r2 = list_random_item(sermon_wrong_list);
          let b = app_g_button_green(div, r2, lambda3);
          function lambda3() {
            let v = html_border_invalid_color();
            let t = string_take(v, 7) + "cd";
            html_style_background_color(b, t);
          }
        }
        lambda_invoke_multiple_shuffle_2(correct, wrong);
      }
    }
    app_g_button_uncolored(overlay, text2, lambda);
  }
}
