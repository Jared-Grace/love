export function gloss_back_reference_markers() {
  "The turns of phrase an explanation uses when it points the reader further up the passage instead of saying the thing itself.";
  "They are matched against wording already lowered, so each is written in lower case here and nothing needs to guess at how a sentence was capitalised.";
  "Each one has to be a phrase that can only be pointing somewhere else. ‘Same as’ on its own is not on the list and must not be: an explanation is free to say a word means the same as another word, and that is the explanation, not a refusal to give one.";
  let markers = [
    "see above",
    "as above",
    "see previous",
    "as previous",
    "as before",
    "noted above",
    "stated above",
    "explained above",
    "described above",
    "mentioned above",
    "discussed above",
    "see the entry",
    "see the note",
    "refer above",
  ];
  return markers;
}
