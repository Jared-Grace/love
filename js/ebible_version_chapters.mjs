import { door43_version_or_null } from "./door43_version_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { door43_version_download } from "./door43_version_download.mjs";
import { door43_version_chapters } from "./door43_version_chapters.mjs";
import { log } from "./log.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { ebible_chapters_each_verses } from "./ebible_chapters_each_verses.mjs";
import { ebible_version_download } from "./ebible_version_download.mjs";
export async function ebible_version_chapters(bible_folder) {
  "Every chapter of one bible with its verses, whichever of the two places the bible came from.";
  "A bible from the Door43 catalogue is read from its own marks next door and answered here, so that everything downstream - the caching, the uploading, the chapters a reader turns between - carries on knowing only a folder name. Where a text came from is how it was got, not what it is.";
  log(ebible_version_chapters.name, {
    t: ebible_version_chapters,
    bible_folder,
  });
  let door = door43_version_or_null(bible_folder);
  let elsewhere = null_not_is(door);
  if (elsewhere) {
    let door43_folder = property_get(door, "door43_folder");
    let tag = property_get(door, "tag");
    await door43_version_download(door43_folder, tag);
    let carried = await door43_version_chapters(door43_folder);
    return carried;
  }
  await ebible_version_download(bible_folder);
  async function lambda(la) {
    await ebible_chapters_each_verses(bible_folder, each_chapter);
    async function each_chapter(chapter_code, verses) {
      la({
        chapter_code,
        verses,
      });
    }
  }
  let list = await list_adder_async(lambda);
  return list;
}
