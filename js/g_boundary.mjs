import { g_boundary_softener } from "./g_boundary_softener.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { not } from "./not.mjs";
export function g_boundary(met, topic) {
  let subject = list_random_item(["that", topic]);
  let thanks = list_random_item([
    "That's kind of you to ask. ",
    "Thank you. ",
    "I appreciate you asking. ",
  ]);
  let softener = g_boundary_softener();
  let r2 = list_random_item(["talk about", "get into", "discuss"]);
  let t = list_random_item([" right now", " just now"]);
  let r3 = text_random_or_empty(t);
  let combined = text_combine_multiple([
    thanks,
    "I'd rather not ",
    r2,
    " ",
    subject,
    r3,
    ".",
    softener,
  ]);
  let r4 = list_random_item(["That feels ", "That's "]);
  let r5 = list_random_item(["pretty personal", "close to my heart"]);
  let combined2 = text_combine_multiple([r4, r5, ".", softener]);
  let r6 = text_random_or_empty("just ");
  let r7 = text_random_or_empty(" yet");
  let combined3 = text_combine_multiple([
    "I'm ",
    r6,
    "not quite ready to talk about ",
    subject,
    r7,
    ".",
  ]);
  let r8 = list_random_item([
    "talk about something else",
    "change the subject",
  ]);
  let r9 = text_random_or_empty(", if that's okay");
  let combined4 = text_combine_multiple(["Could we ", r8, r9, "?"]);
  let neutral = [combined, combined2, combined3, combined4];
  let r10 = list_random_item([
    "I'd still rather not get into that, though.",
    "That, though, I'd like to keep to myself for now.",
  ]);
  let combined5 = text_combine_multiple(["It's good to see you again. ", r10]);
  let contextual = [combined5];
  if (not(met)) {
    let r11 = list_random_item([
      "Maybe once I know you a little better?",
      "I hope you understand.",
    ]);
    let combined6 = text_combine_multiple([
      "You seem kind, but we only just met. ",
      r11,
    ]);
    contextual = [combined6];
  }
  let options = list_concat(neutral, contextual);
  let r = list_random_item(options);
  return r;
}
