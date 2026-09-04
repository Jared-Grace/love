import { binisaya_affixes_plain_phrase } from "./binisaya_affixes_plain_phrase.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
export function gloss_affix_kinds_repair_prompt_user(
  word,
  root,
  affixes,
  explain,
) {
  "One word put in front of the machine to be explained again: what it is, what the dictionary builds it from, and the sentence standing today.";
  "$plain word";
  "the Cebuano word spelled as its verse spells it. It is shown and never run.";
  "$plain root";
  "the root the dictionary gives for that word.";
  "$plain affixes";
  "binisaya.com's construction shorthand for the word. It is said in plain words here rather than handed over as marks.";
  "$plain explain";
  "the explanation standing in the store today, the one carrying the false claim.";
  "The pieces go over in the same plain words the authoring prompt uses, out of the same function, so a word explained again is told what it was told the first time. Handing the shorthand over instead would ask the machine to decode marks the repo already decodes for it, and decoding them unaided is where the invented pieces came from.";
  "It is built without asking anything, so the words that would be sent can be read before a paid call is made. That is the same reason the roots block has a reader of its own: what a machine is shown is half the work and the half nobody can see.";
  let phrase = binisaya_affixes_plain_phrase(affixes);
  let combined = text_combine_multiple(["The word: ", word]);
  let combined2 = text_combine_multiple([
    "The root the dictionary gives: ",
    root,
  ]);
  let combined3 = text_combine_multiple([
    "The dictionary builds it with ",
    phrase,
    ". Those are the only pieces it has.",
  ]);
  let combined4 = text_combine_multiple([
    "The explanation standing today, which names a piece the dictionary does not give: ",
    explain,
  ]);
  let lines = [
    combined,
    combined2,
    combined3,
    combined4,
    "Write the explanation again.",
  ];
  let r = list_join_newline_2(lines);
  return r;
}
