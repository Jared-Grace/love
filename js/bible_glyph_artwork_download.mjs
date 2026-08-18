import { bible_glyph_artwork_urls } from "./bible_glyph_artwork_urls.mjs";
import { http_text_first_or_null } from "./http_text_first_or_null.mjs";
import { bible_glyph_artwork_folder } from "./bible_glyph_artwork_folder.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { bible_glyph_artwork_source } from "./bible_glyph_artwork_source.mjs";
import { property_get } from "./property_get.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { bible_glyph_artwork_names } from "./bible_glyph_artwork_names.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine } from "./text_combine.mjs";
import { not } from "./not.mjs";
export async function bible_glyph_artwork_download() {
  "Fetch a drawn file for every glyph in the vocabulary and write it under this repo's own name for that glyph, reporting the ones the artwork set does not answer to.";
  "IT TAKES NO ARGUMENTS, AND THAT IS THE SAFETY. Every address it asks for is worked out from two committed tables - the glyph names and the artwork names - so there is no way to point it at an address of your choosing. A function that took a url would be a way to fetch anything at all wearing a helpful name, and this deliberately is not one.";
  "A MISS IS REPORTED AND NEVER THROWN. The artwork names were written by a person from knowing the emoji, so a few will be spelled the set's own way instead; stopping at the first would mean one run per mistake, and collecting them means one run for all of them. The report is the list to correct, and running it again after correcting is free because a file already written is simply written again.";
  "THE NOTICE TRAVELS WITH THE FILES, and it is fetched before any of them rather than after. The artwork is under a licence that permits all of this and asks that the copyright notice go wherever the work goes, so the notice is written into the same folder as the pictures. Fetching it first is what makes that promise true even of a run that fails halfway: there is no moment at which a picture sits in the folder without the notice beside it.";
  let folder = bible_glyph_artwork_folder();
  await folder_exists_ensure(folder);
  let source = bible_glyph_artwork_source();
  let licence_url = property_get(source, "licence_url");
  let licence = await http_text_or_null(licence_url);
  let b = null_is(licence);
  let licence_read = not(b);
  assert_json(licence_read, {
    licence_url,
    hint: "the artwork's licence could not be fetched, and the pictures must not be written without the notice that has to travel with them - has the address moved?",
  });
  let licence_path = path_join([folder, "LICENSE"]);
  await file_overwrite(licence_path, licence);
  let names = bible_glyph_artwork_names();
  let missing = [];
  let written = [];
  for (let entry of names) {
    let urls = bible_glyph_artwork_urls(entry.asset);
    let svg = await http_text_first_or_null(urls);
    let absent = null_is(svg);
    if (absent) {
      list_add(missing, entry);
      continue;
    }
    let file_name = text_combine(entry.glyph, ".svg");
    let f_path = path_join([folder, file_name]);
    await file_overwrite(f_path, svg);
    list_add(written, entry.glyph);
  }
  let r = {
    written_count: written.length,
    missing,
  };
  return r;
}
