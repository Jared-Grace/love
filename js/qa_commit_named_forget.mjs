import { qa_commit_named_all } from "./qa_commit_named_all.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { qa_commit_named_path } from "./qa_commit_named_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function qa_commit_named_forget(lambda$entry) {
  "Forgets every remembered judgement a given question says yes to, so that those commits are judged again instead of being answered out of the record.";
  "What is worth disbelieving changes; how to disbelieve it does not. Every reason for forgetting one of these arrives as a question that can be put to a single entry, and everything after that question is the same work - keep the ones it says no to, write what is left, and prove nothing it says yes to survived.";
  "The whole entry goes rather than the offending part of it. The gates of one judging ran together at one moment, so an entry with a piece cut out of it looks judged while no longer being a judgement of anything.";
  "Being unsure is the safe answer, which is what makes any of these safe to run: a commit this forgets reads as never judged, and never judged already means the deployment waits. It can cost time and it cannot let anything out.";
  "Nothing is written when the question says yes to nothing, so asking is free and can be repeated.";
  "The file is read whole here, and not through the reading everybody else uses. That one already leaves out the judgings that no longer stand, which would make this forget nothing while reporting nothing to forget - and then write the file back without the very entries it could not see. What is filtered on the way to a reader has to be present on the way to a writer.";
  "THE NAME THE ENTRY IS FILED UNDER IS OFFERED TO THE QUESTION AS WELL, after the entry and never before it. Nearly every reason to disbelieve a judgement is a property of the judgement, and those questions take the entry alone and are unaffected by this. One reason is not: the commit itself can stop existing, because this history is rewritten on purpose and a rewrite renames every commit in it. That question cannot be asked of the entry at any price - the entry does not know what it is about - so the key is passed too. It goes second so that a question written before this was true still reads exactly one argument and still gets it.";
  let remembered = await qa_commit_named_all();
  let forgotten = [];
  let kept = {};
  for (let commit of object_property_names(remembered)) {
    let entry = property_get(remembered, commit);
    let go = lambda$entry(entry, commit);
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
  ("Whole again, for the same reason. A proof that reads through a filter which drops exactly what it is looking for passes without looking at anything.");
  let after = await qa_commit_named_all();
  let remaining = [];
  for (let commit of object_property_names(after)) {
    let entry2 = property_get(after, commit);
    let still = lambda$entry(entry2, commit);
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
