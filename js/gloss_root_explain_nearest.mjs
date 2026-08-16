import { each } from "./each.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { text_edit_distance } from "./text_edit_distance.mjs";
import { text_size } from "./text_size.mjs";
import { text_size_greater_than_1 } from "./text_size_greater_than_1.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_punctuation_dash_kept_split } from "./text_punctuation_dash_kept_split.mjs";
import { text_replace } from "./text_replace.mjs";
export function gloss_root_explain_nearest(root, explain) {
  "The word in one explanation standing nearest the root a dictionary gives for the word being explained, and how many one-letter edits apart the two of them are.";
  "This is what tells an explanation that named the root in another spelling apart from one that named a different word altogether. Cebuano is written down more than one way and two sources disagree about which - ginuo against ginoo, hangtod against hangtud, musiko against musico - so an explanation can be entirely right about where a word comes from and still not carry the dictionary's letters anywhere in it. Reading the two as far apart or near says which of those happened. Asking only whether the root appears cannot: it answers no to both.";
  "A dash comes out of both sides before they are measured, because a dictionary writes a doubled root with one where an explanation writes it without - balhin-balhin against balhinbalhin. Left in, every doubled root would read as two edits from the word that is plainly it.";
  "Words of a single letter are passed over. A root is never one letter long, so such a word can only ever be noise, and beside a short root it is near enough to be picked as the nearest and hide the real answer.";
  "$plain root";
  "$plain explain";
  "both name text to read: a word a dictionary gives, and prose written about another word. Neither names anything that runs.";
  let root_lower = text_lower_to(root);
  let root_bare = text_replace(root_lower, "-", "");
  let explain_lower = text_lower_to(explain);
  let words = text_punctuation_dash_kept_split(explain_lower);
  let nearest = "";
  let edits = text_size(root_bare);
  function word_read(word) {
    let long_enough = text_size_greater_than_1(word);
    if (not(long_enough)) {
      return;
    }
    let bare = text_replace(word, "-", "");
    let apart = text_edit_distance(root_bare, bare);
    let further = greater_than(apart, edits);
    if (further) {
      return;
    }
    nearest = bare;
    edits = apart;
  }
  each(words, word_read);
  let r = {
    nearest,
    edits,
  };
  return r;
}
