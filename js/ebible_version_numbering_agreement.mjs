import { ebible_version_chapters_numbering } from "./ebible_version_chapters_numbering.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { divide } from "./divide.mjs";
export async function ebible_version_numbering_agreement(bible_folder) {
  "$plain bible_folder";
  "How far one bible numbers its verses the way the English bible everything is read in does, as three numbers rather than as two lists of chapter names.";
  "The chapters themselves are next door; this is the reading to look at when the question is which bibles the index is mostly turning away, over fifty of them at once.";
  let numbering = await ebible_version_chapters_numbering(bible_folder);
  let shared_codes = property_get(numbering, "shared");
  let matching_codes = property_get(numbering, "matching");
  let shared = list_size(shared_codes);
  let matching = list_size(matching_codes);
  let ratio = divide(matching, shared);
  let r = {
    bible_folder,
    shared,
    matching,
    ratio,
  };
  return r;
}
