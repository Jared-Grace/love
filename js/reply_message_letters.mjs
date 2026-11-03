import { arguments_assert } from "./arguments_assert.mjs";
export function reply_message_letters(message) {
  arguments_assert(arguments, 1);
  ("A message with only its letters and digits left, in lower case, so two messages that differ only in commas, spaces or capitals read as the same words.");
  ("★ THE TEST'S NAME CANNOT ANSWER THIS. A test is named by hashing its exact characters, so one added comma makes another name, while the reply rules would treat the two alike. Asking whether somebody has said a message has to read it the way the rules do.");
  let lowered = message.toLowerCase();
  let letters = lowered.replace(/[^\p{L}\p{N}]/gu, "");
  return letters;
}
