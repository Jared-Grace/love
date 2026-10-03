import { arguments_assert } from "./arguments_assert.mjs";
import { storage_file_private_path } from "./storage_file_private_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { storage_file_download_private } from "./storage_file_download_private.mjs";
import { list_map_unordered_async_filter_null_not_is } from "./list_map_unordered_async_filter_null_not_is.mjs";
export async function storage_files_download_private_missing(files) {
  "$plain files";
  "Takes down each of the listed storage files that is not on this machine's disk yet, into the private folder's mirror of the bucket, and answers with the addresses written - so an answer of nothing means the copy was already current.";
  "files are the signed-in handles a bucket listing hands back. What is missing is asked of the disk, one look per file and no network at all, and present is taken to mean done: this is for a folder that only ever gains files, each written once under a name nobody writes again.";
  arguments_assert(arguments, 1);
  async function lambda(item) {
    let f_path = storage_file_private_path(item);
    let present = await file_exists(f_path);
    if (present) {
      return null;
    }
    let written_one = await storage_file_download_private(item);
    return written_one;
  }
  let written = await list_map_unordered_async_filter_null_not_is(
    files,
    lambda,
  );
  return written;
}
