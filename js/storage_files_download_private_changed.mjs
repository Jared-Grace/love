import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { storage_file_private_path } from "./storage_file_private_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { md5_base64 } from "./md5_base64.mjs";
import { storage_file_download_private } from "./storage_file_download_private.mjs";
import { list_map_unordered_async_filter_null_not_is } from "./list_map_unordered_async_filter_null_not_is.mjs";
export async function storage_files_download_private_changed(files) {
  "$plain files";
  "Takes down each of the listed storage files that is not on this machine's disk yet, or is there with different contents, into the private folder's mirror of the bucket, and answers with the addresses written - so an answer of nothing means the copy was already current.";
  ("FOR A FOLDER WHERE A NAME IS WRITTEN AGAIN. ",
    fn_name("storage_files_download_private_missing"),
    " takes present to mean done, which holds only where every name is written once; a recorder taking a passage again replaces the take under the same name (human 2026-11-25: Psalm 1:6 recorded again, and the old 1.7 s take stayed on disk). Contents are compared by the md5 storage keeps beside every file, so nothing is downloaded to find out.");
  arguments_assert(arguments, 1);
  async function lambda(item) {
    let f_path = storage_file_private_path(item);
    let present = await file_exists(f_path);
    if (present) {
      let bytes = await file_read_buffer(f_path);
      let here = md5_base64(bytes);
      if (equal(here, item.metadata.md5Hash)) {
        return null;
      }
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
