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
export function app_g_conversation(prayer, npcs_matched, overlay, player) {
  function overlay_close() {
    html_remove(overlay);
  }
  object_property_set(player, "conversed", true);
  object_property_set(prayer, "conversation", false);
  let npc = list_single(npcs_matched);
  let name_npc = object_property_get(npc, "name");
  let gender = object_property_get(npc, "gender");
  let container = app_g_container(overlay);
  let map = {
    [g_gender_male()]: "#80a0ff",
  };
  html_style_assign(container, {
    "background-color": color_male + "bc",
  });
  let name_player = object_property_get(player, "name");
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
  function lambda2() {
    html_clear(overlay);
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
