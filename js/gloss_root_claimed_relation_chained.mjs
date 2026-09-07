import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_map } from "./list_map.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { list_includes } from "./list_includes.mjs";
export function gloss_root_claimed_relation_chained(
  relation,
  root,
  claimed,
  claimed_chains,
) {
  "How the root an explanation names stands to the root a dictionary gives, read again against the dictionary's own roots for the named word: the same reading as before, unless the two entries turn out to contradict each other.";
  "Shallower is decided by one word sitting inside another, and a word can sit inside another by accident. pangita holds the letters of pangit, so an explanation of pagpangita naming pangita was read as handing a reader an affixed form where the dictionary gives the root. It is not that. Asked about pangita the same dictionary answers kita, and pangit - which means ugly - stands nowhere on that chain. Two of its entries disagree, and the explanation followed the one that is right.";
  "So a claim is only shallower where the dictionary's root can be reached from the claim by the dictionary's own steps. Where it cannot, what has been found is the dictionary contradicting itself, and that is named as its own reading rather than folded into either of the other two - a reader repairing explanations must not be handed one that is already correct, and a reader checking the dictionary wants exactly these.";
  "Only shallower is read again. Deeper is a claim standing further back than the dictionary went, which no chain of the dictionary's own can contradict, and the rest never turned on containment at all.";
  "A claim the dictionary has never been asked about leaves the reading as it stands. Nothing is known that could contradict it, and reading silence as a contradiction would excuse every explanation naming a word nobody looked up.";
  "$plain relation";
  "$plain root";
  "$plain claimed";
  "$plain claimed_chains";
  "the first names a reading already reached, the next two name words to compare, and the last holds the dictionary's own roots for each word an explanation named. None of them names anything that runs.";
  "The walk taken from the other end is read by a sibling, which starts at the root the dictionary gave and asks whether the claim stands on that walk. Nothing calls it yet. Over the eight hundred and thirty sightings gathered so far it clears a hundred and sixty one of them by the dictionary own steps and narrows what is left to sixty three, so the deeper class going unread here is a gap somebody can close rather than a question already settled.";
  arguments_assert(arguments, 4);
  let shallower = equal(relation, "shallower");
  if (not(shallower)) {
    return relation;
  }
  let chain = property_get_or_null(claimed_chains, claimed);
  if (null_is(chain)) {
    return relation;
  }
  let unwalked = list_empty_is(chain);
  if (unwalked) {
    return relation;
  }
  let folded = list_map(chain, gloss_word_folded);
  let item = gloss_word_folded(root);
  let reached = list_includes(folded, item);
  if (reached) {
    return relation;
  }
  let r = "contradicted";
  return r;
}
