import { reply_sequence_output } from "../../../love/public/src/reply_sequence_output.mjs";
import { reply_phrase_my_dear_brother } from "../../../love/public/src/reply_phrase_my_dear_brother.mjs";
import { reply_choice } from "../../../love/public/src/reply_choice.mjs";
import { reply_word_hello } from "../../../love/public/src/reply_word_hello.mjs";
import { app_reply_response_greetings } from "../../../love/public/src/app_reply_response_greetings.mjs";
export function app_message_reply_greeting() {
  let greeting_response = app_reply_response_greetings();
  const hello = reply_word_hello();
  let hi_word = reply_choice(["hi", hello, "hey"]);
  let my_dear_brother2 = reply_phrase_my_dear_brother();
  let greeting = reply_sequence_output(
    [hi_word, my_dear_brother2],
    greeting_response,
  );
  return greeting;
}
