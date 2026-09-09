export function gloss_back_reference_markers() {
  "The turns of phrase an explanation uses when it points the reader further up the passage instead of saying the thing itself.";
  "They are matched against wording already lowered, so each is written in lower case here and nothing needs to guess at how a sentence was capitalised.";
  "Each one carries the space that has to stand before it, and the wording it is matched against is given a space at the front so a phrase opening a sentence still finds one. Without that space ‘as previous’ sits inside ‘was previously’, and four hundred explanations reading ‘a contrast to what was previously stated’ - which is an explanation, and a good one - were named as refusing to explain anything.";
  "Each one has to be a phrase that can only be pointing somewhere else. ‘Same as’ on its own is not on the list and must not be: an explanation is free to say a word means the same as another word, and that is the explanation, not a refusal to give one.";
  "‘As before’ and ‘as above’ stood on this list until 2026-08-14 and fail the rule just given. Fifteen explanations in John used them while explaining the word fully - the same noun as before, wine, but now in the accusative, so it is no longer setting the scene - and a phrase cannot tell those apart from the ones that stop at the pointing. What separates them is whether the sentence goes on to say anything, which is not a turn of phrase and cannot be looked for as one.";
  "EVERY PHRASE HERE IS ENGLISH, SO A STORE WRITTEN IN ANOTHER LANGUAGE COUNTS NOUGHT AND THAT NOUGHT MEANS ‘I CANNOT SEE’. The Urdu store was held up against the rule above on 2026-09-09 and nothing was added, deliberately. Its pointing sentences say ‘the same word that came above’ and ‘the same word again’. The first is carried by 1650 explanations, of which 676 go on to teach something after the pointing - how the following words make the action passive, why the first letter is capital, which of the two shapes of the pronoun this is. The second is carried by 1566, one of which is a full account of why English puts a pronoun where a name would otherwise stand. Both fail the rule exactly as ‘as before’ did, at forty times the scale.";
  "The family behind those two phrases is larger than either: 10628 of that store's 110264 explanations open with ‘the same’, spelled 5139 different ways. Some of them stop there and say nothing - ‘the same preposition.’ - and some name a fact about this occurrence and are as good an explanation as any - ‘the same preposition, and here it tells place’. Telling those apart means reading the sentence, which is judgment once per wording rather than a turn of phrase, so it cannot live on this list. Anything wanting to count that store needs the judgment written down somewhere else and matched whole.";
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
