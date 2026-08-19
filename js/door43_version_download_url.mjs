import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function door43_version_download_url(door43_folder, tag) {
  arguments_assert(arguments, 2);
  ("$plain door43_folder");
  ("$plain tag");
  ("Where one released bible of the Door43 catalogue is kept, as a single zip holding one usfm file per book.");
  ("A released version is asked for by name rather than whatever the shelf holds today. What a bible says is the one thing about this repo that must not change underneath a reader, and a moving address would let it - the Amharic here is version seven point two, published on the twenty first of April 2022, and that is what was read, judged and licensed.");
  let v = text_combine_multiple([
    "https://git.door43.org/Door43-Catalog/",
    door43_folder,
    "/archive/",
    tag,
    ".zip",
  ]);
  return v;
}
