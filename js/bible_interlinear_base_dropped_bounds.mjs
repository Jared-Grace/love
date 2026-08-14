export function bible_interlinear_base_dropped_bounds() {
  "How many words the edition filter may remove from the Bible text before something is wrong, at either end, and how much text there has to be for the question to mean anything.";
  "Measured on 2026-08-14 over the whole interlinear: 443,625 words in the tables, 443,082 kept, 543 dropped - a little over one word in a thousand, which is the shape a set of edition-specific readings should have.";
  "The bounds are wide rather than tight on purpose. What they are catching is a filter that has DIED or a filter that has gone WILD, and both of those move the number by orders of magnitude rather than by a few words. A tight bound around 543 would instead go red every time a word is corrected in the tables, which teaches a reader to clear the gate without looking - and this is the one gate that must never be cleared without looking.";
  "The floor is zero rather than a proportion. One dropped word proves the filter ran; no dropped words proves nothing ran, and that is the whole distinction being drawn.";
  "The word floor is separate because both other bounds are meaningless without it. A tables file that failed to load hands back a few hundred words, drops none of them, and would otherwise read as a healthy small text rather than as a missing one.";
  let bounds = {
    least: 0,
    most: 5000,
    words_least: 400000,
  };
  return bounds;
}
