import { list_random_item } from "./list_random_item.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_concat } from "./list_concat.mjs";
import { not } from "./not.mjs";
export function g_boundary(met) {
  let neutral = [
    text_combine(
      "That's kind of you to ask. ",
      list_random_item([
        "I'd rather not get into it just now, though.",
        "Maybe we can talk about it another time?",
      ]),
    ),
    text_combine(
      "Thank you, ",
      list_random_item([
        "but that feels close to my heart. Maybe another day?",
        "I'm just not quite ready to talk about that.",
      ]),
    ),
    "I appreciate you asking. Could we come back to it later?",
    text_combine(
      "You're kind. ",
      list_random_item([
        "Still, I'd rather wait to talk about that.",
        "Can we save that for another time?",
      ]),
    ),
    "That means a lot to me. I'm just not ready to share it.",
  ];
  let contextual = [
    "It's good to see you again. I'd still rather not get into that, though.",
    "I always enjoy our talks. That one I'd like to keep to myself for now.",
  ];
  if (not(met)) {
    contextual = [
      "You seem kind, but we only just met. Maybe once I know you a little better?",
      "Thank you. We've only just met, though — I hope you understand.",
    ];
  }
  let options = list_concat(neutral, contextual);
  return list_random_item(options);
}
