export function gloss_roots_pair_dictionary_verdict_cases() {
  "Pairs of claimed roots set beside what the dictionary takes each of them back to, with the verdict the arbitration owes and why that pair is the one worth pinning.";
  "★ THE CONTRADICTION LINES ARE THE REASON THIS FILE EXISTS. Run over the whole Cebuano store the arbitration answered contradiction nought times, and a nought means one of two opposite things - that the store never contradicts itself, or that the branch which would have said so can never be reached. Nothing in the sweep's own output tells those apart, and a reader would take the happier one. These lines settle it from outside the store, so the nought can be reported as a measurement instead of as a hope.";
  "The pairs are written already folded, because folding is somebody else's work and a case that folded first would go red when the folder changed rather than when the arbitration did.";
  "A single known half is allowed to settle depth and is not allowed to settle contradiction, and both halves of that asymmetry are pinned. It is the one place where treating the dictionary's silence as an answer would be a fault rather than a caution: the dictionary saying this word comes from that one is something it knows, while the dictionary saying nothing about a word is only a record of what nobody has asked.";
  "Two of these lines were written wanting shared and the first draft of one of them was simply wrong: both halves were taken back to a word that was itself one of the pair, which is depth and not agreement. The reading said so and the line was corrected rather than the reading. It is worth saying out loud, because a case file is usually read as the settled half of the pair and it is not - a wrong case can only ever accuse a right reading.";
  let cases = [
    {
      first: "kuptan",
      second: "kupot",
      first_root: "kupot",
      second_root: null,
      verdict: "depth",
      why: "the vowel drop the relation reading calls apart while its own prose says it is the same word twice - and the dictionary settles it on the first half alone",
    },
    {
      first: "kupot",
      second: "kuptan",
      first_root: null,
      second_root: "kupot",
      verdict: "depth",
      why: "the same pair the other way round, so a reading that only looked at the first root would be caught",
    },
    {
      first: "pangita",
      second: "nangita",
      first_root: "kita",
      second_root: "kita",
      verdict: "shared",
      why: "neither root is the other and the dictionary takes both back to one word, which is agreement reached the long way round",
    },
    {
      first: "bati",
      second: "pati",
      first_root: "bati",
      second_root: "pati",
      verdict: "contradiction",
      why: "both halves known, neither the other's root, and no shared origin - the one shape that accuses, kept so its nought is a measurement",
    },
    {
      first: "kagiw",
      second: "lagi",
      first_root: "kagiw",
      second_root: "lagi",
      verdict: "contradiction",
      why: "a second accusing line drawn from a real disagreeing row, so one contrived pair is not the whole proof the branch is live",
    },
    {
      first: "hangaw",
      second: "kawa",
      first_root: null,
      second_root: null,
      verdict: "unproved",
      why: "neither half gathered, which is the commonest answer of the four and must never read as clean",
    },
    {
      first: "tulundon",
      second: "sunod",
      first_root: "tulon",
      second_root: null,
      verdict: "unproved",
      why: "one half known and its root is not the other half, so the pair stays open - a known half settles depth and never settles guilt",
    },
    {
      first: "sunod",
      second: "tulundon",
      first_root: null,
      second_root: "tulon",
      verdict: "unproved",
      why: "the same one sided knowledge on the other side, since the two halves are not read by the same lines",
    },
    {
      first: "giluoy",
      second: "kaluy",
      first_root: "luoy",
      second_root: "luoy",
      verdict: "shared",
      why: "both halves taken back to one word that is neither of them, which is what shared is for - the first shared line reaches it through two unlike spellings and this one through two alike ones",
    },
    {
      first: "dagko",
      second: "dako",
      first_root: "dako",
      second_root: "dako",
      verdict: "depth",
      why: "both halves known and one of them is the other, which has to answer depth rather than shared - the order the two tests are asked in is what decides it",
    },
  ];
  return cases;
}
