import { invoke_multiple_arg_async } from "./invoke_multiple_arg_async.mjs";
import { ebible_version_readaloud_download_zip_delete } from "./ebible_version_readaloud_download_zip_delete.mjs";
import { ebible_version_readaloud_download } from "./ebible_version_readaloud_download.mjs";
export async function ebible_version_readaloud_download_refresh(bible_folder) {
  let fns = [
    ebible_version_readaloud_download_zip_delete,
    ebible_version_readaloud_download,
  ];
  await invoke_multiple_arg_async(fns, bible_folder);
}
