import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_explain_name_said } from "./gloss_explain_name_said.mjs";
import { gloss_offenders_findings_by_word } from "./gloss_offenders_findings_by_word.mjs";
export function gloss_offenders_names_declared(offenders) {
  "Every word the app's own explanation says in so many words is a name, gathered once each with the chapters it stands in and the root the outside dictionary handed back for it.";
  "A proper name has no Cebuano root, so a finding against one is the dictionary answering a question nobody asked - Cefas fetching sipa, Gideon fetching dili, which means not. Those findings cannot be settled by correcting the writing, because the writing is right. This is the list of the ones where the writing already said so, and it is proof rather than a guess: the sentence names the word and calls it a name.";
  "Read beside the filter that takes names off the queue by a vocabulary test, this is the second opinion that filter's own account says it lost. The two disagree in both directions and both directions are informative - a row this proves and the vocabulary test kept is a name the vocabulary test is losing to a single small-letter spelling somewhere in sixty-six books, and a row the vocabulary test took and this cannot prove is a row resting on that test alone.";
  "Silence here means nothing at all. An explanation that says ‘Efeso’ is Ephesus, a large port city never uses the word name, and Efeso is a name regardless. So the count this returns is a floor and never a total.";
  "$plain offenders";
  "names the gathered findings to read. It names nothing that runs.";
  arguments_assert(arguments, 1);
  function declared_is(finding) {
    let explain = property_get(finding, "explain");
    let word = property_get(finding, "word");
    let said = gloss_explain_name_said(explain, word);
    return said;
  }
  let carried = ["root", "affixes"];
  let r = gloss_offenders_findings_by_word(offenders, declared_is, carried);
  return r;
}
