import { bible_usfm_version_get } from "./bible_usfm_version_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter_equal_not } from "./list_filter_equal_not.mjs";
import { list_join } from "./list_join.mjs";
export function bible_usfm_version_credit_text(version) {
  "$plain version";
  "Whose words these are: the translation's name, followed by the terms it is given under where it asks for them.";
  "THE TERMS ARE APPENDED ONLY WHERE THE TRANSLATION ASKS FOR THEM, AND THE EMPTY CASE IS NOT AN OVERSIGHT. The Berean is in the public domain and asks for nothing, so printing a licence beside it would state something untrue about it. The unfoldingWord texts are share-alike and ask to be named wherever their words travel, and a video published without that line is a copy made outside the terms it was given under.";
  let known = bible_usfm_version_get(version);
  let name = property_get(known, "name");
  let licence = property_get(known, "licence");
  let parts = [name, licence];
  let said = list_filter_equal_not(parts, "");
  let joined = list_join(said, "  ·  ");
  return joined;
}
