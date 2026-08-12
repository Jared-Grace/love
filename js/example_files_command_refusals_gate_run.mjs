export async function example_files_command_refusals_gate_run() {
  "QA gate: a whole-repo command newly paired with a folder-sized twin has to come with an example proving it refuses something.";
  "A pairing says the twin stands for the command. What that claim most easily loses is the refusal, because a guard can sit in the command and not in the twin, and then no example can reach it - the corpus shows the mechanism working and says nothing whatever about the behaviour a reader most wants pinned down.";
  "That is not a worry about what could happen. Two pairings were found broken on the same day in 2026, and both were exactly this: one twin carried no guard at all, and another was paired with a twin taking a single name where its command takes a list, so the refusal the corpus did report was the refusal of a different question. Both were found by accident, while something else was being fixed. Luck is not coverage.";
  "Measured against what the repo already carried rather than against zero, because writing a refusal example for a command already paired is real work with a person's judgment in it - which arguments ought to be turned away is not derivable. The rule binds what is paired from now on.";
  "Throws so the dispatcher seam exits nonzero.";
  let offenders = await example_files_command_refusals_missing();
  let path = example_files_command_refusals_baseline_path();
  let hint = example_files_command_refusals_hint(
    "this command is run by the corpus with no example proving it refuses anything, so a guard that lives in the command rather than in its twin would go unnoticed - see ",
  );
  let f_name = fn_name("example_files_command_refusals_baseline_write");
  let r = await baseline_names_gate_generic(offenders, path, hint, f_name);
  return r;
}
