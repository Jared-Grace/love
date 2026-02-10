import { app_g_button_conversation_end } from "../../../love/public/src/app_g_button_conversation_end.mjs";
import { app_g_gospel } from "../../../love/public/src/app_g_gospel.mjs";
import { app_g_container_text } from "../../../love/public/src/app_g_container_text.mjs";
import { app_g_npc_says } from "../../../love/public/src/app_g_npc_says.mjs";
import { app_g_button_green } from "../../../love/public/src/app_g_button_green.mjs";
import { g_random_dot_bang } from "../../../love/public/src/g_random_dot_bang.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { text_random_or_empty } from "../../../love/public/src/text_random_or_empty.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
export function app_g_conversation(
  prayer,
  npcs_matched,
  overlay,
  player,
  game_prefix,
  overlay_close,
  div_map,
  refresh,
) {
  object_property_set(player, "conversed", true);
  object_property_set(prayer, "conversation", false);
  let npc = list_single(npcs_matched);
  const greet = list_random_item(["hi", "hello", "greetings", "hey"]);
  let v = text_first_upper_to(greet);
  let s2 = list_random_item(["nice", "great", "good"]);
  const a = list_random_item(["it's", "it is"]) + " ";
  let meet_message =
    " " + text_first_upper_to(text_random_or_empty(a) + s2 + " to ");
  let meet = property_get(npc, "meet");
  if (not(meet)) {
    object_property_set(npc, "meet", true);
    meet_message += "meet you" + g_random_dot_bang();
  } else {
    meet_message +=
      list_random_item(["see", "talk to", "hear from"]) +
      " you" +
      text_random_or_empty(", again") +
      g_random_dot_bang() +
      " " +
      "What " +
      list_random_item([
        "do you " +
          list_random_item(["want", "wish"]) +
          " to " +
          list_random_item(["talk about", "discuss"]) +
          text_random_or_empty(" today") +
          text_random_or_empty(" with me"),
        "is on your " + list_random_item(["mind", "heart"]),
      ]) +
      "?";
  }
  let name_player = property_get(player, "name");
  const npc_says = v + " " + name_player + g_random_dot_bang() + meet_message;
  app_g_npc_says(npc, overlay, game_prefix, npc_says);
  async function npc_gospel() {
    await app_g_gospel(
      overlay,
      npc,
      game_prefix,
      overlay_close,
      player,
      div_map,
      refresh,
    );
  }
  app_g_container_text(overlay, "What would you like to do?");
  let name_npc2 = property_get(npc, "name");
  let christian = property_get(npc, "christian");
  if (not(christian)) {
    app_g_button_green(
      overlay,
      "Tell " +
        name_npc2 +
        " that Jesus died, was buried and rose to life and share the gospel!",
      npc_gospel,
    );
  }
  app_g_button_conversation_end(overlay, overlay_close);
}
