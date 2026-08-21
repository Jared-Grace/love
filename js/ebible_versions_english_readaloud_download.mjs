import { ebible_versions_english_downloadable_cache } from "./ebible_versions_english_downloadable_cache.mjs";
import { ebible_versions_readaloud_missing } from "./ebible_versions_readaloud_missing.mjs";
import { list_map_async_record_try } from "./list_map_async_record_try.mjs";
import { ebible_version_readaloud_download } from "./ebible_version_readaloud_download.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_versions_english_readaloud_download() {
  "Fetch the read-aloud edition of every English bible upstream offers that has not got one on this disk yet.";
  "The search index walks the English bibles that can be downloaded, and it cuts each chapter into verses out of the read-aloud edition. So a bible whose pages are all here and whose read-aloud half is not carries not one word into the index, and says nothing about it: the walk opens every chapter, has nothing to lay against the marks, and passes over the lot. Twenty-seven were in that state.";
  "They were never asked for. What fetches read-aloud walks the bibles this repo ships, and only one English bible is in that list, so the other fifty-two were only ever fetched by somebody naming them one at a time - twenty-six of them had been, and it looked from the outside exactly like a settled state rather than a job half done.";
  "One after another rather than all at once, because this is somebody else's server and twenty-seven zips arriving together is a burst nobody asked it to absorb.";
  "A bible whose fetch fails is answered with nothing and the rest go on. The walk this replaces stopped where it stood, so one address nobody publishes meant every bible behind it in the order was never fetched at all - and those looked merely unfetched, which is the same silence twice over.";
  "What is already on disk is left alone, so this can be run again after a fetch that died part way through and it picks up exactly what is still missing.";
  let bible_folders = await ebible_versions_english_downloadable_cache();
  let missing = await ebible_versions_readaloud_missing(bible_folders);
  let fetched = await list_map_async_record_try(
    missing,
    ebible_version_readaloud_download,
  );
  let remaining = await ebible_versions_readaloud_missing(bible_folders);
  let r = {
    offered: list_size(bible_folders),
    missing: list_size(missing),
    remaining,
    fetched,
  };
  return r;
}
