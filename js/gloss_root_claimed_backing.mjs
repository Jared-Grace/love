import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_map } from "./list_map.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { list_includes } from "./list_includes.mjs";
export function gloss_root_claimed_backing(root_chain, claimed) {
  "Whether a dictionary, walked on from the root it gave, arrives at the root an explanation named: backed where it does, elsewhere where it walked and arrived at something else, silent where it never walked at all.";
  "An explanation naming a root further back than the dictionary went is the commonest disagreement there is and the least examined, because a step further back is as easily right as wrong and nothing in the two words says which. nahigugma is taken by the dictionary to higugma and the explanation says gugma; kaanyag is taken to anyag and the explanation says an. Both are a claim one layer past the dictionary's answer, both hold the claimed letters inside the given root, and they are not the same kind of thing at all. Asked about higugma the same dictionary answers gugma, so the explanation went one more of the dictionary's own steps. Asked about anyag it answers nothing, so the letters were cut out of the middle of a word.";
  "Read over the eight hundred and thirty sightings gathered so far, this backs a hundred and sixty one of them on the dictionary's own authority and leaves sixty three where the dictionary walked somewhere else - which is twenty two classes, a page somebody can read through, out of a pile nobody could.";
  "Silence is not a verdict and must never be read as one. A root nobody has looked up, an entry the dictionary never took apart and an entry naming no further root all end the walk the same way, and six hundred and six of the sightings end there. Nothing is known about them, which is a different thing from their being wrong, and folding them in with either answer would be inventing a reading out of an unasked question.";
  "This walks from the root the dictionary gave and asks whether the claim stands on that walk. Its sibling walks from the claim and asks whether the root stands on that one - the opposite direction, and it is the opposite direction because it answers the opposite question. A claim standing nearer the surface than the dictionary's root is contradicted when the dictionary's own steps cannot reach the root from it; a claim standing further back than the dictionary's root cannot be contradicted that way at all, and needs the walk taken from the other end.";
  "Spellings are folded before they are compared, the same folding the rest of this reading uses, because the two words come from two sources that write the same sound differently. The dictionary spells one root guol and an explanation spelled it gool, and unfolded that is a disagreement about a letter presented as a disagreement about a word.";
  "A claim of nothing comes back as elsewhere wherever the dictionary walked, because nothing is not on any chain. That is honest rather than useful, and a caller wanting empty claims told apart wants them dropped before they are asked about here.";
  "$plain root_chain";
  "$plain claimed";
  "the first names the roots a dictionary walks to from the root it gave, the second a root an explanation named. Neither names anything that runs.";
  arguments_assert(arguments, 2);
  let unwalked = list_empty_is(root_chain);
  if (unwalked) {
    let silent = "silent";
    return silent;
  }
  let folded = list_map(root_chain, gloss_word_folded);
  let item = gloss_word_folded(claimed);
  let reached = list_includes(folded, item);
  if (reached) {
    let backed = "backed";
    return backed;
  }
  let elsewhere = "elsewhere";
  return elsewhere;
}
