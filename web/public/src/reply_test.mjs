import { reply } from "../../../love/public/src/reply.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { messenger_reply_messages_transform } from "../../../love/public/src/messenger_reply_messages_transform.mjs";
export async function reply_test() {
  let messages = null;
  async function lambda(m) {
    messages = m;
  }
  await messenger_reply_messages_transform(lambda);
  let properties = object_properties(messages);
  let first = list_first(properties);
  const outputs = [];
  await reply({
    input: first,
    language_codes: ["ur"],
    outputs,
  });
  return outputs;
}
