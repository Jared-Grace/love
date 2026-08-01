export function storage_local_key_words_path() {
  "Where the record of the words that have escaped into browser storage keys is kept.";
  let p = text_combine_multiple([
    "data/",
    fn_name("storage_local_key_words"),
    ".json",
  ]);
  return p;
}
