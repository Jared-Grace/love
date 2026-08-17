import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { not } from "./not.mjs";
import { g_random_dot_bang } from "./g_random_dot_bang.mjs";
import { list_concat_if } from "./list_concat_if.mjs";
import { g_time_remark } from "./g_time_remark.mjs";
export function g_greeting_remark(words, met, christian, time) {
  arguments_assert(arguments, 4);
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
  return {
    v,
    meet_message,
    remark,
  };
}
