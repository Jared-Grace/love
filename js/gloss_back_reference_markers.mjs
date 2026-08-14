export function gloss_back_reference_markers() {
  "The turns of phrase an explanation uses when it points the reader further up the passage instead of saying the thing itself.";
  "They are matched against wording already lowered, so each is written in lower case here and nothing needs to guess at how a sentence was capitalised.";
  "Each one carries the space that has to stand before it, and the wording it is matched against is given a space at the front so a phrase opening a sentence still finds one. Without that space ‘as previous’ sits inside ‘was previously’, and four hundred explanations reading ‘a contrast to what was previously stated’ - which is an explanation, and a good one - were named as refusing to explain anything.";
  "Each one has to be a phrase that can only be pointing somewhere else. ‘Same as’ on its own is not on the list and must not be: an explanation is free to say a word means the same as another word, and that is the explanation, not a refusal to give one.";
  "‘As before’ and ‘as above’ stood on this list until 2026-08-14 and fail the rule just given. Fifteen explanations in John used them while explaining the word fully - the same noun as before, wine, but now in the accusative, so it is no longer setting the scene - and a phrase cannot tell those apart from the ones that stop at the pointing. What separates them is whether the sentence goes on to say anything, which is not a turn of phrase and cannot be looked for as one.";
  let markers = [
    " see above",
    " see previous",
    " as previous",
    " noted above",
    " stated above",
    " explained above",
    " described above",
    " mentioned above",
    " discussed above",
    " see the entry",
    " see the note",
    " refer above",
  ];
  return markers;
}
