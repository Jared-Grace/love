import { text_to_uuid_read_save } from "./text_to_uuid_read_save.mjs";
import { property_exists } from "./property_exists.mjs";
export async function text_to_uuid_ids_exists(id) {
  "Asking whether a uuid has text saved under it, which means reading the half that is keyed by uuid. It read the other half until now, so it answered about a text that happened to be spelled like a uuid - and nothing called it, so nothing ever said so.";
  let ids = await text_to_uuid_read_ids();
  let exists = property_exists(ids, id);
  return exists;
}
