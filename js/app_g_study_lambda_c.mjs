import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_menu_clear_back } from "./app_g_menu_clear_back.mjs";
import { app_g_chapter_code } from "./app_g_chapter_code.mjs";
import { app_g_study_lambda_lambda5 } from "./app_g_study_lambda_lambda5.mjs";
import { global_function_property_nested_lambda } from "./global_function_property_nested_lambda.mjs";
import { app_g_gospel } from "./app_g_gospel.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_property_json } from "./list_find_property_json.mjs";
import { app_g_main_books } from "./app_g_main_books.mjs";
import { app_g_passage_to_reference } from "./app_g_passage_to_reference.mjs";
import { app_g_container_text } from "./app_g_container_text.mjs";
export async function app_g_study_lambda_c(overlay, player, review) {
  arguments_assert(arguments, 3);
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
  let r2 = {
    r,
    passages,
    passage,
    c,
  };
  return r2;
}
