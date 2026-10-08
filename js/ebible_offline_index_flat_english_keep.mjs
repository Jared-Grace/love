import { ebible_offline_folders_get } from "./ebible_offline_folders_get.mjs";
import { ebible_offline_index_flat_english_name } from "./ebible_offline_index_flat_english_name.mjs";
import { ebible_offline_put_list } from "./ebible_offline_put_list.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function ebible_offline_index_flat_english_keep(list) {
  "put the English index beside every bible already kept on this device";
  "the bibles somebody saved before the English index was kept with them have none, and nobody is going to save them again to get one - so the first reading that fetches it keeps it, and the copy repairs itself on the way past";
  let folders = ebible_offline_folders_get();
  let name = ebible_offline_index_flat_english_name();
  for (let bible_folder of folders) {
    async function put() {
      await ebible_offline_put_list(bible_folder, [
        {
          name,
          value: list,
        },
      ]);
    }
    ("a device that refuses browser storage still has the index in hand, so a refusal here costs the next reading without internet its structure and nothing more");
    await catch_null_async(put);
  }
}
