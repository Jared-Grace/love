import { app_shared_bible_chapters_offered } from "./app_shared_bible_chapters_offered.mjs";
import { ebible_index_flat_chapters_kept } from "./ebible_index_flat_chapters_kept.mjs";
import { ebible_index_flat_chosen } from "./ebible_index_flat_chosen.mjs";
import { null_is } from "./null_is.mjs";
export async function app_shared_bible_index_flat_offered(
  context,
  bible_folders,
) {
  "The verses a picker may draw from: every verse the reader's own bibles have between them, cut down to the chapters this app is willing to offer.";
  "Both pickers ask this one question rather than each cutting the list for itself. The book list, the chapter list, and the chapter a chosen book opens at are all read off the same list, so a restriction applied here reaches all three, and there is no way for a book to be offered whose chapters have all been taken away.";
  "An app that named no restriction gets the list exactly as it was, which is what every bible reader here has always been given.";
  let list = await ebible_index_flat_chosen(bible_folders);
  let chapter_codes = await app_shared_bible_chapters_offered(context);
  let unrestricted = null_is(chapter_codes);
  if (unrestricted) {
    return list;
  }
  let kept = ebible_index_flat_chapters_kept(list, chapter_codes);
  return kept;
}
