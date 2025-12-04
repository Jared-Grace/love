import { string_random_or_empty } from "../../../love/public/src/string_random_or_empty.mjs";
import { list_map_combine } from "../../../love/public/src/list_map_combine.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { lambda_invoke_multiple } from "../../../love/public/src/lambda_invoke_multiple.mjs";
import { app_g_bible_passage_button } from "../../../love/public/src/app_g_bible_passage_button.mjs";
import { subtract_1 } from "../../../love/public/src/subtract_1.mjs";
import { object_property_change } from "../../../love/public/src/object_property_change.mjs";
import { app_g_container_text } from "../../../love/public/src/app_g_container_text.mjs";
import { app_g_npc_says } from "../../../love/public/src/app_g_npc_says.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { integer_random_0 } from "../../../love/public/src/integer_random_0.mjs";
import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_intersect } from "../../../love/public/src/list_intersect.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
import { newline_windows_escaped } from "../../../love/public/src/newline_windows_escaped.mjs";
import { string_to_words } from "../../../love/public/src/string_to_words.mjs";
import { g_objection_generate_property } from "../../../love/public/src/g_objection_generate_property.mjs";
import { list_index_last_second } from "../../../love/public/src/list_index_last_second.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { global_function_property_async } from "../../../love/public/src/global_function_property_async.mjs";
import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
import { g_objection_generate_upload_path } from "../../../love/public/src/g_objection_generate_upload_path.mjs";
import { app_g_conversation } from "../../../love/public/src/app_g_conversation.mjs";
import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
import { positive_is } from "../../../love/public/src/positive_is.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { integer_random } from "./integer_random.mjs";
export async function app_g_gospel(overlay, npc, game_prefix) {
  marker("1");
  html_clear(overlay);
  let p = positive_is(objections);
  if (p) {
    let books = global_function_property_get(app_g_main, "books");
    let chapter_code = global_function_property_get(
      app_g_conversation,
      "chapter_code",
    );
    async function lambda5() {
      let destination = g_objection_generate_upload_path(chapter_code);
      let o = await firebase_storage_download_json(destination);
      return o;
    }
    let o = await global_function_property_async(
      app_g_conversation,
      "objections",
      lambda5,
    );
    let passages = object_property_get(o, "passages");
    list_shuffle(passages);
    let passage = list_last(passages);
    const last_second = list_index_last_second(passages);
    let o2 = g_objection_generate_property();
    let text = object_property_get(passage, "text");
    let words = string_to_words(text);
    let objections = object_property_get(passage, o2);
    let separator = newline_windows_escaped();
    let split = string_split(objections, separator);
    let ob = list_random_item(split);
    let words2 = string_to_words(ob);
    let concated = list_concat(words, words2);
    let unique = list_unique(concated);
    function lambda2(p) {
      let text2 = object_property_get(p, "text");
      let words3 = string_to_words(text2);
      let list2 = list_intersect(words3, unique);
      let size = list_size(list2);
      return size;
    }
    list_sort_number_mapper(passages, lambda2);
    let r6 = integer_random_0(1);
    let item = list_get(passages, r6);
    app_g_npc_says(npc, overlay, game_prefix, ob);
    app_g_container_text(overlay, "What would you like to say?");
    let choices = [
      function correct() {
        async function lambda() {
          object_property_change(npc, "objections", subtract_1);
          await app_g_gospel(overlay, npc, game_prefix);
        }
        app_g_bible_passage_button(
          passage,
          chapter_code,
          books,
          overlay,
          lambda,
        );
      },
      function wrong() {
        function lambda3() {
          alert("wrong");
        }
        app_g_bible_passage_button(item, chapter_code, books, overlay, lambda3);
      },
    ];
    list_shuffle(choices);
    lambda_invoke_multiple(choices);
  } else {
    const choices = [
      "Thank you" +
        string_random_or_empty(
          " very much" + string_random_or_empty(" from the bottom of my heart"),
        ),
      "Glory to God" + string_random_or_empty(" in the highest"),
      "Praise God",
      "Hallelujah",
      "Amen",
      "I believe",
      "God bless you amen",
    ];
    let combineds = list_map_combine(right, list);
    list_shuffle(combineds);
    let r = integer_random(min, max);
    const doxology = choices;
    app_g_npc_says(npc, overlay, game_prefix, doxology);
  }
}
