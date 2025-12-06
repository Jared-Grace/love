import { invoke_once } from "../../../love/public/src/invoke_once.mjs";
import { app_g_button_wrong } from "../../../love/public/src/app_g_button_wrong.mjs";
import { app_g_doxology } from "../../../love/public/src/app_g_doxology.mjs";
import { lambda_invoke_multiple_shuffle_2 } from "../../../love/public/src/lambda_invoke_multiple_shuffle_2.mjs";
import { g_objection_generate_property } from "../../../love/public/src/g_objection_generate_property.mjs";
import { app_g_wrong } from "../../../love/public/src/app_g_wrong.mjs";
import { app_g_main_books } from "../../../love/public/src/app_g_main_books.mjs";
import { app_g_chapter_code } from "../../../love/public/src/app_g_chapter_code.mjs";
import { global_function_property_nested_lambda } from "../../../love/public/src/global_function_property_nested_lambda.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_g_button_conversation_end } from "../../../love/public/src/app_g_button_conversation_end.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_g_bible_passage_button } from "../../../love/public/src/app_g_bible_passage_button.mjs";
import { subtract_1 } from "../../../love/public/src/subtract_1.mjs";
import { object_property_change } from "../../../love/public/src/object_property_change.mjs";
import { app_g_container_text } from "../../../love/public/src/app_g_container_text.mjs";
import { app_g_npc_says } from "../../../love/public/src/app_g_npc_says.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
import { g_objection_generate_upload_path } from "../../../love/public/src/g_objection_generate_upload_path.mjs";
import { positive_is } from "../../../love/public/src/positive_is.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
export async function app_g_gospel(
  overlay,
  npc,
  game_prefix,
  overlay_close,
  player,
  div_map,
) {
  marker("1");
  html_clear(overlay);
  let objections2 = object_property_get(npc, "objections");
  let p = positive_is(objections2);
  if (p) {
    let books = app_g_main_books();
    let chapter_code = app_g_chapter_code();
    async function lambda5() {
      let destination = g_objection_generate_upload_path(chapter_code);
      let o = await firebase_storage_download_json(destination);
      return o;
    }
    let o = await global_function_property_nested_lambda(
      app_g_gospel,
      "objections",
      chapter_code,
      lambda5,
    );
    let passages = object_property_get(o, "passages");
    list_shuffle(passages);
    let passage = list_last(passages);
    let property = g_objection_generate_property();
    let { ob, passage_wrong } = app_g_wrong(passage, passages, property);
    app_g_npc_says(npc, overlay, game_prefix, ob);
    app_g_container_text(overlay, "What would you like to say?");
    function correct() {
      async function lambda() {
        object_property_change(npc, "objections", subtract_1);
        await app_g_gospel(
          overlay,
          npc,
          game_prefix,
          overlay_close,
          player,
          div_map,
        );
      }
      app_g_bible_passage_button(passage, chapter_code, books, overlay, lambda);
    }
    function wrong() {
      let lambda2 = invoke_once(lambda3);
      let b = app_g_bible_passage_button(
        passage_wrong,
        chapter_code,
        books,
        overlay,
        lambda2,
      );
      function lambda3() {
        app_g_button_wrong(b);
        let review = object_property_get(player, "review");
        let verse_numbers = object_property_get(passage_wrong, "verse_numbers");
        list_add(review, {
          chapter_code,
          verse_numbers,
        });
      }
    }
    lambda_invoke_multiple_shuffle_2(correct, wrong);
    app_g_button_conversation_end(overlay, overlay_close);
  } else {
    const doxology = app_g_doxology();
    app_g_npc_says(npc, overlay, game_prefix, doxology);
    app_g_button_conversation_end(overlay, overlay_close);
  }
}
