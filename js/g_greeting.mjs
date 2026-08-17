import { property_get } from "./property_get.mjs";
import { g_greeting_remark } from "./g_greeting_remark.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_greeting_words } from "./g_greeting_words.mjs";
import { g_time_sky_remark } from "./g_time_sky_remark.mjs";
import { null_is } from "./null_is.mjs";
import { boolean_random_n } from "./boolean_random_n.mjs";
import { g_random_dot_bang } from "./g_random_dot_bang.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_greeting(met, name_player, time, christian) {
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
  ("RARE, one greeting in six, and only when the sky actually has something in it: a word about the sunset or the night overhead. rare on purpose — a sight is worth saying once, and an NPC who points at the same sunset every time you speak to them stops being someone who noticed it. ",
    fn_name("g_time_sky_remark"),
    " answers null at the three plain daylight hours, so this sentence simply does not exist at noon however the dice land. it brings its own question or exclamation mark, so no dot is added");
  let sky_remark = g_time_sky_remark(time, christian);
  let sky_maybe = "";
  let b = null_is(sky_remark);
  if (not(b)) {
    let rare = boolean_random_n(6);
    if (rare) {
      sky_maybe = text_combine(" ", sky_remark);
    }
  }
  let r10 = g_random_dot_bang();
  let npc_says = text_combine_multiple([
    v,
    " ",
    name_player,
    r10,
    remark_maybe,
    sky_maybe,
    meet_message,
  ]);
  return npc_says;
}
