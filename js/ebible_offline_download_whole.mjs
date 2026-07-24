import { catch_null_async } from "./catch_null_async.mjs";
import { ebible_offline_put_list } from "./ebible_offline_put_list.mjs";
import { ebible_version_chapters_all_download } from "./ebible_version_chapters_all_download.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_offline_download_whole(bible_folder, on_progress) {
  "some versions are published as one file of every chapter: one request beats a thousand, so try that first and say whether it worked";
  async function get() {
    let v = await ebible_version_chapters_all_download(bible_folder);
    return v;
  }
  let chapters = await catch_null_async(get);
  if (null_is(chapters)) {
    return false;
  }
  function to_entry(chapter) {
    let name = property_get(chapter, "chapter_code");
    let value = property_get(chapter, "verses");
    let entry = {
      name,
      value,
    };
    return entry;
  }
  let entries = list_map(chapters, to_entry);
  await ebible_offline_put_list(bible_folder, entries);
  let total = list_size(entries);
  on_progress(total, total);
  return true;
}
