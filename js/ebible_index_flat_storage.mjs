export async function ebible_index_flat_storage(bible_folder) {
  "Every place a bible has a verse, as one file off storage.";
  "The twin next door builds the same list by walking the chapters where it can and downloads this file where it cannot, which is how a page gets it. Here the walk is not an option - it reads folders that only the machine which uploaded the bible has - so this asks for the file and nothing else.";
  "Only the English bible has one uploaded, because only the English one is walked by a page. That is the reason this is worth having: it makes the list of places a reader can ask for a verse cost one download rather than a bible's worth of them.";
  let file_name = ebible_index_flat_upload_name();
  let list = await firebase_storage_download_ebible(bible_folder, file_name);
  return list;
}
