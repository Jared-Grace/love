export function dispatcher_scripts_claude() {
  "the seams Claude may run, which is what an allow rule is written for.";
  "Not the same list as the one naming every script that takes a function name, and the difference matters in one direction only. That list exists so anything reading a command line can find the function in it, so it deliberately holds the human's seams too - and generating grants from it would write allow rules for scripts the guard refuses Claude outright, leaving dead lines in the settings file that read as though those seams had been handed over.";
  "Two seams, running the same functions the same way and differing only in what happens afterwards: the second commits what the command wrote, under that command's own name. Every granted function needs its own line on each, since a rule is literal text and a line naming one seam says nothing at all about the other.";
  let scripts = ["scripts/ai.mjs", "scripts/aig.mjs"];
  return scripts;
}
