import { positive_is } from "../../../love/public/src/positive_is.mjs";
import { subtract_1 } from "../../../love/public/src/subtract_1.mjs";
import { object_property_change } from "../../../love/public/src/object_property_change.mjs";
import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_intersect } from "../../../love/public/src/list_intersect.mjs";
import { string_to_words } from "../../../love/public/src/string_to_words.mjs";
import { lambda_invoke_multiple } from "../../../love/public/src/lambda_invoke_multiple.mjs";
import { global_function_property_async } from "../../../love/public/src/global_function_property_async.mjs";
import { app_g_bible_passage_button } from "../../../love/public/src/app_g_bible_passage_button.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_index_last_second } from "../../../love/public/src/list_index_last_second.mjs";
import { integer_random_0 } from "../../../love/public/src/integer_random_0.mjs";
import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
import { app_g_container_text } from "../../../love/public/src/app_g_container_text.mjs";
import { app_g_npc_says } from "../../../love/public/src/app_g_npc_says.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
import { newline_windows_escaped } from "../../../love/public/src/newline_windows_escaped.mjs";
import { g_objection_generate_property } from "../../../love/public/src/g_objection_generate_property.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
import { g_objection_generate_upload_path } from "../../../love/public/src/g_objection_generate_upload_path.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { emoji_wave } from "../../../love/public/src/emoji_wave.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { app_g_button_green } from "../../../love/public/src/app_g_button_green.mjs";
import { g_random_dot_bang } from "../../../love/public/src/g_random_dot_bang.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { string_random_or_empty } from "../../../love/public/src/string_random_or_empty.mjs";
import { string_first_upper_to } from "../../../love/public/src/string_first_upper_to.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_g_conversation(
  prayer,
  npcs_matched,
  overlay,
  player,
  game_prefix,
  overlay_close,
) {
  marker("1");
  object_property_set(player, "conversed", true);
  object_property_set(prayer, "conversation", false);
  let npc = list_single(npcs_matched);
  const greet = list_random_item(["hi", "hello", "greetings", "hey"]);
  let v = string_first_upper_to(greet);
  let s2 = list_random_item(["nice", "great", "pleasure", "good"]);
  const a = list_random_item(["it's", "it is"]) + " ";
  let meet_message =
    " " + string_first_upper_to(string_random_or_empty(a) + s2 + " to ");
  let meet = object_property_get(npc, "meet");
  if (not(meet)) {
    object_property_set(npc, "meet", true);
    meet_message += "meet you";
  } else {
    ((meet_message +=
      list_random_item(["see", "talk to", "hear from you"]) +
      " you" +
      string_random_or_empty(", again") +
      g_random_dot_bang() +
      " " +
      "What "),
      list_random_item([
        "do you " +
          list_random_item(["want", "wish"]) +
          " to " +
          list_random_item(["talk about", "discuss"]) +
          string_random_or_empty(" today") +
          string_random_or_empty(" with me"),
        "is on your " + list_random_item(["mind", "heart"]),
      ]) + "?");
  }
  meet_message += g_random_dot_bang();
  let name_player = object_property_get(player, "name");
  const npc_says = v + " " + name_player + g_random_dot_bang() + meet_message;
  app_g_npc_says(npc, overlay, game_prefix, npc_says);
  async function npc_gospel() {
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
          function lambda() {
            object_property_change(npc, "objections", subtract_1);
            npc_gospel();
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
          app_g_bible_passage_button(
            item,
            chapter_code,
            books,
            overlay,
            lambda3,
          );
        },
      ];
      list_shuffle(choices);
      lambda_invoke_multiple(choices);
    } else {
    }
  }
  app_g_container_text(overlay, "What would you like to do?");
  let name_npc2 = object_property_get(npc, "name");
  let christian = object_property_get(npc, "christian");
  if (not(christian)) {
    app_g_button_green(
      overlay,
      "Tell " +
        name_npc2 +
        " that Jesus died, was buried and rose to life and share the gospel!",
      npc_gospel,
    );
  }
  app_g_button_green(
    overlay,
    emoji_pray() +
      emoji_wave() +
      " Pray and then politely end the conversation",
    overlay_close,
  );
}
