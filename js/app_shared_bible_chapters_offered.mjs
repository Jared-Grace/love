import { app_shared_bible_chapters_offered_key } from "./app_shared_bible_chapters_offered_key.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export async function app_shared_bible_chapters_offered(context) {
  "The chapters this app offers a reader, or nothing at all where it named no way of finding out - and nothing means no restriction rather than no chapters.";
  "An app that can only do its work on some chapters is the reason this is asked. Every bible reader here can show any chapter there is, because showing a verse needs only that the verse exists; an app that has to have been written for you, chapter by chapter, can offer a reader exactly what has been written and no more.";
  "Saying nothing is how every bible reader here has always behaved and still means the same thing: this app reads whatever there is. So an app that never mentions the matter is unchanged by this existing, and the two pickers go on listing the whole bible for it.";
  "The sibling of the same question asked about languages, and deliberately the same shape, because it is the same promise: never offer a reader something the app cannot then do. That one is answered from a list because the languages an app can serve are known where the app is written. This one has to go and ask, because what has been written for a reader is on a disk nothing here can reach.";
  let key = app_shared_bible_chapters_offered_key();
  let ask = property_get_or_null(context, key);
  let unnamed = null_is(ask);
  if (unnamed) {
    return null;
  }
  let chapter_codes = await ask();
  return chapter_codes;
}
