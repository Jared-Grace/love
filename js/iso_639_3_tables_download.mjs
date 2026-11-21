import { arguments_assert } from "./arguments_assert.mjs";
import { http } from "./http.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function iso_639_3_tables_download() {
  "Fetches the two tables the ISO 639-3 standard is published as, from SIL - which keeps the standard - and keeps a copy of each in the repo: every language's three-letter code beside its two-letter one where it has one, and which languages each language family is made of.";
  "Kept in the repo rather than fetched when wanted, so what the apps accept in a link changes only when somebody downloads again and the change is committed, read, and gated - never because a site changed overnight.";
  "Takes nothing on purpose: the site and the two files are fixed here, so running it can only ever fetch these two tables.";
  arguments_assert(arguments, 0);
  let base = "https://iso639-3.sil.org/sites/iso639-3/files/downloads/";
  let names = ["iso-639-3.tab", "iso-639-3-macrolanguages.tab"];
  let r = [];
  for (let name of names) {
    let url = base + name;
    let bytes = await http(url);
    let text = buffer_text_to(bytes);
    let file_path = "data/iso_639_3/" + name;
    await file_overwrite(file_path, text);
    r.push({
      file_path,
      size: text.length,
    });
  }
  return r;
}
