import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { properties_get } from "./properties_get.mjs";
import { red_proof_wrong_refused } from "./red_proof_wrong_refused.mjs";
import { red_proof_cases_idle_redundant } from "./red_proof_cases_idle_redundant.mjs";
import { red_proof_cases_claims_unmatched } from "./red_proof_cases_claims_unmatched.mjs";
import { red_proof_holes_exemptions } from "./red_proof_holes_exemptions.mjs";
export function red_proof_checked(proof) {
  arguments_assert(arguments, 1);
  ("Asks every wrong version of one reader every case that reader's corpus writes down, and reports which cases refused which wrong version.");
  ("THE POINT IS THE EMPTY ROWS, NOT THE FULL ONES. A wrong version no case refuses is a hole: the corpus agrees with it everywhere, so the claim that version breaks is a claim nothing is holding down. A case that refuses no wrong version is padding: it describes the code back to itself and would go on passing whatever the code became. Both are silent - the gate the corpus feeds is green either way - and both are what this looks for.");
  ("A CASE THAT REFUSES NOTHING NO OTHER CASE ALSO REFUSES IS REPORTED SEPARATELY, AND IT IS THE READING THAT ACTUALLY FINDS PADDING. Asking only whether a case refuses something is too easy to satisfy: one sweeping wrong version - words dropped, records carried back out, ends crossed over - is refused by every case there is, and its presence makes every case look like it is earning its place. The sharper question is whether taking the case away would open a hole, and that is what this second list answers. A corpus said in its own prose that one of its cases caught nothing while the first reading called it busy, which is how the difference was found.");
  ("A CASE SAYING IT IS THE ONLY ONE CATCHING SOMETHING IS HELD TO IT. That sentence is a claim about the other cases, and the record of which case refused which wrong version has already been worked out by the time it is read - so the claim and its answer sit side by side and can simply be compared. They were not being compared, and three sentences in one corpus were false at once: one calling itself the case sitting exactly on the line when the line was somewhere else, one naming a wrong version that goes red on a different case, and one naming a version that is not wrong about it at all. Each had been read past twice by somebody looking for exactly that.");
  ("A wrong version that throws counts as refused. Throwing is a way of answering differently, and a case that makes a wrong version fall over has told the two apart just as surely as one that makes it answer wrongly.");
  ("A hole may be let off, by name, with a sentence saying why the version is the same working-out in different words rather than a version that is wrong. That sentence is a claim, so two things are checked about it: it may not be empty, and the version it lets off has to still be a hole. A let-off standing over a version some case now refuses is a let-off nobody needs, and leaving it there is how a reason written years ago comes to cover something it was never about.");
  let fn = property_get(proof, "fn");
  let cases_fn = property_get(proof, "cases");
  let expected_key = property_get(proof, "expected");
  let described_key = property_get(proof, "described");
  let wrong = property_get(proof, "wrong");
  let allowed = property_get(proof, "allowed");
  let cases = cases_fn();
  let wrong_names = properties_get(wrong);
  let r2 = red_proof_wrong_refused(wrong_names, wrong, cases, expected_key);
  let unrefused = property_get(r2, "unrefused");
  let refused = property_get(r2, "refused");
  let r3 = red_proof_cases_idle_redundant(
    cases,
    wrong_names,
    refused,
    described_key,
  );
  let redundant = property_get(r3, "redundant");
  let idle = property_get(r3, "idle");
  let claims_unmatched = red_proof_cases_claims_unmatched(idle, redundant);
  let r4 = red_proof_holes_exemptions(allowed, unrefused);
  let exemptions_unreasoned = property_get(r4, "exemptions_unreasoned");
  let exemptions_stale = property_get(r4, "exemptions_stale");
  let holes = property_get(r4, "holes");
  let r = {
    fn,
    cases_count: cases.length,
    wrong_count: wrong_names.length,
    refused,
    holes,
    idle,
    redundant,
    claims_unmatched,
    exemptions_stale,
    exemptions_unreasoned,
  };
  return r;
}
