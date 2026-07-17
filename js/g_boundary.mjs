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
  let softener = text_random_or_empty(
    list_random_item([
      " Maybe another time?",
      " Could we come back to it later?",
      " I hope you understand.",
    ]),
  );
  let neutral = [
    text_combine_multiple([
      thanks,
      "I'd rather not ",
      list_random_item(["talk about", "get into", "discuss"]),
      " ",
      subject,
      text_random_or_empty(list_random_item([" right now", " just now"])),
      ".",
      softener,
    ]),
    text_combine_multiple([
      list_random_item(["That feels ", "That's "]),
      list_random_item(["pretty personal", "close to my heart"]),
      ".",
      softener,
    ]),
    text_combine_multiple([
      "I'm ",
      text_random_or_empty("just "),
      "not quite ready to talk about ",
      subject,
      text_random_or_empty(" yet"),
      ".",
    ]),
    text_combine_multiple([
      "Could we ",
      list_random_item(["talk about something else", "change the subject"]),
      text_random_or_empty(", if that's okay"),
      "?",
    ]),
  ];
  let contextual = [
    text_combine_multiple([
      "It's good to see you again. ",
      list_random_item([
        "I'd still rather not get into that, though.",
        "That, though, I'd like to keep to myself for now.",
      ]),
    ]),
  ];
  if (not(met)) {
    contextual = [
      text_combine_multiple([
        "You seem kind, but we only just met. ",
        list_random_item([
          "Maybe once I know you a little better?",
          "I hope you understand.",
        ]),
      ]),
    ];
  }
  let options = list_concat(neutral, contextual);
  return list_random_item(options);
}
