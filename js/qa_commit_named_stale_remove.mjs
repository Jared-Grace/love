import { qa_commit_named } from "./qa_commit_named.mjs";
import { qa_commit_named_path } from "./qa_commit_named_path.mjs";
import { function_name_unmistakable_is } from "./function_name_unmistakable_is.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
export async function qa_commit_named_stale_remove() {
  "Forgets every judged commit whose kept names the reader could no longer say, so that it is judged again instead of being answered from a record written by a reader that no longer exists";
  "A judgement is remembered under the commit it was made about, and a commit is frozen, so the record was taken to be true forever. Half of that holds. What the gates FOUND at that commit cannot change; which functions each of them was taken to have NAMED was worked out by whatever reader was loaded at the moment of judging, and that reader lives in the working tree rather than in the commit being judged";
  "So the day the reader stopped treating a single everyday word as a name, thirteen of the sixteen commits already judged went on holding words like not, and, or and each - and because a remembered judgement is never worked out twice, the correction could not reach a single one of them. Every app ships those words, so those thirteen commits would have refused every deployment of every app for as long as the record stood";
  "Being unsure is the safe answer here, which is what makes this safe to run unasked: a commit this forgets reads as never judged, and never judged already means the deployment waits. It can cost time and it cannot let anything out";
  "A single everyday word is the whole test, because the reader can no longer produce one - so a record holding one was certainly written by the older reader. Nothing here guesses at which names look wrong; it asks the same question the reader now asks, and disbelieves any record that disagrees with it";
  "The whole entry goes rather than the offending name alone. The names of one judging were worked out together by one reader, so a record half of which came from a reader that has been replaced is not a record of anything - and trimming it would leave something that looks judged and is not";
  let remembered = await qa_commit_named();
  function stale_is(entry) {
    let named = property_get(entry, "named");
    for (let gate of object_property_names(named)) {
      let names = property_get(named, gate);
      for (let name of names) {
        let unmistakable = function_name_unmistakable_is(name);
        if (not(unmistakable)) {
          return true;
        }
      }
    }
    return false;
  }
  let forgotten = [];
  let kept = {};
  for (let commit of object_property_names(remembered)) {
    let entry = property_get(remembered, commit);
    let stale = stale_is(entry);
    if (stale) {
      list_add(forgotten, commit);
      continue;
    }
    kept[commit] = entry;
  }
  let none = list_empty_is(forgotten);
  if (none) {
    let unchanged = {
      forgotten: [],
      kept: object_property_names(remembered).length,
      remaining: [],
    };
    return unchanged;
  }
  let path = qa_commit_named_path();
  await file_overwrite_json(path, kept);
  ("Asked again off the record just written, so what comes back is what the next deployment will read rather than what this meant to leave. An empty remaining is the proof");
  let after = await qa_commit_named();
  let remaining = [];
  for (let commit of object_property_names(after)) {
    let entry2 = property_get(after, commit);
    let stale2 = stale_is(entry2);
    if (stale2) {
      list_add(remaining, commit);
    }
  }
  let r = {
    forgotten,
    kept: object_property_names(after).length,
    remaining,
  };
  return r;
}
