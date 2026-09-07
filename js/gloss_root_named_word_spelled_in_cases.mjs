export function gloss_root_named_word_spelled_in_cases() {
  "Words paired with roots read out of explanations, each with the answer the spelling mark owes and why that answer is the interesting one.";
  "★ HALF OF THESE ARE CASES THE MARK GETS WRONG ON PURPOSE, AND THEY ARE HERE BECAUSE A CORPUS OF ONLY ITS SUCCESSES WOULD READ AS A TEST RATHER THAN A TRADE. katawhan against tawo and pamatyon against matay are real roots and the mark refuses both. Pinning the refusals is what stops a later reader taking a false answer as evidence a root is wrong, which it is not - it is evidence of nothing at all outside the one wording that claims two words are the same word.";
  "The English pairs carry their measured weight so the size of the class is on the page rather than in a commit message. siya against he alone is 275 sightings in the Cebuano store, sila against they 179, mo against you 116.";
  "The folded pairs are here because folding is load bearing rather than a tidy-up. hangtud against hangtod is refused outright without it, and that is the commonest spelling difference the language has.";
  let cases = [
    {
      word: "akong",
      root: "ako",
      spelled: true,
      why: "the ordinary genuine case - a tie run onto the root, which is what the wording usually means",
    },
    {
      word: "Akong",
      root: "ako",
      spelled: true,
      why: "the same word opening a sentence, so the capital has to be lowered before anything is compared",
    },
    {
      word: "hangtud",
      root: "hangtod",
      spelled: true,
      why: "answered only after folding, since Cebuano writes the one sound as u away from the end of a word and o at it",
    },
    {
      word: "siya",
      root: "he",
      spelled: false,
      why: "an English meaning read as a root by the ambiguous wording, and the largest single part of that class at 275 sightings",
    },
    {
      word: "sila",
      root: "they",
      spelled: false,
      why: "the same fault at 179 sightings, which is what makes the class worth a mark at all",
    },
    {
      word: "mo",
      root: "you",
      spelled: false,
      why: "the same fault again at 116 sightings, and short enough that no length floor would have caught it",
    },
    {
      word: "katawhan",
      root: "tawo",
      spelled: false,
      why: "a real root that the built on wording announces a sound shift for, which is exactly why this mark must never be asked about that wording",
    },
    {
      word: "pamatyon",
      root: "matay",
      spelled: false,
      why: "a real root this refuses and no vocabulary keeps back either, so it is part of the five sightings a swap would cost",
    },
    {
      word: "dad-on",
      root: "dala",
      spelled: false,
      why: "a real root spelling misses and the gathered dictionary does hold, which is the whole reason a vocabulary is asked second",
    },
  ];
  return cases;
}
