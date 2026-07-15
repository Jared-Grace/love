import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
import { app_g_gospel } from "./app_g_gospel.mjs";
import { app_g_container_text } from "./app_g_container_text.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { g_random_dot_bang } from "./g_random_dot_bang.mjs";
import { not } from "./not.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_g_conversation(
  prayer,
  npc,
  overlay,
  overlay_close,
  div_map,
) {
  let player = await app_g_player_get();
  property_set(player, "conversed", true);
  property_set(prayer, "conversation", false);
  let greet = list_random_item(["hi", "hello", "greetings", "hey"]);
  let v = text_first_upper_to(greet);
  let s = list_random_item(["nice", "great", "good"]);
  let a = text_combine(list_random_item(["it's", "it is"]), " ");
  let meet_message = text_combine(
    " ",
    text_first_upper_to(
      text_combine_multiple([text_random_or_empty(a), s, " to "]),
    ),
  );
  let meet = property_get(npc, "meet");
  if (not(meet)) {
    property_set(npc, "meet", true);
    meet_message += text_combine("meet you", g_random_dot_bang());
  } else {
    meet_message += text_combine_multiple([
      list_random_item(["see", "talk to", "hear from"]),
      " you",
      text_random_or_empty(", again"),
      g_random_dot_bang(),
      " ",
      "What ",
      list_random_item([
        text_combine_multiple([
          "do you ",
          list_random_item(["want", "wish"]),
          " to ",
          list_random_item(["talk about", "discuss"]),
          text_random_or_empty(" today"),
          text_random_or_empty(" with me"),
        ]),
        text_combine("is on your ", list_random_item(["mind", "heart"])),
      ]),
      "?",
    ]);
  }
  let name_player = property_get(player, "name");
  let npc_says = text_combine_multiple([
    v,
    " ",
    name_player,
    g_random_dot_bang(),
    meet_message,
  ]);
  app_g_npc_says(npc, overlay, npc_says);
  async function npc_gospel() {
    await app_g_gospel(overlay, npc, overlay_close, player, div_map);
  }
  app_g_container_text(overlay, "What would you like to do?");
  let name_npc = property_get(npc, "name");
  let christian = property_get(npc, "christian");
  if (not(christian)) {
    app_g_button_green(
      overlay,
      text_combine_multiple([
        "Tell ",
        name_npc,
        " that Jesus died, was buried and rose to life and share the gospel!",
      ]),
      npc_gospel,
    );
  }
  app_g_button_conversation_end(overlay, overlay_close);
}
