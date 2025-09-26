import { object_properties } from "./object_properties.mjs";
import { messenger_reply_messages_transform } from "./messenger_reply_messages_transform.mjs";
export async function reply_test() {
  let messages = null;
  async function lambda(m) {
    messages = m;
  }
  await messenger_reply_messages_transform(lambda);
  let properties = object_properties(obj);
}
