import { property_get } from "./property_get.mjs";
import { bible_usfm_versions_apart_gate_run_shelf } from "./bible_usfm_versions_apart_gate_run_shelf.mjs";
import { bible_usfm_versions_apart_gate_run_walked } from "./bible_usfm_versions_apart_gate_run_walked.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_usfm_versions_apart_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: prove that no bible on the shelf stands apart from the rest of the shelf more often than somebody has read its verses and allowed, so a translation cannot come to hand over the wrong passage without anybody being told.");
  ("THIS IS THE ONE FAULT EVERY OTHER CHECK HERE IS BLIND TO, WRITTEN AS A CHECK. A bible reckoning its chapters against a different numbering hands back real words in good English about the passage next door. Every question this repo asks is about whether words came back, and words did come back; a comparison of wordings shows the wrong passage sitting among the right ones as one more way of putting it. It was caught once, by a person noticing that one line of twenty three was about a different subject, and a person noticing is not a way of checking sixty six books of nineteen bibles.");
  ("IT READS EVERY VERSE THERE IS AND THAT IS WHY IT COSTS A MINUTE AND A HALF. The narrow check next door asks five psalm verses over the network, which is what could be afforded before the shelves were on this disk; five verses cannot see a bible that is right in the psalms and shifted in the histories. Thirty one thousand verses can, they are already on the disk, and a minute and a half is a small thing set against handing somebody the wrong verse to sing.");
  ("TWO THINGS FAIL IT, AND THE FIRST IS THE ONE IT IS FOR. A bible standing apart with no allowance written for it is a bible nobody has read at the verses where it differs - a new download, or one repackaged under the same name - and unread is exactly the state in which the wrong passage gets quoted. A bible standing apart more often than its allowance has moved under a name somebody already checked, which is the same thing wearing a face that is trusted.");
  ("STANDING APART LESS OFTEN NEVER FAILS AND IS REPORTED INSTEAD. The counting can only get better, a bible on the disk does not improve, and a check that failed on good news would teach the next person to raise the number rather than read the verse.");
  ("IT REFUSES TO PASS WITHOUT HAVING LOOKED AT ANYTHING, WHICH IS THE WAY A CHECK LIKE THIS REALLY DIES. A shelf read a new way, a folder moved, a download half unpacked: any of them leaves the sweep measuring nothing and every bible standing apart at nothing, which is indistinguishable from a clean shelf in the only number that comes out. So how many verses were measured and how many bibles were reached are asserted against the shelf itself before any allowance is consulted.");
  let r = await bible_usfm_versions_apart_gate_run_shelf();
  let shelf = property_get(r, "shelf");
  let rows = property_get(r, "rows");
  let verses = property_get(r, "verses");
  let versions_read = list_size(rows);
  let shelf_size = list_size(shelf);
  let walked = bible_usfm_versions_apart_gate_run_walked(
    versions_read,
    shelf_size,
    shelf,
    rows,
    verses,
  );
  return walked;
}
