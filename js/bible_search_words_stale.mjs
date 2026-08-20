export async function bible_search_words_stale() {
  "The words storage still holds that the search index no longer knows.";
  "Split out from the taking down of them so the set can be read before it is acted on. A sweep of this shape has one way to go badly wrong: if the two sides spell a word differently - one encoding a letter the other leaves alone - then every word looks unknown and the whole index is deleted. Counting first catches that, because the words just put up must all be found again, so the number left over has to be exactly what storage holds less what the index knows.";
  let result = await ebible_versions_english_downloadable_words_lookup_cache();
  let words = properties_get(result);
  let wanted = list_map(words, bible_search_word_path);
  let folder = bible_search_folder();
  ("storage is asked for a prefix and not for a folder, so the slash has to be spelled out here - without it the bucket answers four hundred rather than listing anything");
  let slash = text_slash_forward();
  let prefix = list_join_empty([folder, slash]);
  let held = await firebase_storage_list_jg(prefix);
  let stale = list_difference(held, wanted);
  let r = {
    held: list_size(held),
    wanted: list_size(wanted),
    stale,
  };
  return r;
}
