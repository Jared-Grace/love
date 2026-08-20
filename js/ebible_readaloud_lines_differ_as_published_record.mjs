import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_readaloud_download_refresh } from "./ebible_version_readaloud_download_refresh.mjs";
import { ebible_readaloud_lines_differ } from "./ebible_readaloud_lines_differ.mjs";
import { ebible_readaloud_lines_differ_as_published_path } from "./ebible_readaloud_lines_differ_as_published_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_difference } from "./list_difference.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_filter_starts_with_not } from "./list_filter_starts_with_not.mjs";
export async function ebible_readaloud_lines_differ_as_published_record(
  bible_folder,
) {
  "$plain bible_folder";
  arguments_assert(arguments, 1);
  ("Fetch one bible's reading-aloud edition again from scratch, measure it again, and record every chapter that still disagrees with its pages as one that was published that way.");
  ("The proving is the command. A chapter that does not match its page looks identical whether the disagreement was published or the download stopped early, and no amount of staring at the file we hold will separate those two. Deleting what we hold and asking for it again does: if a different file comes back, the copy was at fault; if the same file comes back, this is what was published. So the verdict is not something a person asserts here, it is something this command goes and finds out.");
  ("What the same file coming back does not say is why the counts disagree, and there is more than one why. A reading aloud can lack verses the page has, and it can also say as two verses what the page gives as one, with every word present on both sides and only the dividing different. The first cannot be mended because the words are gone; the second cannot be mended because deciding which line belongs under which number is a judgement about a translation and not a rule. Neither is on this side of the download, which is all a name here is claiming.");
  ("Asked of a whole bible rather than a chapter, because the download is a whole bible either way. One fetch settles all sixteen chapters of a book that stops after three verses apiece, where sixteen fetches would be the same file sixteen times.");
  ("Only what still disagrees after the fresh fetch is recorded. A chapter the new copy puts right simply does not appear, which is the answer nobody wanted to hear and the reason for fetching first rather than recording first.");
  ("What this bible's names were before is thrown away and written again from what was just measured, while every other bible's are kept untouched. So a chapter the fresh copy puts right does not merely fail to be added, it leaves - which is the only way a verdict here can ever be taken back, and without it a chapter mended upstream would go on being excused for ever.");
  ("The main record of counts is left standing and will be stale about this bible afterwards, since the files under it have just changed. Measure the lot again when the recording is done.");
  await ebible_version_readaloud_download_refresh(bible_folder);
  let measured = await ebible_readaloud_lines_differ(bible_folder);
  let differ = property_get(measured, "differ");
  function chapter_named(counts) {
    let chapter_code = property_get(counts, "chapter_code");
    let name = text_combine_multiple([bible_folder, " ", chapter_code]);
    return name;
  }
  let names = list_map(differ, chapter_named);
  let path = ebible_readaloud_lines_differ_as_published_path();
  let recorded = await baseline_known_read(path);
  let added = list_difference(names, recorded);
  let prefix = text_combine_multiple([bible_folder, " "]);
  let others = list_filter_starts_with_not(recorded, prefix);
  let combined = lists_combine([others, names]);
  let gone = list_difference(recorded, combined);
  let count = await baseline_known_write(combined, path);
  let r = {
    bible_folder,
    added,
    gone,
    recorded: count,
  };
  return r;
}
