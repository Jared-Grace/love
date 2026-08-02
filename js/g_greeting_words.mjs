import { fn_name } from "./fn_name.mjs";
import { g_time_greeting } from "./g_time_greeting.mjs";
import { list_concat } from "./list_concat.mjs";
import { not } from "./not.mjs";
export function g_greeting_words(time, christian) {
  ("every opening word an NPC could greet you with — the four plain ones, the greeting for the time of day the sky is showing (",
    fn_name("g_time_greeting"),
    "), and for a believer four more that only a believer would say. a christian says hi as readily as anyone, so the faith words are ADDED to the plain list rather than replacing it: the split is that an unbeliever never blesses you, not that a believer never says hey. each word has to read with the player's name straight after it and has to survive being capitalised, which is what rules out anything ending in a comma or a clause");
  let time_greeting = g_time_greeting(time);
  let plain = ["hi", "hello", "greetings", "hey", time_greeting];
  let faith = [
    "grace and peace to you",
    "peace to you",
    "God bless you",
    "the Lord be with you",
  ];
  let words = list_concat_if(plain, faith, christian);
  return words;
}
