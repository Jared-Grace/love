import { ebible_chapters_each_verses_check_with } from "../../../love/public/src/ebible_chapters_each_verses_check_with.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
import { ebible_verses_upload_name } from "../../../love/public/src/ebible_verses_upload_name.mjs";
import { ebible_firebase_upload } from "../../../love/public/src/ebible_firebase_upload.mjs";
import { list_wait } from "../../../love/public/src/list_wait.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function ebible_verses_upload(bible_folder) {
  marker("1");
  await ebible_version_download(bible_folder);
  ("loop through to ensure parse correct before begin upload");
  await ebible_chapters_each_verses_check_with(bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses) {
    async function lambda(v) {
      let verse_number = object_property_get(v, "verse_number");
      let joined2 = ebible_verses_upload_name(chapter_code, verse_number);
      let verse = object_merge(
        {
          bible_folder,
          chapter_code,
        },
        v,
      );
      await ebible_firebase_upload(bible_folder, joined2, verse);
    }
    let mapped = list_map(verses, lambda);
    await list_wait(mapped);
  }
}
