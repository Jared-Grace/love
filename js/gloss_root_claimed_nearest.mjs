import { each } from "./each.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_edit_distance } from "./text_edit_distance.mjs";
import { text_size } from "./text_size.mjs";
export function gloss_root_claimed_nearest(root, claimed) {
  "Of the roots an explanation names in so many words, the one standing nearest the root a dictionary gives, and how many one-letter edits apart the two of them are.";
  "This is what separates an explanation that spelled the right origin another way from one that named a different word altogether. The two are the same finding until they are measured: kahangtoran explained from hangtud against the dictionary's hangtod is one edit and is simply the other spelling, while a claim five edits away is an origin somebody made up and handed to a reader as fact.";
  "The nearest claim rather than the first, because a disagreement is worth reporting only when every claim in the explanation misses - so the kindest reading of what was written is the one that should be measured, and a harsher pick would count an aside against prose that got the root right.";
  "An explanation claiming nothing comes back as no word at all, at the distance a root stands from being said - its own length. Nothing was claimed, so nothing can be near.";
  "$plain root";
  "$plain claimed";
  "the first names a word a dictionary gives; the second names the words an explanation quoted. Neither names anything that runs.";
  let root_bare = gloss_word_bare(root);
  let nearest = "";
  let edits = text_size(root_bare);
  function claim_read(claim) {
    let bare = gloss_word_bare(claim);
    let apart = text_edit_distance(root_bare, bare);
    let further = greater_than(apart, edits);
    if (further) {
      return;
    }
    nearest = bare;
    edits = apart;
  }
  each(claimed, claim_read);
  let r = {
    nearest,
    edits,
  };
  return r;
}
