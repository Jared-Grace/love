import { invoke_multiple_arg_async } from "../../../love/public/src/invoke_multiple_arg_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_version_readaloud_download_zip_delete } from "../../../love/public/src/ebible_version_readaloud_download_zip_delete.mjs";
import { ebible_version_readaloud_download } from "../../../love/public/src/ebible_version_readaloud_download.mjs";
export async function ebible_version_readaloud_download_refresh(bible_folder) {
  let fns = [
    ebible_version_readaloud_download_zip_delete,
    ebible_version_readaloud_download,
  ];
  async function lambda(fn) {
    await fn(bible_folder);
  }
  await each_async(fns, lambda);
  let r = await invoke_multiple_arg_async(list_fns, arg);
  await ebible_version_readaloud_download_zip_delete(bible_folder);
  await ebible_version_readaloud_download(bible_folder);
}
