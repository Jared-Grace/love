import { app_g_study_lambda_lambda5 } from "./app_g_study_lambda_lambda5.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_menu_clear_back } from "./app_g_menu_clear_back.mjs";
import { app_g_chapter_code } from "./app_g_chapter_code.mjs";
import { global_function_property_nested_lambda } from "./global_function_property_nested_lambda.mjs";
import { app_g_gospel } from "./app_g_gospel.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_property_json } from "./list_find_property_json.mjs";
import { app_g_main_books } from "./app_g_main_books.mjs";
import { app_g_passage_to_reference } from "./app_g_passage_to_reference.mjs";
import { app_g_container_text } from "./app_g_container_text.mjs";
import { html_bold_mild } from "./html_bold_mild.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_div } from "./html_div.mjs";
import { g_openai_split_property } from "./g_openai_split_property.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_g_wrong } from "./app_g_wrong.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { g_openai_split } from "./g_openai_split.mjs";
import { list_get } from "./list_get.mjs";
import { list_index_last_is } from "./list_index_last_is.mjs";
import { list_remove } from "./list_remove.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_player_save } from "./app_g_player_save.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_g_button_wrong } from "./app_g_button_wrong.mjs";
import { invoke_multiple_shuffle_2 } from "./invoke_multiple_shuffle_2.mjs";
export async function app_g_study_lambda(overlay, player, review, close) {
  arguments_assert(arguments, 4);
  app_g_menu_clear_back(overlay, player);
  let chapter_code = app_g_chapter_code();
  async function lambda5() {
    let r3 = await app_g_study_lambda_lambda5(chapter_code);
    return r3;
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
  let sermon_correct_list = g_openai_split_property(passage, property);
  let sermon_index = 0;
  let mistakes = false;
  refresh();
  function refresh() {
    html_clear(div);
    let v = app_g_wrong(passage, passages, property);
    let sermon_wrong = property_path_get_2(v, "passage_wrong", property);
    let sermon_wrong_list = g_openai_split(sermon_wrong);
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
