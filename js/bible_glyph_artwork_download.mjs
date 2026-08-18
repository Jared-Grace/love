export async function bible_glyph_artwork_download() {
  "Fetch a drawn file for every glyph in the vocabulary and write it under this repo's own name for that glyph, reporting the ones the artwork set does not answer to.";
  "IT TAKES NO ARGUMENTS, AND THAT IS THE SAFETY. Every address it asks for is worked out from two committed tables - the glyph names and the artwork names - so there is no way to point it at an address of your choosing. A function that took a url would be a way to fetch anything at all wearing a helpful name, and this deliberately is not one.";
  "A MISS IS REPORTED AND NEVER THROWN. The artwork names were written by a person from knowing the emoji, so a few will be spelled the set's own way instead; stopping at the first would mean one run per mistake, and collecting them means one run for all of them. The report is the list to correct, and running it again after correcting is free because a file already written is simply written again.";
  "THE NOTICE TRAVELS WITH THE FILES. The artwork is under the MIT licence, which permits all of this and requires the copyright notice to go wherever the work goes, so the licence file is written into the folder alongside them rather than left implied somewhere else.";
  let folder = bible_glyph_artwork_folder();
  await folder_make(folder);
  let names = bible_glyph_artwork_names();
  let missing = [];
  let written = [];
  for (let entry of names) {
    let url = bible_glyph_artwork_url(entry.asset);
    let svg = await url_text_or_null(url);
    let absent = null_is(svg);
    if (absent) {
      list_add(missing, entry);
      continue;
    }
    let f_path = path_join([folder, entry.glyph + ".svg"]);
    await file_overwrite(f_path, svg);
    list_add(written, entry.glyph);
  }
  let r = {
    written_count: written.length,
    missing,
  };
  return r;
}
