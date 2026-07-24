import { ebible_languages } from "./ebible_languages.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { uplifting_package_upload } from "./uplifting_package_upload.mjs";
import { each_async } from "./each_async.mjs";
import { log } from "./log.mjs";
export async function uplifting_packages_upload_all() {
  "upload every already-built uplifting package to firebase storage. Iterates each language folder the app offers; a folder with no committed public file (a language that produced no package) throws on read and is skipped, matching how the build itself skips empty languages.";
  let languages = ebible_languages();
  let unique_folders = list_map_property_unique(languages, "bible_folder");
  let uploaded = [];
  async function folder_each(folder) {
    async function upload() {
      let destination = await uplifting_package_upload(folder);
      uploaded.push(folder);
      log(uplifting_packages_upload_all.name, {
        folder,
        destination,
      });
    }
    async function skip() {
      log(uplifting_packages_upload_all.name, {
        folder,
        skipped: true,
      });
    }
    try {
      await upload();
    } catch (error) {
      await skip();
    }
  }
  await each_async(unique_folders, folder_each);
  return uploaded;
}
