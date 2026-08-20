import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_readaloud_download_refresh } from "./ebible_version_readaloud_download_refresh.mjs";
import { ebible_readaloud_lines_differ } from "./ebible_readaloud_lines_differ.mjs";
import { ebible_chapter_readaloud_heading_only_is } from "./ebible_chapter_readaloud_heading_only_is.mjs";
import { ebible_readaloud_heading_only_baseline_path } from "./ebible_readaloud_heading_only_baseline_path.mjs";
import { baseline_known_bible_names_replace } from "./baseline_known_bible_names_replace.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function ebible_readaloud_heading_only_record(bible_folder) {
  "$plain bible_folder";
  arguments_assert(arguments, 1);
  ("Fetch one bible's reading-aloud edition again from scratch, look at every chapter of it that comes back unread, and record the ones that arrive as a book name and a number and nothing else.");
  ("The proving is the command. A chapter with no words to read aloud looks the same whether nobody published them or the download stopped early, and the record cannot tell those apart because both leave a chapter that cannot be read. Deleting what we hold and asking for it again does tell them apart: if words come back, our copy was at fault; if the same two lines come back, there is nothing further upstream to ask for.");
  ("Until now that proof was something the prose asked a person to do by hand before recording a name, and nothing checked that anybody had. The twenty-one names first put in the record were seeded from a reading, not from a fetch, so three of them stood on a proof and the other eighteen stood on a resemblance to it.");
  ("Measured from scratch rather than read out of the record, because the download has just changed every file underneath it and the record is about the files that were there before. Reading it here would decide which chapters to look at from a state that no longer exists.");
  ("This bible's names are put back from what was just found rather than added to. So a chapter whose words its publishers have since released does not merely fail to be added, it leaves - and without that a chapter mended upstream would go on being recorded as absent for ever.");
  ("The main record of counts is left standing and will be stale about this bible afterwards, since the files under it have just changed. Measure the lot again when the recording is done.");
  await ebible_version_readaloud_download_refresh(bible_folder);
  let measured = await ebible_readaloud_lines_differ(bible_folder);
  let unread = property_get(measured, "unread");
  let names = [];
  async function chapter_named_if(chapter_code) {
    let published_nothing = await ebible_chapter_readaloud_heading_only_is(
      bible_folder,
      chapter_code,
    );
    if (published_nothing) {
      let name = text_combine_multiple([bible_folder, " ", chapter_code]);
      list_add(names, name);
    }
  }
  await each_async(unread, chapter_named_if);
  let path = ebible_readaloud_heading_only_baseline_path();
  let changed = await baseline_known_bible_names_replace(
    bible_folder,
    names,
    path,
  );
  let r = object_merge_set(changed, {
    bible_folder,
  });
  return r;
}
