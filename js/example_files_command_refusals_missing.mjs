import { examples_corpus_read } from "./examples_corpus_read.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { example_files_command_cores } from "./example_files_command_cores.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function example_files_command_refusals_missing() {
  "Which whole-repo commands the corpus runs without ever proving they refuse.";
  "Each command in the registry is paired with a folder-sized twin, and the corpus runs the twin rather than the command. A pairing is a claim that the twin stands for the command, and the half of that claim most easily lost is the refusal: a guard living in the command and not in the twin is a refusal no example can reach, so the corpus demonstrates the mechanism and says nothing at all about the behaviour a reader most wants pinned. Both of the pairing defects found on 2026-08-12 were exactly that - one twin had no guard, and another was paired with a twin taking a single name where the command takes a list, so the refusal reported was a refusal of a different question.";
  "Whether a guard exists is deliberately not what is asked. Three readings of that were tried and all three failed on measurement: parameter names differ legitimately across almost every pair, a guard almost never stands in the command's own file, and reaching for any function named assert finds thirty on both sides through shared plumbing. What an example declares is the one fact about a pair that is neither ambiguous nor buried.";
  let cores = example_files_command_cores();
  let examples = await examples_corpus_read();
  let missing = [];
  for (let pair of cores) {
    let name = property_get(pair, "name");
    let refused = false;
    for (let e of examples) {
      let named = property_get(e, "fn");
      if (equal(named, name)) {
        if (e.refuses) {
          refused = true;
        }
      }
    }
    if (not(refused)) {
      list_add(missing, name);
    }
  }
  return missing;
}
