import { firebase_storage_download_json_jg } from "./firebase_storage_download_json_jg.mjs";
import { property_set } from "./property_set.mjs";
import { invoke_once } from "./invoke_once.mjs";
import { app_g_button_wrong } from "./app_g_button_wrong.mjs";
import { app_g_doxology } from "./app_g_doxology.mjs";
import { g_objection_generate_property } from "./g_objection_generate_property.mjs";
import { app_g_wrong } from "./app_g_wrong.mjs";
import { app_g_main_books } from "./app_g_main_books.mjs";
import { app_g_chapter_code } from "./app_g_chapter_code.mjs";
import { global_function_property_nested_lambda } from "./global_function_property_nested_lambda.mjs";
import { list_add } from "./list_add.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
import { app_g_bible_passage_button } from "./app_g_bible_passage_button.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { property_transform } from "./property_transform.mjs";
import { app_g_turn_quiz } from "./app_g_turn_quiz.mjs";
import { app_g_discern_prevent } from "./app_g_discern_prevent.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { list_last } from "./list_last.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { property_get } from "./property_get.mjs";
import { g_objection_generate_upload_path } from "./g_objection_generate_upload_path.mjs";
import { positive_is } from "./positive_is.mjs";
import { html_clear } from "./html_clear.mjs";
import { g_icon_cross } from "./g_icon_cross.mjs";
export async function app_g_gospel(
  overlay,
  npc,
  overlay_close,
  player,
  div_map,
) {
  html_clear(overlay);
  let objections = property_get(npc, "objections");
  let p = positive_is(objections);
  if (p) {
    let books = app_g_main_books();
    let chapter_code = app_g_chapter_code();
    async function lambda5() {
      let destination = g_objection_generate_upload_path(chapter_code);
      let o = await firebase_storage_download_json_jg(destination);
      return o;
    }
    let o = await global_function_property_nested_lambda(
      app_g_gospel,
      "objections",
      chapter_code,
      lambda5,
    );
    let passages = property_get(o, "passages");
    list_shuffle(passages);
    let passage = list_last(passages);
    let ob = app_g_objection_random(passage);
    let verse_wrong = list_random_item(g_verses_off_topic());
    let discern = { prayed: false };
    function build_correct(container) {
      async function lambda() {
        property_transform(npc, "objections", subtract_1);
        await app_g_gospel(
          overlay,
          npc,
          overlay_close,
          player,
          div_map,
        );
      }
      return app_g_bible_passage_button(
        passage,
        chapter_code,
        books,
        container,
        lambda,
      );
    }
    function build_wrong(container) {
      let lambda2 = invoke_once(lambda3);
      function on_wrong() {
        if (app_g_discern_prevent(discern)) {
          return;
        }
        lambda2();
      }
      let reference = property_get(verse_wrong, "reference");
      let verse_text = property_get(verse_wrong, "text");
      let b = app_g_bible_passage_button_direct(
        reference,
        verse_text,
        container,
        on_wrong,
      );
      function lambda3() {
        app_g_button_wrong(b);
        let review = property_get(player, "review");
        let verse_numbers = property_get(passage, "verse_numbers");
        list_add(review, {
          chapter_code,
          verse_numbers,
        });
      }
      return b;
    }
    app_g_turn_quiz(
      overlay,
      npc,
      ob,
      "What would you like to say?",
      build_correct,
      build_wrong,
      discern,
    );
    function on_end() {
      if (app_g_discern_prevent(discern)) {
        return;
      }
      overlay_close();
    }
    app_g_button_conversation_end(overlay, on_end);
  } else {
    let doxology = app_g_doxology();
    app_g_npc_says(npc, overlay, doxology);
    function lambda4() {
      overlay_close();
      g_icon_cross(div_map, npc);
    }
    app_g_button_conversation_end(overlay, lambda4);
    property_set(npc, "christian", true);
  }
}
