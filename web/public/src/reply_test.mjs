import { marker } from "../../../love/public/src/marker.mjs";
import { reply_messages } from "../../../love/public/src/reply_messages.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export async function reply_test() {
  marker("1");
  let messages = ["a"];
  let start = reply_sequence(["a"]);
  let result = await reply_messages(messages, start);
  return result;
}
