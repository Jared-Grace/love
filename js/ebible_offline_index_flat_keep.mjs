import { catch_null_async } from "./catch_null_async.mjs";
import { ebible_offline_folder_downloaded_is } from "./ebible_offline_folder_downloaded_is.mjs";
import { ebible_offline_index_flat_name } from "./ebible_offline_index_flat_name.mjs";
import { ebible_offline_put_list } from "./ebible_offline_put_list.mjs";
import { not } from "./not.mjs";
export async function ebible_offline_index_flat_keep(bible_folder, list) {
  "put a bible's index beside the copy of it already on this device, so the download this reading paid for is the last one anybody pays for";
  "the bibles somebody kept before this was written have chapters and no index, and a reader is not going to download them all again to get one. so the first reading after this still fetches the index and this is what keeps it - the copy repairs itself on the way past, and there is no day on which it has to be repaired.";
  "a bible nobody kept is left alone: writing an index for it would be keeping part of a bible that was never asked for, and the reading is no faster for it either way.";
  let downloaded = ebible_offline_folder_downloaded_is(bible_folder);
  if (not(downloaded)) {
    return;
  }
  let name = ebible_offline_index_flat_name();
  async function put() {
    await ebible_offline_put_list(bible_folder, [
      {
        name,
        value: list,
      },
    ]);
  }
  ("a device that refuses browser storage still has the index in hand, so a refusal here costs the next reading a download and nothing more");
  await catch_null_async(put);
}
