import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_versions_downloaded } from "./ebible_versions_downloaded.mjs";
import { ebible_bible_folders_verses_punctuation_only_path } from "./ebible_bible_folders_verses_punctuation_only_path.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { ebible_bible_folder_verses_punctuation_only } from "./ebible_bible_folder_verses_punctuation_only.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { each_async } from "./each_async.mjs";
export async function ebible_bible_folders_verses_punctuation_only_write() {
  "Every translation on this disk asked which of its verses carry punctuation and nothing else, written down where the answer can be read back without measuring again.";
  "IT IS WRITTEN RATHER THAN RETURNED BECAUSE THE WALK COSTS HOURS. One translation takes about seven seconds and there are fifteen hundred of them, so an answer living only in what a command printed would be measured again by the next person who wanted it.";
  "THE FILE IS REWRITTEN AFTER EVERY TRANSLATION THAT HAS ANY, not once at the end. A walk of some hours that keeps its answer in memory loses all of it to one stumble, and there is nothing to be gained by holding it back - the file is small, because a translation carrying any of these carries a handful.";
  "The translations are walked ONE AT A TIME on purpose. The run this replaces asked the network for six thousand chapters at once and read the fetches that failed as gaps in the bibles; going one at a time costs wall-clock and can make no such mistake, and the pages are already on this disk.";
  "A translation that throws is named rather than skipped, for the same reason a chapter that will not parse is: a translation nobody could read is not evidence that it holds no such verses.";
  arguments_assert(arguments, 0);
  let bible_folders = await ebible_versions_downloaded();
  let measured = [];
  let folders_unreadable = [];
  let walked = [];
  let path = ebible_bible_folders_verses_punctuation_only_path();
  function verses_size(found) {
    let verses = property_get(found, "found");
    let size = list_size(verses);
    return size;
  }
  async function written() {
    let verses = list_map_sum(measured, verses_size);
    let summary = {
      bible_folders: list_size(bible_folders),
      walked: list_size(walked),
      folders_unreadable,
      folders_with_any: list_size(measured),
      verses,
    };
    await file_write_json(path, {
      summary,
      measured,
    });
    return summary;
  }
  async function folder_scan(bible_folder) {
    async function folder_read_one() {
      let read =
        await ebible_bible_folder_verses_punctuation_only(bible_folder);
      return read;
    }
    let found = await catch_null_async(folder_read_one);
    list_add(walked, bible_folder);
    let unread = null_is(found);
    if (unread) {
      list_add(folders_unreadable, bible_folder);
      await written();
      return;
    }
    let verses = property_get(found, "found");
    let any = list_empty_not_is(verses);
    if (any) {
      list_add(measured, found);
      await written();
    }
  }
  await each_async(bible_folders, folder_scan);
  let r = await written();
  return r;
}
