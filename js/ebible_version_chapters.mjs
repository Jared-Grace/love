import { log } from "./log.mjs";
import { berean_version_or_null } from "./berean_version_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { berean_usfm_download } from "./berean_usfm_download.mjs";
import { berean_version_chapters } from "./berean_version_chapters.mjs";
import { door43_version_or_null } from "./door43_version_or_null.mjs";
import { door43_version_record_download } from "./door43_version_record_download.mjs";
import { property_get } from "./property_get.mjs";
import { door43_version_chapters } from "./door43_version_chapters.mjs";
import { sword_version_or_null } from "./sword_version_or_null.mjs";
import { sword_version_record_download } from "./sword_version_record_download.mjs";
import { sword_version_chapters } from "./sword_version_chapters.mjs";
import { ebible_version_download } from "./ebible_version_download.mjs";
import { ebible_chapters_each_verses } from "./ebible_chapters_each_verses.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
export async function ebible_version_chapters(bible_folder) {
  "Every chapter of one bible with its verses, whichever of the four places the bible came from.";
  "A bible from the Door43 catalogue is read from its own marks next door and answered here, so that everything downstream - the caching, the uploading, the chapters a reader turns between - carries on knowing only a folder name. Where a text came from is how it was got, not what it is.";
  "A bible carried as a Sword module is read the same way and for the same reason. Its marks say which book and which chapter every run of verses belongs to, so it too is read once rather than counted.";
  "The Berean Standard Bible is read from its publisher rather than from the archive's copy of it, and answered here the same way. It is the same translation either way, so nothing downstream changes and no folder name moves; what changes is which printing the words are. The archive rebuilds from whichever printing it last took, and it was a printing behind - about eleven hundred verses of different wording, none of which announced itself, because a stale copy that is faithfully copied still reads as current.";
  "This is the one road that must take that branch and the verse-by-verse road beside it is the other. Both publish words. Leaving either on the archive would put two printings of one bible into storage under one folder name, and nothing anywhere would report the disagreement - a reader would simply get whichever door had been through last.";
  log(ebible_version_chapters.name, {
    t: ebible_version_chapters,
    bible_folder,
  });
  let berean = berean_version_or_null(bible_folder);
  let published = null_not_is(berean);
  if (published) {
    await berean_usfm_download();
    let read = await berean_version_chapters();
    return read;
  }
  let door = door43_version_or_null(bible_folder);
  let elsewhere = null_not_is(door);
  if (elsewhere) {
    await door43_version_record_download(door);
    let door43_folder = property_get(door, "door43_folder");
    let carried = await door43_version_chapters(door43_folder);
    return carried;
  }
  let sword = sword_version_or_null(bible_folder);
  let packaged = null_not_is(sword);
  if (packaged) {
    await sword_version_record_download(sword);
    let sword_folder = property_get(sword, "sword_folder");
    let walked = await sword_version_chapters(sword_folder);
    return walked;
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
