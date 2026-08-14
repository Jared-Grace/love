import { global_function_call_cache_async } from "./global_function_call_cache_async.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { ebible_verse_download } from "./ebible_verse_download.mjs";
export async function ebible_verse_browser(
  bible_folder,
  chapter_code,
  verse_number,
) {
  "One verse of one bible, fetched the first time it is asked for and remembered for the rest of the page's life.";
  "$plain bible_folder";
  "$plain chapter_code";
  "$plain verse_number";
  "A verse of scripture does not change while somebody is reading it, so asking twice can only ever get the same words back. It was asked every single time one was drawn: going off to the picker and pressing the way back downloaded the passage again, and a page showing forty verses in three languages made a hundred and twenty round trips to do it. The words were already in the tab.";
  "The whole-chapter reader beside this one has remembered its answers for a while, in exactly this way. This is the one verse at a time door, and it was simply left out - the line below looks like a cache and is not one. It settles which function does the downloading, once, so that a caller can put a different one there; what comes back from that function was never kept.";
  "What the remembering is filed under is the downloader's name rather than this function's, and that is deliberate. This function's own name is already spoken for by the settling below - both of them write where the page keeps things by the name of the function they are given, so filing under the same name would have each of them find the other's value sitting there. The downloader's name is also the honest one for what is kept: these are the answers downloads gave, filed under the arguments they were asked with.";
  async function get() {
    let verse_get = global_function_initialize(
      ebible_verse_browser,
      ebible_verse_download,
    );
    let verse = await verse_get(bible_folder, chapter_code, verse_number);
    return verse;
  }
  let value = await global_function_call_cache_async(
    ebible_verse_download,
    arguments,
    get,
  );
  return value;
}
