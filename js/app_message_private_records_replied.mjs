import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_private_records } from "./app_message_private_records.mjs";
import { app_message_reply_choices } from "./app_message_reply_choices.mjs";
import { property_get } from "./property_get.mjs";
import { reply_attempt } from "./reply_attempt.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function app_message_private_records_replied() {
  arguments_assert(arguments, 0);
  ("Every message on this machine's disk, each one carrying what the reply rules would say back to it - or the fact that they have nothing for it, or that they broke on it.");
  ("★ THE REPLY IS WORKED OUT BESIDE THE MESSAGE RATHER THAN ASKED FOR SEPARATELY, so a screen showing the two together cannot show a reply against the wrong message. Asked as two commands the page would hold two lists and have to line them up itself, and the only thing it could line them up by is position - which is exactly the join that silently goes wrong the first time either list is filtered or sorted differently.");
  ("The rule set is built once here and handed to every message, because it is the same rule set for all of them and building it is most of the work.");
  ("It reads the disk and answers; it brings nothing down. What arrives is somebody else's command, so a page can say how many are new and then ask this for what they all say.");
  let records = await app_message_private_records();
  let start = app_message_reply_choices();
  async function lambda(record) {
    let message = property_get(record, "message");
    let attempt = await reply_attempt(message, start);
    let carried = {
      reply: attempt,
    };
    object_merge_set(carried, record);
    return carried;
  }
  let replied = await list_map_async(records, lambda);
  return replied;
}
