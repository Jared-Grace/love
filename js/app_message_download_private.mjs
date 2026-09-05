import { app_message_files } from "./app_message_files.mjs";
import { property_get } from "./property_get.mjs";
import { folder_private_storage_path } from "./folder_private_storage_path.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function app_message_download_private() {
  "Brings every message down out of storage onto this machine's disk and keeps it, each file written under the private folder's mirror of the bucket at the same address it has there. Answers with the addresses written.";
  "The reader beside this one hands back what the messages say and keeps nothing, so the only copy of what somebody wrote stays in the cloud and the words are gone again the moment the run ends. This is the half that keeps them: a person's own words, held somewhere they can be read back tomorrow, without asking the network again and without a signed-in handle.";
  "Written where git cannot see it and where no backup reaches, and that is the point rather than a detail. This repo is public and is committed by commands that sweep whatever they find, and a copy of somebody else's words has no business leaving the machine at all - see the folder it lands in, which says both at the top.";
  "The bytes are written exactly as they arrived rather than read and written back out. What is kept is then the file, not this repo's understanding of the file: a record whose shape changes later still reads back as what was actually uploaded, and a copy put back where it came from goes back byte for byte.";
  "Each file is read through the same signed-in handle that listed it, rather than through its public address, because nothing under this opening is meant to be readable to the public - a reader using the public address would list every file and then be refused every one of them.";
  "Running it again writes over what is already on disk rather than refusing, so this is a thing to run whenever, and what is on disk afterwards is what is in the bucket now. A file taken out of the bucket is left behind here, which is the safe way round for a folder whose whole job is to be the copy that outlives the original.";
  let files = await app_message_files();
  async function lambda(item) {
    let name = property_get(item, "name");
    let f_path = folder_private_storage_path(name);
    let [buffer] = await item.download();
    await file_overwrite_buffer(f_path, buffer);
    return f_path;
  }
  let written = await list_map_unordered_async(files, lambda);
  return written;
}
