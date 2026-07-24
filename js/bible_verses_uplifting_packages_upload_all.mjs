import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { error } from "./error.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { bible_verses_uplifting_package_upload } from "./bible_verses_uplifting_package_upload.mjs";
import { each_async } from "./each_async.mjs";
import { log } from "./log.mjs";
export async function bible_verses_uplifting_packages_upload_all() {
  "build an uplifting package for EVERY language the app offers. Each language whose Bible text is reachable (locally cached or downloadable) writes public/bible/uplifting/<folder>.json; a language that produces no text is SKIPPED (no empty file) and falls back to per-verse fetch at runtime. count -1 = the build threw (e.g. offline for an un-cached version).";
  let languages = ebible_languages();
  let unique_folders = list_map_property_unique(languages, "bible_folder");
  async function folder_each(folder) {
    let count = -1;
    try {
      count = await bible_verses_uplifting_package_upload(folder);
    } catch (error) {
      count = -1;
    }
    log(bible_verses_uplifting_packages_upload_all.name, {
      folder,
      count,
    });
  }
  await each_async(unique_folders, folder_each);
}
