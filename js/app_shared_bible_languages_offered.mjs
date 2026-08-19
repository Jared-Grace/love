import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { app_shared_bible_languages_offered_key } from "./app_shared_bible_languages_offered_key.mjs";
export function app_shared_bible_languages_offered(context) {
  "The languages this app offers a reader: its own list where it named one, and every translation there is where it did not.";
  "An app that can only do its work in some languages is the reason this is asked at all. Offering a reader a language the app cannot serve them in is a promise broken the moment they take it - they choose, the page changes, and the thing the app is for stops happening with nothing said about why.";
  "Saying nothing is how every bible reader here has always behaved and still means the same thing: this app reads whatever there is. So an app that never mentions the matter is handed the whole set and is unchanged by this existing.";
  let key = app_shared_bible_languages_offered_key();
  let named = property_get_or_null(context, key);
  let unnamed = null_is(named);
  if (unnamed) {
    let all = ebible_languages();
    return all;
  }
  return named;
}
