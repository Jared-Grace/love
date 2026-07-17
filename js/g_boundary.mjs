import { list_random_item } from "./list_random_item.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_concat } from "./list_concat.mjs";
import { not } from "./not.mjs";
export function g_boundary(met) {
  let neutral = [
    text_combine(
      "That feels pretty personal. ",
      list_random_item(["Maybe another time?", "Can we come back to it later?"]),
    ),
    list_random_item([
      "I'd rather not get into that.",
      "I don't really want to discuss that.",
      "Let's not go there.",
    ]),
    text_combine(
      "I think I'll pass on that ",
      list_random_item(["for now.", "today."]),
    ),
    "Can we talk about something else?",
    text_combine(
      list_random_item(["Hmm, ", "Well, "]),
      "that's not something I feel like talking about.",
    ),
  ];
  let contextual = [
    "We've talked before, but I'd still rather not get into that.",
  ];
  if (not(met)) {
    contextual = [
      "Sorry, I just met you. I'd rather not talk about that right now.",
      "We only just met. Maybe once I know you better.",
    ];
  }
  let options = list_concat(neutral, contextual);
  return list_random_item(options);
}
