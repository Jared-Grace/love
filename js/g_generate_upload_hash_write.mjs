import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { path_name } from "./path_name.mjs";
import { file_read } from "./file_read.mjs";
import { text_hash } from "./text_hash.mjs";
import { g_generate_upload_hashes_folder } from "./g_generate_upload_hashes_folder.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { g_generate_upload_hash_path } from "./g_generate_upload_hash_path.mjs";
export async function g_generate_upload_hash_write(fn, file) {
  "Write down what one file of a store held at the moment it was sent up, as a single short word standing for the whole of it.";
  "★ WITHOUT THIS, ASKING WHETHER A READER HAS THE CURRENT WORDING COSTS AS MUCH AS SENDING IT AGAIN. Nothing anywhere can read back what is in front of a reader; the only questions anything can answer are whether a thing is up there at all, and what the store says today. So a file mended in the store after it was sent satisfies every check there is - sound where the checks look, stale where the reader looks - and the only way to put it right is to send everything again and hope. With the word written down here, the question becomes which files differ from their own record, which is a walk of one folder and touches no network.";
  "WHAT IS RECORDED IS THE STORE'S OWN WRITING, NOT WHAT ARRIVED. The sending reads the file, turns it back into an object and squeezes it, so nothing here claims the far end holds these very letters. The question this record exists to answer is whether the store has been changed since the send, and for that the store's own writing at that moment is exactly the right thing to remember.";
  "It is written after the send and never before, so a send that fails leaves no record and the file keeps reading as one nobody has accounted for.";
  arguments_assert(arguments, 2);
  let name = path_name(file);
  let text = await file_read(file);
  let hash = text_hash(text);
  let folder = g_generate_upload_hashes_folder(fn);
  await folder_exists_ensure(folder);
  let path = g_generate_upload_hash_path(fn, name);
  await file_overwrite_json(path, {
    hash,
  });
  return path;
}
