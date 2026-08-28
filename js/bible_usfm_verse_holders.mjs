import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function bible_usfm_verse_holders(carried, words_by_version, reference) {
  "Every bible on the shelf that carries this one verse, each handed back beside the meaning-carrying words it says there.";
  "A bible that does not carry the verse is absent from the answer rather than standing in it holding nothing. Everything downstream counts what it is handed - how many bibles agree about this verse, and which of them says nothing any of the others says - and a bible standing there with no words would be counted as sharing nothing, which is the reading kept for a bible that does carry the verse and says it another way entirely.";
  "The words were gathered once, per bible, before any verse was asked about, so this reads them back rather than working them out again. A verse is asked about as many times as there are bibles holding it, and re-splitting the same line into words that many times is work nobody needs done twice.";
  arguments_assert(arguments, 3);
  let holders = [];
  for (let read of carried) {
    let version = property_get(read, "version");
    let words_by_reference = property_get(words_by_version, version);
    let content = property_get_or_null(words_by_reference, reference);
    let b = null_is(content);
    let held = not(b);
    if (held) {
      let holder = {
        version,
        content,
      };
      list_add(holders, holder);
    }
  }
  return holders;
}
