import { firebase_storage_download_json_jg_decompress } from "./firebase_storage_download_json_jg_decompress.mjs";
import { app_g_button_wrong } from "./app_g_button_wrong.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_player_save } from "./app_g_player_save.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_first } from "./list_first.mjs";
import { list_index_last_is } from "./list_index_last_is.mjs";
import { html_bold_mild } from "./html_bold_mild.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { app_g_openai_split } from "./app_g_openai_split.mjs";
import { invoke_multiple_shuffle_2 } from "./invoke_multiple_shuffle_2.mjs";
import { app_g_button_uncolored } from "./app_g_button_uncolored.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_wrong } from "./app_g_wrong.mjs";
import { app_g_passage_to_reference } from "./app_g_passage_to_reference.mjs";
import { app_g_main_books } from "./app_g_main_books.mjs";
import { app_g_container_text } from "./app_g_container_text.mjs";
import { list_find_property_json } from "./list_find_property_json.mjs";
import { app_g_gospel } from "./app_g_gospel.mjs";
import { global_function_property_nested_lambda } from "./global_function_property_nested_lambda.mjs";
import { g_sermon_generate_upload_path } from "./g_sermon_generate_upload_path.mjs";
import { app_g_chapter_code } from "./app_g_chapter_code.mjs";
import { app_g_menu_clear_back } from "./app_g_menu_clear_back.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_study(player, overlay, close) {
  let review = property_get(player, "review");
  let has_review = list_empty_not_is(review);
  if (has_review) {
    let text2 = text_combine(emoji_book_open(), " Study");
    async function lambda() {
      app_g_menu_clear_back(overlay, player);
      let chapter_code = app_g_chapter_code();
      async function lambda5() {
        let destination = g_sermon_generate_upload_path(chapter_code);
        let o = await firebase_storage_download_json_jg_decompress(destination);
        return o;
      }
      let sermons = await global_function_property_nested_lambda(
        app_g_gospel,
        "sermons",
        chapter_code,
        lambda5,
      );
      let r = list_first(review);
      let verse_numbers = property_get(r, "verse_numbers");
      let passages = property_get(sermons, "passages");
      let passage = list_find_property_json(
        passages,
        "verse_numbers",
        verse_numbers,
      );
      let books = app_g_main_books();
      let text = app_g_passage_to_reference(passage, chapter_code, books);
      let c = app_g_container_text(overlay, text);
      html_bold_mild(c);
      html_style_background_color_set(c, "#ffffffcd");
      app_g_container_text(
        overlay,
        "If you were preaching from this Bible passage, what would you say?",
      );
      let div = html_div(overlay);
      let property = "sermon";
      let sermon_correct = property_get(passage, property);
      let sermon_correct_list = app_g_openai_split(sermon_correct);
      let sermon_index = 0;
      let mistakes = false;
      refresh();
      function refresh() {
        html_clear(div);
        let v = app_g_wrong(passage, passages, property);
        let passage_wrong = property_get(v, "passage_wrong");
        let sermon_wrong = property_get(passage_wrong, property);
        let sermon_wrong_list = app_g_openai_split(sermon_wrong);
        function correct() {
          let item = list_get(sermon_correct_list, sermon_index);
          async function lambda3() {
            sermon_index++;
            let li = list_index_last_is(sermon_correct_list, sermon_index);
            if (li) {
              if (mistakes) {
                sermon_index = 0;
                mistakes = false;
                refresh();
              } else {
                list_remove(review, r);
                property_set(player, "studied", true);
                await app_g_player_save(player);
                close();
              }
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
            mistakes = true;
            app_g_button_wrong(b);
          }
        }
        invoke_multiple_shuffle_2(correct, wrong);
      }
    }
    app_g_button_uncolored(overlay, text2, lambda);
  }
}
