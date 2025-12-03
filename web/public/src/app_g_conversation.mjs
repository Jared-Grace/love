import { log } from "../../../love/public/src/log.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
import { newline_windows_escaped } from "../../../love/public/src/newline_windows_escaped.mjs";
import { g_objection_generate_property } from "../../../love/public/src/g_objection_generate_property.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
import { g_objection_generate_upload_path } from "../../../love/public/src/g_objection_generate_upload_path.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_img } from "../../../love/public/src/html_img.mjs";
import { g_character_img_url } from "../../../love/public/src/g_character_img_url.mjs";
import { g_gender_female } from "../../../love/public/src/g_gender_female.mjs";
import { g_gender_male } from "../../../love/public/src/g_gender_male.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { emoji_wave } from "../../../love/public/src/emoji_wave.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { app_g_button_green } from "../../../love/public/src/app_g_button_green.mjs";
import { app_g_p_text } from "../../../love/public/src/app_g_p_text.mjs";
import { g_random_dot_bang } from "../../../love/public/src/g_random_dot_bang.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { string_random_or_empty } from "../../../love/public/src/string_random_or_empty.mjs";
import { string_first_upper_to } from "../../../love/public/src/string_first_upper_to.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { app_g_container } from "../../../love/public/src/app_g_container.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
export async function app_g_conversation(
  prayer,
  npcs_matched,
  overlay,
  player,
  game_prefix,
) {
  marker("1");
  function overlay_close() {
    html_remove(overlay);
  }
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
  let name_npc = object_property_get(npc, "name");
  let gender = object_property_get(npc, "gender");
  let container = app_g_container(overlay);
  let map = {
    [g_gender_female()]: "#ff80ea",
    [g_gender_male()]: "#acc1ff",
  };
  let color_background = object_property_get(map, gender);
  html_style_assign(container, {
    "background-color": color_background + "bc",
  });
  const c_src = g_character_img_url(npc, game_prefix);
  let component = html_img(container, c_src);
  let name_player = object_property_get(player, "name");
  app_g_p_text(
    container,
    name_npc +
      " says: " +
      v +
      " " +
      name_player +
      g_random_dot_bang() +
      meet_message,
  );
  async function lambda2() {
    html_clear(overlay);
    let destination = g_objection_generate_upload_path("JAS01");
    let o = await firebase_storage_download_json(destination);
    let passages = object_property_get(o, "passages");
    list_shuffle(passages);
    let passage = list_last(passages);
    let o2 = g_objection_generate_property();
    let objections = object_property_get(passage, o2);
    let text2 = object_property_get(passage, "text");
    let separator = newline_windows_escaped();
    let split = string_split(objections, separator);
    let item3 = list_random_item(split);
    function lambda3() {}
    app_g_button_green(overlay, text2, lambda3);
    log(item3);
  }
  app_g_button_green(
    overlay,
    "Tell " +
      name_npc +
      " that Jesus died, was buried and rose to life and share the gospel!",
    lambda2,
  );
  app_g_button_green(
    overlay,
    emoji_pray() +
      emoji_wave() +
      " Pray and then politely end the conversation",
    overlay_close,
  );
}
