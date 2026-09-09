import { gloss_finding_silent_is } from "./gloss_finding_silent_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_offenders_findings_by_word } from "./gloss_offenders_findings_by_word.mjs";
export function gloss_offenders_roots_silent_words(offenders) {
  "Every word whose explanation says nothing at all about the root an outside dictionary takes it back to, named once each with the chapters it was met in, commonest first.";
  "These are the findings the root comparison could not group, and there are more of them than of every named disagreement put together. An explanation naming a wrong root at least says where it thinks the word came from, and two roots can be set side by side and read; one saying nothing offers the reader no origin whatever, which is the whole of what these sentences were written to give. So they are not a lesser kind of the same fault - they are the larger one, and until now only their number was reachable.";
  "The dictionary's root and its breakdown of the word are carried along, because the reader repairing one of these needs what should have been said, and it is already in the finding.";
  arguments_assert(arguments, 1);
  let carried = ["root", "affixes"];
  let r = gloss_offenders_findings_by_word(
    offenders,
    gloss_finding_silent_is,
    carried,
  );
  return r;
}
