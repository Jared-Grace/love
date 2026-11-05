import { reply_choice } from "./reply_choice.mjs";
export function reply_word_command() {
  "The noun for what God commands, in the spellings the English Bibles use.";
  let r = reply_choice(["command", "commandment", "commandement"]);
  return r;
}
