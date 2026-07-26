import { text_replace_multiple_to_space } from "./text_replace_multiple_to_space.mjs";
export function git_message_safe(message) {
  "A commit message reaches git as one argument, but it travels there inside a";
  "line of command text that the launcher splits on spaces and double quotes. A";
  "double quote in the message ends the quoted run early, and everything after it";
  "becomes further arguments to git rather than part of the message.";
  "A shell operator is worse: the launcher refuses the whole line, and because the";
  "commit is wrapped in a catch that ignores everything, the commit is then lost in";
  "silence instead of complaining.";
  "Both stop being possible if the characters that cause them become spaces, done";
  "here at the one place every commit message is built.";
  let unsafe = ['"', "|", "&", ";", "`", "$", "(", ")"];
  let safe = text_replace_multiple_to_space(message, unsafe);
  return safe;
}
