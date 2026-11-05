import { reply_choice } from "./reply_choice.mjs";
export function reply_word_command_commandment() {
  let r = reply_choice(["command", "commandment"]);
  return r;
}
