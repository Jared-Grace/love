export async function bible_search_words_stale_remove() {
  "Take down the words storage still holds that the search index no longer knows.";
  "Putting the index up again only writes over the words it still has. A word the index has dropped - one standing only in a chapter now left out, because the bible it came from numbers that chapter its own way - is not written over by anything, so it stays up there answering with the addresses it was built from and the search goes on being wrong about exactly the words the rebuild was for.";
  "Which words those are is worked out next door, where it can be read first without anything being deleted.";
  let stale = await bible_search_words_stale();
  let paths = property_get(stale, "stale");
  await each_async(paths, firebase_storage_delete);
  let removed = list_size(paths);
  let r = {
    stale,
    removed,
  };
  return r;
}
