import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_greeting_words } from "./g_greeting_words.mjs";
import { g_greeting_remark } from "./g_greeting_remark.mjs";
import { property_get } from "./property_get.mjs";
import { g_random_dot_bang } from "./g_random_dot_bang.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
export function g_greeting_remark_maybe(time, christian, met) {
  arguments_assert(arguments, 3);
  ("what an NPC says when a conversation opens. the opening word is usually one of the plain four, but SOMETIMES it is the greeting for the time of day the sky is showing (",
    fn_name("g_time_greeting"),
    ") — so an NPC greeted at dusk can say good evening, and the words agree with the light on the map. one option among five, because a time greeting every single time would read as a clock rather than as a person. whether the NPC is a believer changes WHICH WORDS are on offer, never how the sentence is built: ",
    fn_name("g_greeting_words"),
    " and ",
    fn_name("g_time_remark"),
    " each add options a believer would say to the ones anyone would, so faith shows up as a person sometimes blessing you rather than as a second kind of greeting");
  let words = g_greeting_words(time, christian);
  let r = g_greeting_remark(words, met, christian, time);
  let remark = property_get(r, "remark");
  let meet_message = property_get(r, "meet_message");
  let v = property_get(r, "v");
  let r11 = g_random_dot_bang();
  let remark_sentence = text_combine_multiple([" ", remark, r11]);
  let remark_maybe = text_random_or_empty(remark_sentence);
  let r2 = {
    meet_message,
    v,
    remark_maybe,
  };
  return r2;
}
