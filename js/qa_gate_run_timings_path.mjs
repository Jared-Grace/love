export function qa_gate_run_timings_path() {
  "Where the last whole run's per-gate times are kept, so they can be asked for by name afterwards instead of being read off the screen";
  "A different file from the one holding each gate timed on its own, and deliberately so. These are gates competing with every other gate for the same machine, which is the right number for asking why a run took as long as it did and the wrong one for deciding which gate to make faster. Kept in one file the two would be indistinguishable, and the shares would be dealt by whichever run wrote last.";
  let path = "data/qa_gate_run_timings.json";
  return path;
}
