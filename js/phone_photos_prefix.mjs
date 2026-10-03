import { arguments_assert } from "./arguments_assert.mjs";
import { messages_firebase_path } from "./messages_firebase_path.mjs";
import { text_combine } from "./text_combine.mjs";
export function phone_photos_prefix() {
  "the opening every photo sent from the phone photos screen is stored under, and nothing else is";
  "It sits inside the one opening a browser may write to, beside the messages and the error reports, so the readers of those skip it by this name rather than taking a photo for a message.";
  arguments_assert(arguments, 0);
  let opening = messages_firebase_path();
  let prefix = text_combine(opening, "phone_photos/");
  return prefix;
}
