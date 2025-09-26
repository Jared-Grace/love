import { messenger_reply_messages_transform } from "./messenger_reply_messages_transform.mjs";
import { marker } from "./marker.mjs";
export async function reply_test() {
  let messages = null;
  async function lambda(m) {
    messages = m;
  }
  await messenger_reply_messages_transform(lambda);
  marker("1");
}
