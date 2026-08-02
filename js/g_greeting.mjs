import { g_time_greeting } from "./g_time_greeting.mjs";
import { g_random_dot_bang } from "./g_random_dot_bang.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_greeting(met, name_player, time) {
  ("what an NPC says when a conversation opens. the opening word is usually one of the plain four, but SOMETIMES it is the greeting for the time of day the sky is showing (",
    g_time_greeting.name,
    ") — so an NPC greeted at dusk can say good evening, and the words agree with the light on the map. one option among five, because a time greeting every single time would read as a clock rather than as a person");
  let time_greeting = g_time_greeting(time);
  let greet = list_random_item([
    "hi",
    "hello",
    "greetings",
    "hey",
    time_greeting,
  ]);
  let v = text_first_upper_to(greet);
  let s = list_random_item(["nice", "great", "good"]);
  let left = list_random_item(["it's", "it is"]);
  let a = text_combine(left, " ");
  let r = text_random_or_empty(a);
  let s2 = text_combine_multiple([r, s, " to "]);
  let right = text_first_upper_to(s2);
  let meet_message = text_combine(" ", right);
  if (not(met)) {
    let right2 = g_random_dot_bang();
    meet_message += text_combine("meet you", right2);
  } else {
    let r2 = list_random_item(["see", "talk to", "hear from"]);
    let r3 = text_random_or_empty(", again");
    let r4 = g_random_dot_bang();
    let r5 = list_random_item(["want", "wish"]);
    let r6 = list_random_item(["talk about", "discuss"]);
    let r7 = text_random_or_empty(" today");
    let r8 = text_random_or_empty(" with me");
    let combined = text_combine_multiple(["do you ", r5, " to ", r6, r7, r8]);
    let right3 = list_random_item(["mind", "heart"]);
    let combined2 = text_combine("is on your ", right3);
    let r9 = list_random_item([combined, combined2]);
    meet_message += text_combine_multiple([
      r2,
      " you",
      r3,
      r4,
      " ",
      "What ",
      r9,
      "?",
    ]);
  }
  let r10 = g_random_dot_bang();
  let npc_says = text_combine_multiple([
    v,
    " ",
    name_player,
    r10,
    meet_message,
  ]);
  return npc_says;
}
