import { list_random_item_or_empty } from "./list_random_item_or_empty.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_busy() {
  "a randomized, warm 'I can't talk right now' line an NPC gives when they are NOT one of the day's talkable people — person-neutral, grammared from interchangeable parts so it doesn't read the same across the many NPCs who give it. this is NOT a topic boundary (that would decline one subject): this gently declines the WHOLE conversation for now. every core starts with 'I' so it reads right with or without the lead interjection";
  let lead = list_random_item_or_empty(["Sorry, ", "Oh, ", "Ah, "]);
  let core = list_random_item([
    "I can't talk right now",
    "I'm in the middle of something",
    "I've got my hands full at the moment",
    "I'm a bit busy just now",
    "I'm occupied at the moment",
  ]);
  let softener = list_random_item_or_empty([
    " Maybe another time?",
    " Could you catch me later?",
    " Thank you for understanding.",
    " I hope that's alright.",
  ]);
  let line = text_combine_multiple([lead, core, ".", softener]);
  return line;
}
