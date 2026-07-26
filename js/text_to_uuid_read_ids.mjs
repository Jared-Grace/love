import { text_to_uuid_read } from "./text_to_uuid_read.mjs";
import { text_to_uuid_ids_initialize } from "./text_to_uuid_ids_initialize.mjs";
export async function text_to_uuid_read_ids() {
  "The half of the saved file that goes the other way, from a uuid back to the text it was given for. Its twin reads the half that goes from text to uuid, and the two are written and read as a pair.";
  let data = await text_to_uuid_read();
  let ids = text_to_uuid_ids_initialize(data);
  return ids;
}
