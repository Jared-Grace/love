export function gloss_root_claimed_shape_cases() {
  "Pairs of roots and the shape of Cebuano writing that accounts for the difference between them, written down so the naming can be checked against something other than itself.";
  "Half of these are pairs that must come back with nothing. A test whose whole worth is that it takes findings out of a pile of faults is worth nothing at all unless it can still leave one in, and a rule loosened one notch too far excuses every invented root in the corpus while looking exactly as green as one that does not. So hangad against halang, gahom against gama, kagiw against lagi and sunod against tulundon are here beside the pairs that are excused, and they are real - each one was read out of the corpus on 2026-09-07 and judged a root somebody made up.";
  "The two shapes this deliberately does not reach are written down as well, answering with nothing: a piece set inside a word, as pinili is written from pili, and a dictionary's own shorthand, as da for dala. They are not faults and they are not excused either, and a reader meeting them in the leftover pile should find them named here rather than take them for something nobody had noticed.";
  let cases = [
    {
      root: "hangtod",
      claimed: "hangtud",
      shape: "",
      why: "the fold for o against u has already settled this pair before anything here is asked, so there is no shape left to name",
    },
    {
      root: "tamay",
      claimed: "támay",
      shape: "accent",
      why: "one source prints the accent and the other does not, which is the whole of the difference",
    },
    {
      root: "luoy",
      claimed: "kaloy",
      shape: "vowel_lost",
      why: "luoy loses its u to give loy, and kaloy is built on that - the commonest pair in the corpus and the reason the shortened spelling is looked for inside the other word rather than against the whole of it",
    },
    {
      root: "sabot",
      claimed: "sabtan",
      shape: "vowel_lost",
      why: "the same shape with the piece added at the end instead of the front",
    },
    {
      root: "busgon",
      claimed: "busog",
      shape: "vowel_lost",
      why: "the shortened spelling is the dictionary's here and the full one the explanation's, which is why both directions are asked",
    },
    {
      root: "damgo",
      claimed: "dagmo",
      shape: "letters_swapped",
      why: "two neighbours exchanged and nothing else, the one shape named here that the corpus has not yet produced on its own",
    },
    {
      root: "hangad",
      claimed: "halang",
      shape: "",
      why: "an invented root, and the largest such class in the corpus - fifteen sightings that must stay standing as faults",
    },
    {
      root: "gahom",
      claimed: "gama",
      shape: "",
      why: "another invented root, close enough in letters that a rule counting distance would let it through",
    },
    {
      root: "kagiw",
      claimed: "lagi",
      shape: "",
      why: "an invented root sharing a run with the real one, which is what the kin reading is for and not what this is for",
    },
    {
      root: "sunod",
      claimed: "tulundon",
      shape: "",
      why: "an invented root longer than the real one, so a rule looking only at the shorter word would excuse it",
    },
    {
      root: "pili",
      claimed: "pinili",
      shape: "",
      why: "a piece set inside the word rather than added to an end - a real shape of Cebuano writing and not a fault, and one this does not reach",
    },
    {
      root: "dala",
      claimed: "dá",
      shape: "",
      why: "a dictionary printing its own shorthand - again not a fault, and again not reached, because two letters is too little to stand as evidence of anything",
    },
  ];
  return cases;
}
