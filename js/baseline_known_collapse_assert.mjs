import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { file_exists } from "./file_exists.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { not_assert_json } from "./not_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { not } from "./not.mjs";
export async function baseline_known_collapse_assert(known, path) {
  arguments_assert(arguments, 2);
  ("Refuse to empty a ratchet file that was holding names a moment ago.");
  ("A ratchet may only shrink, so nothing anywhere complains about a record getting smaller - and emptying it is the largest shrink there is. That is exactly what a reading which reached nothing hands over: a drive unplugged partway through, a network that failed, a finder that abstains rather than throwing when the folder it walks is not there. Measured the day this was written - the drive went out mid-session and the record of stored data left behind under dead names was one call away from being rewritten to hold nothing by a reading that never looked at anything.");
  ("Going from names to none in a single write is the signature, whatever caused it, so nothing here has to know which readings can come back empty-handed. That is the whole reason it sits at the one place every ratchet ends up rather than beside each reading that might abstain: a list of risky sources would have to be kept right forever, and the first one nobody added would be the one that emptied a record quietly.");
  ("Emptying a record on purpose is an ordinary thing to want, and it is not refused - it is asked for by its own name. Clearing the last offender of a gate is a good day's work, and the only thing being insisted on is that a person meant it.");
  ("The first seeding has no file to compare against and is allowed, as is a record that already held nothing.");
  let empty = list_empty_is(known);
  if (not(empty)) {
    return;
  }
  let exists = await file_exists(path);
  if (not(exists)) {
    return;
  }
  let recorded = await baseline_known_read(path);
  let held = list_empty_not_is(recorded);
  let f_name = fn_name("baseline_known_clear");
  not_assert_json(held, {
    hint: text_combine_multiple([
      "this would rewrite a record that is holding names so that it holds none, and a ratchet only ever shrinks - so nothing further on would ever say the names had gone. If the reading came back empty because it could not reach what it reads, the record is fine and the reading is what needs looking at. If every one of them really has been cleared, that is worth saying out loud: ",
      f_name,
      " named with this file empties it on purpose",
    ]),
    path,
    recorded,
  });
}
