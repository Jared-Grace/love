import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_entries_roots_disagreeing } from "./gloss_entries_roots_disagreeing.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { gloss_word_root_chain } from "./gloss_word_root_chain.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
export function gloss_entries_roots_disagreeing_chained(entries, known) {
  "The explanations in one passage that say nothing about the root an outside dictionary takes their word back to, each carrying the dictionary's own roots for every word it did name.";
  "A disagreement is read later by comparing two words, and one word sitting inside another is read there as an explanation stopping one step short of the root. That reading is wrong wherever the containment is an accident, and telling the two apart needs the dictionary again - which is here, and is gone by the time the reading is made. So what the later reader will need is gathered while the dictionary is still open.";
  "It gathers rather than judges. Nothing is dropped and no finding is changed; every explanation that disagreed still disagrees, and what is added is the material for saying what kind of disagreement it is.";
  "The chains are held under the bare spelling of the word an explanation named, because that is the spelling the reader will be holding when it asks - the nearest of the named roots is measured bare, and a chain filed under any other spelling would be looked for and not found.";
  "$plain entries";
  "$plain known";
  "the first names explanations to read, the second a gathered dictionary to read them against. Neither names anything that runs.";
  arguments_assert(arguments, 2);
  let disagreeing = gloss_entries_roots_disagreeing(entries, known);
  function finding_chain_add(finding) {
    let claimed = property_get(finding, "claimed");
    let claimed_bare = list_map(claimed, gloss_word_bare);
    let claimed_chains = {};
    function claimed_chain_add(claimed_word) {
      let chain = gloss_word_root_chain(known, claimed_word);
      property_set(claimed_chains, claimed_word, chain);
    }
    each(claimed_bare, claimed_chain_add);
    property_set(finding, "claimed_chains", claimed_chains);
  }
  each(disagreeing, finding_chain_add);
  return disagreeing;
}
