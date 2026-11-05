import { arguments_assert } from "./arguments_assert.mjs";
export function reply_message_words(message) {
  arguments_assert(arguments, 1);
  ("The words of a message, the way a person would count them. Spaces alone are not enough, because people leave the space out after a full stop: `other.And` is two words, and a dictionary or a rule asked about it as one word says it knows neither.");
  let spaced = message.replace(/([.,!?;:])(?=\p{L})/gu, "$1 ");
  let words = spaced.split(/\s+/).filter(Boolean);
  return words;
}
