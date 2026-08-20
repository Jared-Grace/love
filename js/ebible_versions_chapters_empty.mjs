import { ebible_languages_without_original_bible_folders } from "./ebible_languages_without_original_bible_folders.mjs";
import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_map_async_filter_null_not_is } from "./list_map_async_filter_null_not_is.mjs";
export async function ebible_versions_chapters_empty() {
  "Every bible a reader can choose that the remembered answer holds no chapter of - each named by its folder alone.";
  "A reader picking one of these is shown nothing, and is shown nothing without any error being raised anywhere, because an empty answer travels as an answer. So this is the one question that asks what a reader would actually receive, rather than what is on the disk or what a record says was measured.";
  "It reads what was remembered rather than working it out again. Working out one bible's chapters opens every chapter of it, and the remembered answer is exactly the thing a reader is served, so reading it is both the cheaper question and the more truthful one - a bible whose text arrived on this machine an hour ago is still empty here until something forgets the old answer, and that gap is the whole of what this is for.";
  "Emptiness has more than one cause and this does not try to tell them apart. The text may never have been fetched, or it may be here and have been asked about before it arrived, or the bible may genuinely hold nothing that can be read. All three are put right by forgetting the answer and working it out again, and the ones that come back empty a second time are the only ones that were ever really about the bible.";
  "The original-language text is not asked about. It is nobody's translation, no reader is offered it as one, and it is built from its own pages rather than from a reading-aloud edition.";
  let offered = ebible_languages_without_original_bible_folders();
  async function empty_or_null(bible_folder) {
    let chapters = await ebible_version_chapters_cache(bible_folder);
    let none = list_empty_is(chapters);
    if (none) {
      return bible_folder;
    }
    return null;
  }
  let empty = await list_map_async_filter_null_not_is(offered, empty_or_null);
  return empty;
}
