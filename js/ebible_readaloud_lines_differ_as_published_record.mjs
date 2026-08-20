import { baseline_known_bible_names_replace } from "./baseline_known_bible_names_replace.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_readaloud_download_refresh } from "./ebible_version_readaloud_download_refresh.mjs";
import { ebible_readaloud_lines_differ } from "./ebible_readaloud_lines_differ.mjs";
import { ebible_readaloud_lines_differ_as_published_path } from "./ebible_readaloud_lines_differ_as_published_path.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
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
  ("This bible's names are put back from what was just found rather than added to, which is what lets a verdict be taken back. Without that a chapter its publishers had since mended would go on being excused for ever, and nothing would ever say so.");
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
