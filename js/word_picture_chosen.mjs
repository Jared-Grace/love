export function word_picture_chosen() {
  "Which attempt has been kept for each taught word, as a plain table written out by word_picture_chosen_set and never edited by hand.";
  "A WORD WITH NO ENTRY HAS NOT BEEN JUDGED YET, which is not the same as having no picture worth keeping. Every drawn word starts absent from here and stays absent until somebody looks at its attempts side by side and presses Keep under one of them, so the length of this table is the length of the review that has actually happened.";
  "IT HOLDS THE ATTEMPT'S OWN NUMBER and nothing else, because that number is already the name of the file on disk. Copying the picture somewhere, or its wording, would make a second thing to keep in step with the folder; a number cannot drift from the file it names.";
  let r = {
 "cross": 1,
 "dyer": 2,
 "offer": 2,
 "fellowship": 1
};
  return r;
}
