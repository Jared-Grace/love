import { property_in_list_not } from "./property_in_list_not.mjs";
import { ebible_languages_codes_offered } from "./ebible_languages_codes_offered.mjs";
import { ebible_versions_licences_unknown } from "./ebible_versions_licences_unknown.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { list_filter } from "./list_filter.mjs";
export async function ebible_versions_licences_unknown_language_new() {
  "The unread licence pages worth reading first - the downloaded translations whose terms no machine here could classify, in languages this app offers a reader nothing in.";
  "Reading a page costs a person's time, and the seventeen unread pages are not worth the same. One in a language already offered can at best swap one translation for another; one in a language offered nothing can turn a whole language on. That is the whole of the ordering.";
  "A page carrying no language at all stays in rather than being dropped. Nothing here knows what language it is, so nothing here can say the language is already covered, and a page nobody can place is exactly a page for a person to look at.";
  let records = await ebible_versions_licences_unknown();
  let offered = await ebible_languages_codes_offered();
  let property_name = language_code_key();
  function language_new_is(record) {
    let missing = property_in_list_not(record, property_name, offered);
    return missing;
  }
  let found = list_filter(records, language_new_is);
  return found;
}
