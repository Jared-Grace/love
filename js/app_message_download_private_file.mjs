import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_private_path } from "./app_message_private_path.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
export async function app_message_download_private_file(item) {
  "$plain item";
  "Brings one message file down out of the bucket and keeps it on this machine, written under the private folder's mirror of the bucket at the same address it has there. Answers with the address written.";
  "One file rather than all of them, because two callers take a file down for different reasons - one takes every message, the other takes only what is not here yet - and what they share is exactly this: the address, the read, and the write. Held apart, either of them could learn to write somewhere else without the other following.";
  "The bytes are written exactly as they arrived rather than read and written back out, so what is kept is the file rather than this repo's understanding of the file: a record whose shape changes later still reads back as what was actually uploaded, and a copy put back where it came from goes back byte for byte.";
  "Read through the same signed-in handle that listed it rather than through its public address, because nothing under this opening is meant to be readable to the public - a reader using the public address would list every file and then be refused every one of them.";
  arguments_assert(arguments, 1);
  let f_path = app_message_private_path(item);
  let [buffer] = await item.download();
  await file_overwrite_buffer(f_path, buffer);
  return f_path;
}
