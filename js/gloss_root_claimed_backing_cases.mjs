export function gloss_root_claimed_backing_cases() {
  "A dictionary's walk on from the root it gave, a root an explanation named, and what the pair should be read as, written down so the reading can be checked against something other than itself.";
  "Every one of these was read out of the corpus on 2026-09-07. Half of them must not come back backed. This reading exists to take sightings out of a pile a person is meant to read as faults, and a rule that reaches one word too far excuses an invented root while looking exactly as green as one that does not - so taro against a walk reaching tarong, and gamhana against a walk reaching gahom, are here beside the pairs that are cleared, and both are truncations somebody handed a reader as an origin.";
  "The silent pairs are here for the opposite reason. A walk that never happened must not be read as either answer, and the temptation is to read it as agreement because the great majority of sightings end there - six hundred and six of eight hundred and thirty. nako taken to ako is very probably right and the dictionary says nothing about it at all, so silent is what it must come back as, and a later reader wanting it settled must go and ask rather than be handed a verdict nobody reached.";
  let cases = [
    {
      root_chain: ["gugma"],
      claimed: "gugma",
      backing: "backed",
      why: "nahigugma is taken to higugma and the explanation said gugma, which is the next of the dictionary's own steps - the commonest cleared class in the corpus at seventeen sightings",
    },
    {
      root_chain: ["maayo", "ayo"],
      claimed: "ayo",
      backing: "backed",
      why: "two steps rather than one, so the whole walk is looked in and not only its first place",
    },
    {
      root_chain: ["guol"],
      claimed: "gool",
      backing: "backed",
      why: "the same root spelled with o where the dictionary writes u, which the fold settles before the walk is looked in at all",
    },
    {
      root_chain: ["hibalo", "balo"],
      claimed: "balo",
      backing: "backed",
      why: "the claim stands at the end of the walk rather than its start, which is the case a reading looking only one step on would miss",
    },
    {
      root_chain: ["tarong"],
      claimed: "taro",
      backing: "elsewhere",
      why: "the dictionary walked to tarong and the explanation printed taro, a word cut one letter short and handed over as an origin - four sightings that must stay standing",
    },
    {
      root_chain: ["gahom"],
      claimed: "gamhana",
      backing: "elsewhere",
      why: "the dictionary walked to gahom and the explanation named a run of letters out of the middle of gamhanan, which is nobody's word",
    },
    {
      root_chain: ["dungog"],
      claimed: "sidungog",
      backing: "elsewhere",
      why: "the walk reached dungog and the claim keeps a piece of the affix on the front of it",
    },
    {
      root_chain: ["tuod"],
      claimed: "tud",
      backing: "elsewhere",
      why: "a claim close enough in letters that a rule counting distance would clear it, and the walk says plainly it is not where the dictionary went",
    },
    {
      root_chain: ["ana"],
      claimed: "ni",
      backing: "elsewhere",
      why: "a pronoun read as though it were built out of a root, which the walk refuses without needing to know what a pronoun is",
    },
    {
      root_chain: ["alam"],
      claimed: "",
      backing: "elsewhere",
      why: "an explanation naming no root at all, which is not on any walk - honest rather than useful, and written down so a reader meeting it knows it was not overlooked",
    },
    {
      root_chain: [],
      claimed: "ako",
      backing: "silent",
      why: "kanako is taken to nako and the explanation said ako, which is almost certainly right and which the dictionary has never been asked - nine sightings that must not be cleared by silence",
    },
    {
      root_chain: [],
      claimed: "sala",
      backing: "silent",
      why: "the same silence over a word the dictionary certainly knows, because it is the root it was never asked to take apart rather than the claim that is missing",
    },
  ];
  return cases;
}
