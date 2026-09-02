import { baseline_writers_growth_unguarded } from "./baseline_writers_growth_unguarded.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_writers_growth_exempt_dead } from "./baseline_writers_growth_exempt_dead.mjs";
export async function baseline_writers_growth_gate_run() {
  "Gate: every ratchet writer must refuse to record what its file did not already hold, or be named as one of the few allowed to. Throws so the dispatcher seam exits nonzero.";
  "The four writers this was built for each said in their own prose that they must never bless a new offense, and each then wrote whatever it was handed. Prose is not a check, and the family kept growing around the gap - a new writer landed from a peer while this was being written.";
  "So the check is on the shape of the family rather than on the four names: a writer added tomorrow is asked the same question without anybody remembering to add it here.";
  "The named let-offs are asked about afterwards, because they are the one hand typed part and the only part that can go on being believed after it stops being true. They are asked second rather than first on purpose: a real writer that can record growth is the substantive fault, and the first assert to throw is the only one that gets to speak.";
  let offenders = await baseline_writers_growth_unguarded();
  console.log("ratchet writers that cannot refuse growth: " + offenders.length);
  let f_name = fn_name("baseline_growth_guarded_is");
  let f_name2 = fn_name("baseline_writers_growth_exempt");
  list_empty_is_assert_json(offenders, {
    hint: text_combine_multiple([
      "each of these can record something its file did not already hold, so the ratchet turns both ways and the rewrite gets reached for at exactly the moment the gate goes red - import one of the growth asserts ",
      f_name,
      " counts as a refusal and call it before writing, or, if growing really is honest here, name the writer with its reason in ",
      f_name2,
    ]),
    offenders,
  });
  let dead = await baseline_writers_growth_exempt_dead();
  list_empty_is_assert_json(dead.stale, {
    hint: text_combine_multiple([
      "these names are excused from refusing growth and no ratchet writer answers to any of them, so each is a let-off waiting on a name - a writer written under one afterwards is excused from the moment it exists without anybody arguing for it. delete the entry from ",
      f_name2,
      " or correct the name it was meant to spell",
    ]),
    stale: dead.stale,
  });
  list_empty_is_assert_json(dead.contradicted, {
    hint: text_combine_multiple([
      "these writers are excused from refusing growth and already refuse it, so the excuse covers nothing today and is being kept alive by a guard it does not know about - on the day one of them drops that guard the entry silently hides a real offender instead of letting this gate say so. delete it from ",
      f_name2,
    ]),
    contradicted: dead.contradicted,
  });
  list_empty_is_assert_json(dead.unreasoned, {
    hint: text_combine_multiple([
      "these entries excuse a writer without saying why, which is the whole of what the list was supposed to cost - write the reason in ",
      f_name2,
      " or take the name out",
    ]),
    unreasoned: dead.unreasoned,
  });
  let r = {
    unguarded: 0,
    excused: dead.excused,
    writers: dead.writers,
  };
  return r;
}
