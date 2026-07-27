export function dispatcher_scripts_claude() {
  "the seams Claude may run, which is what an allow rule is written for.";
  "Not the same list as the one naming every script that takes a function name, and the difference matters in one direction only. That list exists so anything reading a command line can find the function in it, so it deliberately holds the human's seams too - and generating grants from it would write allow rules for scripts the guard refuses Claude outright, leaving dead lines in the settings file that read as though those seams had been handed over.";
  "One entry today. The committing seam joins it when the guard admits it and not before, because a rule for a seam the floor refuses is a line that grants nothing and claims otherwise.";
  let scripts = ["scripts/ai.mjs"];
  return scripts;
}
