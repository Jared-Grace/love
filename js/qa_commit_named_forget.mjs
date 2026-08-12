import { qa_commit_named } from "./qa_commit_named.mjs";
import { qa_commit_named_path } from "./qa_commit_named_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function qa_commit_named_forget(lambda$entry) {
  "Forgets every remembered judgement a given question says yes to, so that those commits are judged again instead of being answered out of the record.";
  "What is worth disbelieving changes; how to disbelieve it does not. Every reason for forgetting one of these arrives as a question that can be put to a single entry, and everything after that question is the same work - keep the ones it says no to, write what is left, and prove nothing it says yes to survived.";
  "The whole entry goes rather than the offending part of it. The gates of one judging ran together at one moment, so an entry with a piece cut out of it looks judged while no longer being a judgement of anything.";
  "Being unsure is the safe answer, which is what makes any of these safe to run: a commit this forgets reads as never judged, and never judged already means the deployment waits. It can cost time and it cannot let anything out.";
  "Nothing is written when the question says yes to nothing, so asking is free and can be repeated.";
  let remembered = await qa_commit_named();
  let forgotten = [];
  let kept = {};
  for (let commit of object_property_names(remembered)) {
    let entry = property_get(remembered, commit);
    let go = lambda$entry(entry);
    if (go) {
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
    let still = lambda$entry(entry2);
    if (still) {
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
