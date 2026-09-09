import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_reading_junk_words } from "./bible_usfm_reading_junk_words.mjs";
import { property_get } from "./property_get.mjs";
import { less_than } from "./less_than.mjs";
import { json_to } from "./json_to.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
export async function bible_usfm_reading_junk_words_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: prove that no word this repo hands to whoever copies a chapter of the Berean is a word English cannot make. Throws so the dispatcher seam exits nonzero.");
  ("★ IT IS THE ONE CHECK ON THIS SHELF WITH NOTHING TO BE BLIND WITH. Every other one sets the reading beside a second publication, and a comparison sees only where the two differ - so a fault that came from the material behind both of them reads as agreement and passes. That is not a worry, it is what happened: three stray letters stood in Genesis 35 and Acts 4 with both publications carrying them and the sweep calling those two chapters clean. This asks the language instead of a source, so no shared upstream can hide anything from it.");
  ("IT RATCHETS AGAINST NOTHING RATHER THAN AGAINST A LIST, because a word English cannot make is never a thing to be allowed. If one ever turns up honestly - a printing that spells a name with a colon in it - that is a judgement for a person, and the right answer is to look at the verse and then decide, not to have a list standing ready to swallow it.");
  ("HOW MANY CHAPTERS WERE READ IS ASSERTED FIRST, and leaving that out is how a check like this really dies. A shelf that moved leaves it reading nothing, finding nothing, and passing - and nothing found is exactly what a clean bible looks like. The other half of proving it can still fail is the corpus beside it, where every shape it knows is written out as it really stood in the file.");
  let found = await bible_usfm_reading_junk_words("bsb");
  let read = property_get(found, "read");
  let rows = property_get(found, "rows");
  let too_few = less_than(read, 1189);
  if (too_few) {
    throw new Error(
      "bible usfm reading junk words gate: only " +
        read +
        " chapters were read, and there are 1189 - did the shelf move?",
    );
  }
  for (let row of rows) {
    console.log("junk       " + json_to(row));
  }
  let faults = list_size(rows);
  console.log(
    "chapters read: " + read + "   words no language makes: " + faults,
  );
  let failed = greater_than(faults, 0);
  if (failed) {
    throw new Error(
      "bible usfm reading junk words gate: " +
        faults +
        " words that English cannot make are being handed to a reader - open each verse named above, read it in a second published edition of the same translation, and write the mend down one place at a time",
    );
  }
  let r = {
    read,
    faults: 0,
  };
  return r;
}
