import { app_message_files } from "./app_message_files.mjs";
import { app_message_private_path } from "./app_message_private_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { app_message_download_private_file } from "./app_message_download_private_file.mjs";
import { list_map_unordered_async_filter_null_not_is } from "./list_map_unordered_async_filter_null_not_is.mjs";
export async function app_message_download_private_missing() {
  "Brings this machine's copy of the messages up to date with the bucket, taking down only what is not on the disk yet. Answers with the addresses written, so an answer of nothing means the copy was already current.";
  "The reader beside this one takes every message down every time it runs, which is the right thing to do once and the wrong thing to do every day: a person's words do not change after they are written, so a second reading of a file already on the disk spends the network on bytes that are already there, and spends more of it every week the folder grows. This is the one to run on a timer.";
  "What is missing is asked of the disk rather than remembered in a note beside it. A note is a second thing that has to be right - it goes stale when a file is deleted by hand, when a run is stopped halfway, when two runs overlap - and the disk cannot be wrong about what is on the disk. The check costs one look per file and no network at all.";
  "Present is taken to mean done, and not to mean the same bytes. That is safe here because the bucket only ever gains files: a message is written once under a name nobody writes again, so a file at that address is that message and re-reading it could only find what is already there. A file whose contents are meant to change would need its size or its time compared, and would not belong under this opening.";
  "A file taken out of the bucket is left behind on the disk rather than deleted, which is the safe way round for a folder whose whole job is to be the copy that outlives the original.";
  let files = await app_message_files();
  async function lambda(item) {
    let f_path = app_message_private_path(item);
    let present = await file_exists(f_path);
    if (present) {
      return null;
    }
    let written_one = await app_message_download_private_file(item);
    return written_one;
  }
  let written = await list_map_unordered_async_filter_null_not_is(
    files,
    lambda,
  );
  return written;
}
