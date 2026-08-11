import { qa_commit_named_stale_is } from "./qa_commit_named_stale_is.mjs";
import { qa_gate_run_start_wanted_stale_generic } from "./qa_gate_run_start_wanted_stale_generic.mjs";
import { qa_commit_named } from "./qa_commit_named.mjs";
import { qa_commit_named_at } from "./qa_commit_named_at.mjs";
import { qa_gate_runs_in_flight } from "./qa_gate_runs_in_flight.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export async function qa_commit_named_at_when_wanted(commit) {
  "$plain commit";
  "Judges the commit you name, but looks at the machine first and does nothing at all if a judging is already going or the machine is full";
  "The looking and the judging were already both written and neither knew about the other. The one that looks says of itself that nothing calls it and that it is there to be asked by whoever is about to spend the quarter of an hour - which asks a Claude at a prompt to remember two commands and run them in the right order, and measured 2026-08-03 at 20:39 I ran the second without the first and made a third of the pile-up its own docstring describes. A guard nobody is made to walk past is a guard that catches whoever was going to be careful anyway.";
  "Its neighbour is left exactly as it was rather than being taught to refuse. Something that already runs must go on running the same way for whoever is calling it, and a judging asked for on purpose - by a person who knows the box is busy and wants the answer anyway - is a real thing to want. So this is a second door rather than a lock on the first one, and the only cost of choosing it is that it sometimes says no.";
  "A commit already in the record is handed back however full the machine is, because an answer already written down costs a read of one small file. Refusing there would be refusing to look something up on the grounds that finding it out is expensive, and that is the one case where the guard would be plainly wrong.";
  "What comes back when it says no is the count of runs and shards and the load that decided it, not a bare refusal. The numbers are what tell the asker whether to come back in a quarter of an hour or in an hour, and they are already in hand at that moment.";
  "The guard also asks how long it has been since anything at all was judged, because being careful every single minute added up to being wrong across a whole afternoon: measured 2026-08-11, this door had said no on every line of the daemon's journal, the record held thirty-nine commits judged in its whole life, and sixty-three from one day sat unjudged. So once the record has gone stale a full machine stops counting as a reason and only another judging does. Where the numbers come back with a stale record beside them, the refusal was that.";
  let known = await qa_commit_named();
  let remembered = property_get_or_null(known, commit);
  if (remembered) {
    let r = {
      commit,
      started: false,
      flight: null,
      judged: remembered,
    };
    return r;
  }
  ("Looked at once and asked of the numbers afterwards, rather than asking the question that goes and looks and then going and looking again for something to report. The machine changes between two looks and a refusal reporting numbers that did not decide it is a refusal nobody can check");
  let flight = await qa_gate_runs_in_flight();
  let stale = await qa_commit_named_stale_is();
  let wanted = qa_gate_run_start_wanted_stale_generic(flight, stale);
  if (wanted) {
    let judged = await qa_commit_named_at(commit);
    let started = {
      commit,
      started: true,
      flight,
      stale,
      judged: property_get_or_null(judged, "judged"),
    };
    return started;
  }
  let refused = {
    commit,
    started: false,
    flight,
    stale,
    judged: null,
  };
  return refused;
}
