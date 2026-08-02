import { fn_name } from "./fn_name.mjs";
import { functions_operators_raw } from "./functions_operators_raw.mjs";
import { functions_operators_raw_repair_some } from "./functions_operators_raw_repair_some.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_operators_raw_repair() {
  "Puts every function that still spells its operators as symbols through the canonicalizing pass, in exactly the functions that still do";
  ("A function that has never been through that pass is invisible to the fold gate, because the gate matches one body against another and an uncanonicalized body matches nothing. So the gate reports a tidy repo while saying nothing at all about those functions - it is not that they are clean, it is that they were never asked. Four of them were canonicalized by hand and one real duplication surfaced immediately: ",
    fn_name("list_all"),
    " had ",
    fn_name("list_filter_size"),
    " written out inside it, and had been sitting green");
  ("The work itself lives in ",
    fn_name("functions_operators_raw_repair_some"),
    " and this only says how many, because a few at a time and all of them are the same run of work with one number changed, and two copies of it would sooner or later disagree about how a function is committed");
  ("How many is asked for rather than left open, so the number handed over is the number that was really waiting rather than one large enough to cover it. A count standing in for all of them is a guess that goes wrong the day the set outgrows it");
  ("This is deliberately not wired into any gate. The set is wide enough that running it touches most of the repo at once, and with many hands editing the same working directory that is a decision about timing rather than about correctness - so it is offered as a command and never as a thing that happens on its own. When the box is busy the few-at-a-time one is the one to reach for; it gets to the same place and asks nobody for a quiet quarter of an hour");
  let offenders = await functions_operators_raw();
  let size = list_size(offenders);
  let report = await functions_operators_raw_repair_some(size);
  return report;
}
