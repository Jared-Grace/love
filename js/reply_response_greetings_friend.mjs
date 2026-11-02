import { arguments_assert } from "./arguments_assert.mjs";
import { reply_response_greetings } from "./reply_response_greetings.mjs";
import { emoji_handshake } from "./emoji_handshake.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function reply_response_greetings_friend() {
  arguments_assert(arguments, 0);
  ("The plain greeting exactly as it is, cross included, and then one more sentence with a handshake of its own, for somebody who greets as a friend.");
  let greetings = reply_response_greetings();
  let handshake = emoji_handshake();
  let response = text_combine_multiple([
    greetings,
    " Any friend of Jesus is a friend of mine! ",
    handshake,
  ]);
  return response;
}
