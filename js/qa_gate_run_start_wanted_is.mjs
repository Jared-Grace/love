export async function qa_gate_run_start_wanted_is() {
  "Whether starting a whole-repo judging right now is worth the quarter of an hour it will cost, or whether the machine is already doing that and a second one would only make both slower";
  "Nobody can see anybody else here. Ten of us work in one folder and a judging takes long enough that the next one starts before the last one ends, so the runs pile up without a single one of them being able to tell. Measured 2026-08-03: SIX judgings at once, load seventy-three on fourteen processors, every one of them holding most of a processor and none of them under half an hour. The same run on a quiet machine takes about a minute.";
  "The pile-up is self-feeding, which is what makes asking first worth a whole function. The share count backs off to a single share when the machine is busy - correctly, because taking a share of a full machine makes everyone slower - but the thing making the machine busy IS the other judgings. So each new run makes every run undivided, and undivided runs take long enough for the next one to arrive. Six runs each taking half an hour do together what six runs taking three minutes each would have done in under twenty.";
  "It says no rather than waiting, because waiting would hold a conversation still for half an hour with nothing to show. What to do with a no is the asker's: come back later, or ask what has already been judged instead, which costs seconds and answers most questions.";
  "Nothing calls this. It is here to be asked before spending the quarter of an hour, by whoever is about to spend it.";
  let flight = await qa_gate_runs_in_flight();
  let runs = property_get(flight, "runs");
  let shards = property_get(flight, "shards");
  let crowded = property_get(flight, "crowded");
  let going = add(runs, shards);
  let already = greater_than(going, 0);
  if (already) {
    return false;
  }
  if (crowded) {
    return false;
  }
  return true;
}
