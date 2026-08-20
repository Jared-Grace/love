import { door43_version_or_null } from "./door43_version_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function ebible_readaloud_published_is(bible_folder) {
  "$plain bible_folder";
  "Whether eBible publishes a read-aloud edition of this bible at all - which is what every read-aloud question is really asking before it asks anything else.";
  "A bible carried from the other catalogue arrives with its verses already marked in its own files. eBible has no page for it and no edition of it, so every read-aloud question answered about it comes back as though something were missing: no edition published, none downloaded, none measurable. All three are true of eBible and none of them is true of the bible, which is being served to readers correctly.";
  "Asked as one word so that the several places that need it cannot drift apart. The set of shipped bibles this holds for is next door and is the same question asked of the whole list; a walk over some other list - the offered ones, say, or the ones with no original-language text of their own - filters it with this instead, rather than writing the same reasoning out a second time and finding out it was missed when a download dies part way through.";
  let carried = door43_version_or_null(bible_folder);
  let published = null_is(carried);
  return published;
}
