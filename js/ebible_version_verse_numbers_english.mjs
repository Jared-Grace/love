export async function ebible_version_verse_numbers_english() {
  "Every verse number the English bible everything else is read in carries, kept under the chapter it belongs to.";
  "Held in memory for the rest of the run rather than read again, because every other bible is measured against this one: building the search index asked it once for each of the fifty-odd bibles, and each asking was the same five megabytes read off the disk and taken apart again.";
  let english = ebible_folder_english();
  let v = await invoke_cache_global(ebible_version_verse_numbers, [english]);
  return v;
}
