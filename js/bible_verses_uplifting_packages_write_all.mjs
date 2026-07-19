import { ebible_languages } from "./ebible_languages.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_unique } from "./list_unique.mjs";
import { bible_verses_uplifting_package_write } from "./bible_verses_uplifting_package_write.mjs";
import { each_async } from "./each_async.mjs";
import { log } from "./log.mjs";
export async function bible_verses_uplifting_packages_write_all() {
  "build an uplifting package for EVERY language the app offers. Each language whose Bible text is reachable (locally cached or downloadable) writes public/bible/uplifting/<folder>.json; a language that produces no text is SKIPPED (no empty file) and falls back to per-verse fetch at runtime. count -1 = the build threw (e.g. offline for an un-cached version).";
  let languages = ebible_languages();
  let folders = list_map_property(languages, "bible_folder");
  let unique_folders = list_unique(folders);
  async function folder_each(folder) {
    let count = -1;
    try {
      count = await bible_verses_uplifting_package_write(folder);
    } catch (error) {
      count = -1;
    }
    log(bible_verses_uplifting_packages_write_all.name, {
      folder,
      count,
    });
  }
  await each_async(unique_folders, folder_each);
}
