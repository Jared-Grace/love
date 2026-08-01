import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { emoji_heart } from "./emoji_heart.mjs";
export function g_boundary_acknowledge() {
  "the player's warm, humble reply when the person sets a boundary — accepting it graciously with no pressure, randomized so it never reads the same twice. shown as a choice AFTER a boundary (with a short pause first) so returning to the openers costs a gentle step, making prayer for discernment the better path than guessing openers at random";
  let v = emoji_smile();
  let v2 = emoji_heart();
  let face = list_random_item([v, v2]);
  let lead = list_random_item([
    "It's okay, I understand.",
    "Of course, I understand.",
    "That's completely fine.",
    "Sorry, my bad!",
    "I'm sorry, I didn't mean to pry.",
    "Please forgive me for asking.",
    "No worries at all.",
  ]);
  let t = list_random_item([
    " No pressure at all.",
    " Whenever you're ready.",
    " Thank you for being honest with me.",
    " We can talk about something else.",
  ]);
  let reassure = text_random_or_empty(t);
  let line = text_combine_multiple([face, " ", lead, reassure]);
  return line;
}
