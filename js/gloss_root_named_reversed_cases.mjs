export function gloss_root_named_reversed_cases() {
  "Words paired with the text their explanation quotes first, each with the answer the reversed reading owes and why that pair is the one worth pinning.";
  "★ EVERY REFUSAL HERE IS A REAL SIGHTING THAT THE FIRST READING COUNTED AS A ROOT, NOT AN INVENTED AWKWARD CASE. The first reading returned 6715 and the corrected one 6588, and the 127 between them are entirely the three classes written out below. A corpus of successes would have agreed with the broken reading on every single line, because the broken reading was right about the common case and wrong only in the tail.";
  "The Psalm 119 headings are kept as their own line because they say out loud what they are. Their explanations read it is not a Cebuano word, but a structural marker in the Psalm, so a reading that hands tav back as a Cebuano root has contradicted the sentence it read it out of.";
  "The three keepers are ordered from the plainest to the hardest. buhat under gibuhat is the shape at its clearest; sulat under nagsulat carries a prefix the reading has to see past; and dala under gidala is the same shape with the root spelled straight through.";
  let cases = [
    {
      word: "gibuhat",
      root: "buhat",
      reversed: true,
      why: "the shape at its plainest - the root quoted first, the word built on it, nothing in the way",
    },
    {
      word: "nagsulat",
      root: "sulat",
      reversed: true,
      why: "the same shape with a prefix between the two, which is the commonest way it is written",
    },
    {
      word: "gidala",
      root: "dala",
      reversed: true,
      why: "a third genuine one, kept so the keepers outnumber no class of refusal by accident",
    },
    {
      word: "dios.",
      root: "dios",
      reversed: false,
      why: "the stored word wears a full stop, so the quotation repeats the headword - 61 of the 127 miscounts were this and this alone",
    },
    {
      word: "“ang",
      root: "ang",
      reversed: false,
      why: "the same repetition with the mark on the front instead, which a reading that only trimmed the back would still get wrong",
    },
    {
      word: "tav.",
      root: "tav",
      reversed: false,
      why: "a Psalm 119 section heading whose own explanation says it is not a Cebuano word at all",
    },
    {
      word: "taga-nazaret",
      root: "taga-",
      reversed: false,
      why: "an affix quoted first, at 16 sightings the largest of that class, and spelled inside its word exactly as a root would be",
    },
    {
      word: "pagkapukan",
      root: "pagka-",
      reversed: false,
      why: "the same fault where the affix is longer than some real roots, so no length floor separates them",
    },
    {
      word: "ganghaan",
      root: "-an",
      reversed: false,
      why: "a suffix rather than a prefix, which is why the dash is checked at both ends and not just the front",
    },
    {
      word: "nating baka",
      root: "nating",
      reversed: false,
      why: "half of a two word entry, which is naming a part of a phrase rather than a root",
    },
  ];
  return cases;
}
