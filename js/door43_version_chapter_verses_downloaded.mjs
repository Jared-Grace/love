import { arguments_assert } from "./arguments_assert.mjs";
import { door43_version_record_download } from "./door43_version_record_download.mjs";
import { property_get } from "./property_get.mjs";
import { door43_version_chapter_verses } from "./door43_version_chapter_verses.mjs";
export async function door43_version_chapter_verses_downloaded(
  door,
  chapter_code,
) {
  "$plain chapter_code";
  "The verses of one named chapter of a bible held in the Door43 catalogue, fetching and unpacking that bible onto this disk first if it is not here yet.";
  "THE TWO STEPS ARE ONE NAME SO THAT THERE IS ONE ADDRESS TO ASK FOR. They were two calls sitting in a branch, and a branch is something a bundler carries whether or not it is ever walked - so the whole fetch-and-unpack tree travelled into every page that could read a bible. Behind one name the caller asks for it only when it is wanted, and a page that never wants it never holds it.";
  "It takes the catalogue's record of the bible rather than the bible's folder name, because the fetching needs the record and the reading needs the folder, and the record is the one that holds both.";
  arguments_assert(arguments, 2);
  await door43_version_record_download(door);
  let door43_folder = property_get(door, "door43_folder");
  let carried = await door43_version_chapter_verses(
    door43_folder,
    chapter_code,
  );
  return carried;
}
