export function app_emoji_bible_key_shown_set(shown) {
  "$plain shown";
  "the answer says whether the reader wants the key under each verse. It is a yes or a no to remember and nothing that runs.";
  "Remember whether this reader wants the key under each verse.";
  "The reading half of this pair owns the place it is kept, and its own name is what names that place, so the two cannot end up looking in different drawers.";
  storage_local_set(app_emoji_bible_key_shown_get, "key_shown", shown);
}
