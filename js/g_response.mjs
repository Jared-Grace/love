import { list_random_item } from "./list_random_item.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
export function g_response(kind) {
  "the NPC's warm, randomized closing RESPONSE after the player's words land — a SHARED, structured grammar (varied thanks + a reaction chosen for `kind` + an optional closer). kinds: 'comfort' (a struggle was met), 'ponder' (a doubt / the gospel gave them something to consider), 'encouraged' (a fellow believer was built up)";
  let reactions = {
    comfort: [
      "those words are a real comfort",
      "that's just what I needed to hear",
      "I feel less alone hearing that",
      "that brings me real peace",
    ],
    ponder: [
      "I've honestly never thought of it that way",
      "you've given me a lot to think about",
      "that's given me something to sit with",
      "I'll be turning that over for a while",
    ],
    encouraged: [
      "I needed that",
      "that strengthens my heart",
      "you've lifted my spirit",
      "that's a real encouragement",
    ],
  };
  let reaction = list_random_item(property_get(reactions, kind));
  let thanks = list_random_item([
    "Thank you",
    "Thank you so much",
    "Thank you for that",
    "I appreciate that",
    "Thank you, truly",
  ]);
  let closer = text_random_or_empty(
    list_random_item([
      " I won't forget it.",
      " God bless you.",
      " That means a lot to me.",
      " Truly.",
    ]),
  );
  let line = text_combine_multiple([thanks, " — ", reaction, ".", closer]);
  return line;
}
