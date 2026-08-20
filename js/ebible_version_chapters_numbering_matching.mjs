import { ebible_version_chapters_numbering } from "./ebible_version_chapters_numbering.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_version_chapters_numbering_matching(bible_folder) {
  "$plain bible_folder";
  "Just the chapters of one bible whose verse numbers mean in it what they mean in the English bible everything is read in - the ones the search index may take an address from.";
  let numbering = await ebible_version_chapters_numbering(bible_folder);
  let matching = property_get(numbering, "matching");
  return matching;
}
