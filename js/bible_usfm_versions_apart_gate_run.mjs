import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_versions_verses_apart } from "./bible_usfm_versions_verses_apart.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { assert_json } from "./assert_json.mjs";
import { bible_usfm_versions } from "./bible_usfm_versions.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { bible_usfm_versions_apart_allowed } from "./bible_usfm_versions_apart_allowed.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function bible_usfm_versions_apart_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: prove that no bible on the shelf stands apart from the rest of the shelf more often than somebody has read its verses and allowed, so a translation cannot come to hand over the wrong passage without anybody being told.");
  ("THIS IS THE ONE FAULT EVERY OTHER CHECK HERE IS BLIND TO, WRITTEN AS A CHECK. A bible reckoning its chapters against a different numbering hands back real words in good English about the passage next door. Every question this repo asks is about whether words came back, and words did come back; a comparison of wordings shows the wrong passage sitting among the right ones as one more way of putting it. It was caught once, by a person noticing that one line of twenty three was about a different subject, and a person noticing is not a way of checking sixty six books of nineteen bibles.");
  ("IT READS EVERY VERSE THERE IS AND THAT IS WHY IT COSTS A MINUTE AND A HALF. The narrow check next door asks five psalm verses over the network, which is what could be afforded before the shelves were on this disk; five verses cannot see a bible that is right in the psalms and shifted in the histories. Thirty one thousand verses can, they are already on the disk, and a minute and a half is a small thing set against handing somebody the wrong verse to sing.");
  ("TWO THINGS FAIL IT, AND THE FIRST IS THE ONE IT IS FOR. A bible standing apart with no allowance written for it is a bible nobody has read at the verses where it differs - a new download, or one repackaged under the same name - and unread is exactly the state in which the wrong passage gets quoted. A bible standing apart more often than its allowance has moved under a name somebody already checked, which is the same thing wearing a face that is trusted.");
  ("STANDING APART LESS OFTEN NEVER FAILS AND IS REPORTED INSTEAD. The counting can only get better, a bible on the disk does not improve, and a check that failed on good news would teach the next person to raise the number rather than read the verse.");
  ("IT REFUSES TO PASS WITHOUT HAVING LOOKED AT ANYTHING, WHICH IS THE WAY A CHECK LIKE THIS REALLY DIES. A shelf read a new way, a folder moved, a download half unpacked: any of them leaves the sweep measuring nothing and every bible standing apart at nothing, which is indistinguishable from a clean shelf in the only number that comes out. So how many verses were measured and how many bibles were reached are asserted against the shelf itself before any allowance is consulted.");
  let found = await bible_usfm_versions_verses_apart();
  let verses = property_get(found, "verses");
  let rows = property_get(found, "rows");
  let measured_any = greater_than(verses, 0);
  assert_json(measured_any, {
    verses,
    hint: "the sweep measured no verses at all, so every bible came out standing apart at nothing for want of anything to compare; the shelf on this disk is the thing to look at, not this list",
  });
  let versions = bible_usfm_versions();
  let shelf = object_property_names(versions);
  let versions_read = list_size(rows);
  let shelf_size = list_size(shelf);
  let whole_shelf = equal(versions_read, shelf_size);
  assert_json(whole_shelf, {
    versions_read,
    shelf_size,
    shelf,
    hint: "a bible on the shelf was never reached by the sweep, so it is unmeasured rather than clean; find where its books are written on this disk",
  });
  let allowed = bible_usfm_versions_apart_allowed();
  let unread = [];
  let risen = [];
  let slack = [];
  for (let row of rows) {
    let version = property_get(row, "version");
    let apart = property_get(row, "apart");
    let allowance = property_get_or_null(allowed, version);
    let unwritten = null_is(allowance);
    let stands = greater_than(apart, 0);
    if (not(stands)) {
      let written = not(unwritten);
      if (written) {
        let ceiling = property_get(allowance, "apart");
        let spare = {
          version,
          allowed: ceiling,
          apart,
        };
        list_add(slack, spare);
      }
      continue;
    }
    let first = property_get(row, "first");
    if (unwritten) {
      let never_read = {
        version,
        apart,
        first,
      };
      list_add(unread, never_read);
      continue;
    }
    let ceiling = property_get(allowance, "apart");
    let over = greater_than(apart, ceiling);
    if (over) {
      let why = property_get(allowance, "why");
      let moved = {
        version,
        apart,
        ceiling,
        first,
        why,
      };
      list_add(risen, moved);
      continue;
    }
    let under = greater_than(ceiling, apart);
    if (under) {
      let spare = {
        version,
        allowed: ceiling,
        apart,
      };
      list_add(slack, spare);
    }
  }
  let none_unread = list_empty_is(unread);
  assert_json(none_unread, {
    unread,
    hint: "this bible says nothing the rest of the shelf says at these verses and nobody has read them; open the verse named beside another bible at the same verse, and either write down what you found or hold the bible back from readers",
  });
  let none_risen = list_empty_is(risen);
  assert_json(none_risen, {
    risen,
    hint: "this bible stands apart more often than the reading written beside it accounts for, so the text under that name is not the text that was read; the allowance may only be lowered, never raised to meet a new count",
  });
  let list = object_property_names(allowed);
  let walked = {
    verses,
    versions: versions_read,
    allowances: list_size(list),
    slack,
  };
  return walked;
}
