import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
export async function file_read_buffer_try(f_path) {
  "The bytes of this file, or nothing at all if there is no such file";
  "A sweep over a folder is asking about files it was handed rather than files it chose, and one of them being gone by the time it is read is ordinary - a peer moved it while the walk was running. That is a missing answer, not a fault, so it comes back as nothing and the sweep carries on.";
  arguments_assert(arguments, 1);
  let exists = await file_exists(f_path);
  let bytes = exists ? await file_read_buffer(f_path) : null;
  return bytes;
}
