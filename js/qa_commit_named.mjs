import { arguments_assert } from "./arguments_assert.mjs";
import { qa_commit_named_all } from "./qa_commit_named_all.mjs";
import { qa_commit_named_entry_stale_is } from "./qa_commit_named_entry_stale_is.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
export async function qa_commit_named() {
  "Every commit whose judging still stands, each answering which gates were red and which functions each of them named";
  "A judging that no longer stands is left out here rather than at each asker, because there are eight of them and they all want the same thing. Every one is asking a question about a commit - what is red, what may be deployed, has this been looked at already - and not one of them wants the answer to come out of a record nobody would believe. A filter written eight times is a filter that will one day be written seven times";
  "Leaving it out is not the same as deleting it. Nothing is written here, and the entry stays in the file for the two commands whose business is the file itself: one recomputes the names out of what each gate said, which can put a whole class of these right without a gate being run again, and the other forgets what cannot be helped. Filtering here only stops it being answered from in the meantime, which is the part that costs somebody a bad deployment";
  "Doing it on the way in rather than on the way out is what makes it safe to forget about. An asker that has to remember to check is an asker that will not, and the one that forgets is discovered by the wrong answer it gave";
  "Measured 2026-08-20 over eight hundred and eighty six judgings: reading and parsing the file is three hundred and fifty milliseconds and asking the question of every entry in it is sixty. It is a sixth added to a reading that was already the expensive part, which is a fair price for an answer that cannot be a lie";
  arguments_assert(arguments, 0);
  let all = await qa_commit_named_all();
  let standing = {};
  for (let commit of object_property_names(all)) {
    let entry = property_get(all, commit);
    let stale = qa_commit_named_entry_stale_is(entry);
    if (stale) {
      continue;
    }
    standing[commit] = entry;
  }
  return standing;
}
