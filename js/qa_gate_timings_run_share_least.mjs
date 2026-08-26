export function qa_gate_timings_run_share_least() {
  "How much of the gate list a timing run must have reached before what it says is worth writing down.";
  "Nine tenths, which is loose on purpose. The question being asked is whether the run stopped early, and a run that stops early stops a long way early - the one that prompted this left forty-three gates at the tail unmeasured in a single unbroken run. Nothing here needs to tell ninety-nine parts from a hundred.";
  "The slack is for the gap between the copy being frozen and the count being checked. The run walks the copy's list and the check reads the living one, and a gate added in between makes a finished run look one gate short. At the rate gates are added here that is a fraction of one, so a tenth of the list is far more room than the gap can ever need.";
  "Loose in the direction that costs least. Set too high, a finished run is thrown away and the record simply stays as it was until the next quiet hour; set too low, half a measurement is written down and believed. The first is a delay and the second is a wrong answer, so the number leans towards letting a real run through.";
  let share = 0.9;
  return share;
}
