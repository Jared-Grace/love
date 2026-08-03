import { ai_log_loops_tallies_ranked } from "./ai_log_loops_tallies_ranked.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { json_to } from "./json_to.mjs";
import { property_equals_not } from "./property_equals_not.mjs";
import { ai_log_step_name } from "./ai_log_step_name.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function ai_log_loops_ranked(entries) {
  "Which step gets run over and over in a row, and how many commands a sweep would have saved - the reading that says what to turn into one command that finds its own set.";
  "This is the other half of the pairs ranking beside it, and deliberately the half it throws away: that one drops a step following itself, because two different steps always run together is a composite while one step run twenty times is a loop. Both are missing commands, but they are missing different ones, so counting them together would hide each behind the other. The rule this serves is the stronger of the two and until now it was the one with nothing measuring it.";
  "One conversation at a time, for the same reason as the pairs: a dozen of these run at once and their lines interleave in the file, so a run read straight through is usually several people each doing something once.";
  "Ranked by how many commands were spent rather than by how long the longest run was. A step run twice in a row on forty occasions is a real habit worth a command; one run of forty is a single afternoon and may never happen again. The longest run is carried along anyway, because it is what tells those two apart.";
  "A run of the very same command with the very same arguments is not a missing sweep, because there is no set for a sweep to find. The poller that drives the sermon loop asks one zero-argument question every three seconds, and it sat at the top of this reading with 112474 commands and a longest run of 18232 - twenty-five times the next entry, and nothing anybody could build. So the arguments are watched through a run, and only a run that changed them counts as a habit worth a command. What the identical runs spent is still reported, under its own name, because a poller costing a hundred thousand process starts is a real finding even though it is not this one.";
  let previous = {};
  let lengths = {};
  let signatures = {};
  let varied = {};
  let spent = {};
  let loops = {};
  let longest = {};
  let identical = {};
  function run_close(session) {
    "Shut an open run and record it, if it was ever a run at all.";
    let length = property_or_null(lengths, session);
    let missing = null_is(length);
    if (missing) {
      return;
    }
    let single = less_than(length, 2);
    if (single) {
      return;
    }
    let step = property_get(previous, session);
    let wasted = subtract(length, 1);
    let changed = property_get(varied, session);
    if (not(changed)) {
      property_count_add(identical, step, wasted);
      return;
    }
    property_count_add(spent, step, wasted);
    property_count_add(loops, step, 1);
    let best = property_or_null(longest, step);
    let unseen = null_is(best);
    if (unseen) {
      best = 0;
    }
    let beaten = greater_than(length, best);
    if (beaten) {
      property_set(longest, step, length);
    }
  }
  for (let entry of entries) {
    ("The earliest lines were written before the conversation was noted on each one, so they are passed over rather than pooled - pooling them would braid every conversation of those days into one and manufacture runs nobody ran.");
    let noted = property_exists(entry, "session");
    if (not(noted)) {
      continue;
    }
    let session = property_get(entry, "session");
    let step = ai_log_step_name(entry);
    let before = property_or_null(previous, session);
    let value = property_or_null(entry, "args");
    let signature = json_to(value);
    let again = equal(before, step);
    if (again) {
      property_count_add(lengths, session, 1);
      let differs = property_equals_not(signatures, session, signature);
      if (differs) {
        property_set(varied, session, true);
      }
      continue;
    }
    run_close(session);
    property_set(lengths, session, 1);
    property_set(previous, session, step);
    property_set(signatures, session, signature);
    property_set(varied, session, false);
  }
  ("A conversation's last run is still open when the lines end, and it is the most recent thing anybody did - so close every one of them rather than dropping the newest evidence in the file.");
  let sessions = object_property_names(lengths);
  for (let session of sessions) {
    run_close(session);
  }
  let ranked = ai_log_loops_tallies_ranked(spent, loops, longest, identical);
  return ranked;
}
