import { messenger_reply_messages_transform } from "./messenger_reply_messages_transform.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { marker } from "./marker.mjs";
export async function reply_test() {
  async function lambda(messages2) {
    object_property_set(messages2, joined, 1);
  }
  await messenger_reply_messages_transform(lambda);
  marker("1");
}
