import { object_property_names } from "./object_property_names.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { app_en_learn_bible_gloss_urdu_spelling_claims_wrong } from "./app_en_learn_bible_gloss_urdu_spelling_claims_wrong.mjs";
export function app_en_learn_bible_gloss_urdu_spelling_claim_gate_run() {
  "Gate: no gloss sentence may tell a reader that a word is spelled a way it is not spelled. Throws so the dispatcher seam exits nonzero.";
  "These sentences come from a template written over a list of words, which is what makes them worth gating rather than reading. A template is authored once, against whichever members its author had in mind, and it is then printed for every member - so it goes wrong quietly, on the words nobody was thinking about, and stays wrong until somebody reads one of them by hand. That is how six sentences came to say that 'hear' changes into 'heard' when the spelling only adds a 'd'.";
  "THE FLOORS ARE THE HALF THAT MATTERS AND THEY ARE NOT A TIDINESS CHECK. This finds faults by looking for the wording of each claim, so a reworded claim is found nowhere and reports nothing wrong - the same answer as a table with nothing wrong in it. Holding each family to the number of sentences that carried it when this was written turns that silence into a red gate. It will fire on a deliberate rewording, and that is correct: somebody has to come here and say what the new wording is, or the check quietly stops being a check.";
  "The floors are a minimum rather than an exact count, so adding words to a table is free. Only taking the claim away, or spelling it differently, asks for a decision - and both of those are the moment the gate exists for.";
  let floors = {
    s_form: 3,
    ed_form: 15,
    changed: 48,
    sound: 1,
    regular: 1,
    plural_plain: 63,
  };
  let found = app_en_learn_bible_gloss_urdu_spelling_claims_wrong();
  for (let one of found.faults) {
    console.log("wrong  " + one.claim + "  " + one.word + "  " + one.explain);
  }
  let thin = [];
  for (let name of object_property_names(floors)) {
    let floor = floors[name];
    let now = found.counts[name];
    let short = less_than(now, floor);
    if (short) {
      console.log("claim  " + name + "  found " + now + "  floor " + floor);
      thin.push(name);
    }
  }
  console.log("spelling claim defects: " + found.faults.length);
  console.log("claim families gone thin: " + thin.length);
  let broken = greater_than(found.faults.length, 0);
  if (broken) {
    throw new Error(
      "gloss spelling claim gate: " +
        found.faults.length +
        " sentences describe a spelling the word does not have - is the template writing one rule for a list whose members do not all follow it?",
    );
  }
  let quiet = greater_than(thin.length, 0);
  if (quiet) {
    throw new Error(
      "gloss spelling claim gate: " +
        thin.join(", ") +
        " - fewer sentences carry this claim than when the gate was written, so the check may be looking for a wording nothing says any more. Reword the needle here, or lower the floor on purpose.",
    );
  }
  let r = {
    faults: 0,
    counts: found.counts,
  };
  return r;
}
