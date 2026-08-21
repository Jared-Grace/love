import { qa_commit_told_judged } from "./qa_commit_told_judged.mjs";
import { qa_commit_named } from "./qa_commit_named.mjs";
import { qa_commit_named_path } from "./qa_commit_named_path.mjs";
import { qa_commit_at_generic } from "./qa_commit_at_generic.mjs";
import { property_get } from "./property_get.mjs";
export async function qa_commit_named_at(commit) {
  "Judges the commit you name against a frozen copy of it, and keeps which gates were red together with the functions each of them named";
  "The names are what makes the answer usable by more than one asker. A red gate on its own says only that something in the repo is wrong; the functions it named say WHAT is wrong, and any later question about whether that reaches a particular thing is then a matter of looking rather than of running the gates again.";
  "A gate that was red and named no function is kept as having named none, and every later reader must treat that as unproven rather than as harmless - a count thrown without names cannot be shown to miss anything.";
  "The remembering itself lives in what this calls, because its neighbour wanted exactly the same remembering and differed only in what it kept. What is left here is which record to look in, and how a run of gates is turned into the names it spoke";
  let known_named = await qa_commit_named();
  let path = qa_commit_named_path();
  ("How a run is turned into what gets kept lives one name along, because the whole-repo run somebody types before committing arrives at exactly the same point with exactly the same answer in hand, and only one of two copies of that reading ever gets corrected.");
  let memo = await qa_commit_at_generic(
    commit,
    known_named,
    path,
    qa_commit_told_judged,
  );
  ("Whether the judging was written down is carried out with it, because it is not the same question as whether the gates were green. A run whose gate shares did not all come back, and a run worked out beside neighbours that moved underneath it, are both handed back in full and both left out of the record on purpose - so an answer can say every gate was green while nothing about it was kept, and an asker that acts on the first half without the second acts on a verdict nobody can look up afterwards.");
  ("Which neighbours moved is carried out with the rest, because it is the reason this judging happened at all and the asker that paid for it is the one that wants it. Kept here, it would be a fact about the run held by the only reader that already knew.");
  let r = {
    commit,
    remembered: property_get(memo, "remembered"),
    moved: property_get(memo, "moved"),
    filed: property_get(memo, "filed"),
    judged: property_get(memo, "kept"),
  };
  return r;
}
