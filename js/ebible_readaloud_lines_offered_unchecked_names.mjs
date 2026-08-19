export async function ebible_readaloud_lines_offered_unchecked_names() {
  "Every bible a reader can choose that the record names without having read a chapter of it, each named by its folder alone.";
  "One flat name apiece, because what watches this list only ever asks whether a name is in it. How many chapters went unread and whether the bible was measured at all are worth knowing and are next door; a ratchet needs neither, and putting them in a name would make the same bible a different name every time a download half finished.";
  "Read out of the record rather than measured, because measuring opens every chapter of every bible and takes the better part of an hour. The record is rewritten by the one command that does the measuring.";
  let path = ebible_readaloud_lines_path();
  let recorded = await file_read_json(path);
  let unchecked = ebible_readaloud_lines_offered_unchecked(recorded);
  let property_name = bible_folder_key();
  let names = list_map_property(unchecked, property_name);
  return names;
}
