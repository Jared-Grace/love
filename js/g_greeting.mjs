import { g_random_dot_bang } from "./g_random_dot_bang.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_greeting(met, name_player) {
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
  if (not(met)) {
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
  let npc_says = text_combine_multiple([
    v,
    " ",
    name_player,
    g_random_dot_bang(),
    meet_message,
  ]);
  return npc_says;
}
