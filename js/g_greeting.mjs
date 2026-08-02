import { list_concat_if } from "./list_concat_if.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_greeting_words } from "./g_greeting_words.mjs";
import { g_time_sky_remark } from "./g_time_sky_remark.mjs";
import { null_is } from "./null_is.mjs";
import { boolean_random_n } from "./boolean_random_n.mjs";
import { g_time_remark } from "./g_time_remark.mjs";
import { g_random_dot_bang } from "./g_random_dot_bang.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { list_random_item } from "./list_random_item.mjs";
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
  let greet = list_random_item(words);
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
    let topics_plain = [combined, combined2];
    ("the same split once more, on the question that opens a second conversation: a believer can ask what the Lord has laid on your heart, and nobody else would put it that way. it is one option among three rather than the christian version of the question, so a believer still mostly asks what is on your mind like anyone would");
    let topics_faith = ["has the Lord laid on your heart"];
    let topics = list_concat_if(topics_plain, topics_faith, christian);
    let r9 = list_random_item(topics);
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
  ("about half of greetings also say something ABOUT the time of day, as its own sentence between the name and the rest. it is drawn independently of the opening word, so the time can show up as good morning, or as hoping your morning goes well, or as both, or as neither — which is the difference between an NPC who knows what time it is and one reading a clock aloud");
  let remark = g_time_remark(time, christian);
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
