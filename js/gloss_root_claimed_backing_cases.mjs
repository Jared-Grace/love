export function gloss_root_claimed_backing_cases() {
  "The root a dictionary gave, its walk on from there, a root an explanation named, and what the three should be read as, written down so the reading can be checked against something other than itself.";
  "Every one of these was read out of the corpus on 2026-09-07. A third of them must not come back backed. This reading exists to take sightings out of a pile a person is meant to read as faults, and a rule that reaches one word too far excuses an invented root while looking exactly as green as one that does not - so taro against a walk reaching tarong, and gamhana against a walk reaching gahom, are here beside the pairs that are cleared, and both are truncations somebody handed a reader as an origin.";
  "The silent pairs are here for the opposite reason. A walk that never happened must not be read as either answer, and the temptation is to read it as agreement because the great majority of sightings end there. nako taken to ako is very probably right and the dictionary says nothing about it at all, so silent is what it must come back as, and a later reader wanting it settled must go and ask rather than be handed a verdict nobody reached.";
  "The pairs where the claim is the given root spelled otherwise are the ones this file was rewritten for. Every one of them was sitting in a queue of real faults, hinumdom against hinumdum at the top of it with eight sightings, because a walk never contains the word it starts from and so reported perfect agreement as a disagreement. One of them has no walk at all, and it is here to hold the order of the reading: the claim being the root is settled before silence is, or a case the dictionary happens not to have been asked about would come back saying nothing about a question that needs no asking.";
  let cases = [
    {
      root: "higugma",
      root_chain: ["gugma"],
      claimed: "gugma",
      backing: "backed",
      why: "nahigugma is taken to higugma and the explanation said gugma, which is the next of the dictionary's own steps - the commonest cleared class in the corpus at seventeen sightings",
    },
    {
      root: "maayo",
      root_chain: ["ayo"],
      claimed: "ayo",
      backing: "backed",
      why: "the plainest shape there is, one step on, kept because it is the shape the whole reading rests on",
    },
    {
      root: "kaguol",
      root_chain: ["guol"],
      claimed: "gool",
      backing: "backed",
      why: "the same root spelled with o where the dictionary writes u, which the fold settles inside the walk",
    },
    {
      root: "hibalo",
      root_chain: ["balo"],
      claimed: "balo",
      backing: "backed",
      why: "the claim stands on a walk of one, and hibalo is not balo, so the claim-is-the-root reading must not swallow it",
    },
    {
      root: "matarong",
      root_chain: ["tarong"],
      claimed: "taro",
      backing: "elsewhere",
      why: "the dictionary walked to tarong and the explanation printed taro, a word cut one letter short and handed over as an origin - four sightings that must stay standing",
    },
    {
      root: "gamhanan",
      root_chain: ["gahom"],
      claimed: "gamhana",
      backing: "elsewhere",
      why: "the dictionary walked to gahom and the explanation named a run of letters out of the middle of gamhanan, which is nobody's word - and the claim is nearly the given root, so a reading comparing them loosely would clear it",
    },
    {
      root: "pasidungog",
      root_chain: ["dungog"],
      claimed: "sidungog",
      backing: "elsewhere",
      why: "the walk reached dungog and the claim keeps a piece of the affix on the front of it",
    },
    {
      root: "matuod",
      root_chain: ["tuod"],
      claimed: "tud",
      backing: "elsewhere",
      why: "a claim close enough in letters that a rule counting distance would clear it, and the walk says plainly it is not where the dictionary went",
    },
    {
      root: "niana",
      root_chain: ["ana"],
      claimed: "ni",
      backing: "elsewhere",
      why: "a pronoun read as though it were built out of a root, which the walk refuses without needing to know what a pronoun is",
    },
    {
      root: "maalam",
      root_chain: ["alam"],
      claimed: "",
      backing: "elsewhere",
      why: "an explanation naming no root at all, which is not on any walk - honest rather than useful, and written down so a reader meeting it knows it was not overlooked",
    },
    {
      root: "hinumdom",
      root_chain: ["dumdom"],
      claimed: "hinumdum",
      backing: "root",
      why: "one word written with the two vowels Cebuano uses for one sound, which stood at the head of the queue as eight sightings of a fault until the claim was compared with the given root rather than only with the walk",
    },
    {
      root: "pailob",
      root_chain: ["ilob"],
      claimed: "pailub",
      backing: "root",
      why: "the same shape again, and it is here twice over because one of them could be an accident of one word and two cannot",
    },
    {
      root: "igsuon",
      root_chain: [],
      claimed: "igsoon",
      backing: "root",
      why: "the claim is the given root and the dictionary was never asked to take that root apart, so the order of the reading decides the answer - silence must not be reported about a question that needs no asking",
    },
    {
      root: "nako",
      root_chain: [],
      claimed: "ako",
      backing: "silent",
      why: "kanako is taken to nako and the explanation said ako, which is almost certainly right and which the dictionary has never been asked - nine sightings that must not be cleared by silence",
    },
    {
      root: "sal-an",
      root_chain: [],
      claimed: "sala",
      backing: "silent",
      why: "the same silence over a word the dictionary certainly knows, because it is the root it was never asked to take apart rather than the claim that is missing - thirteen sightings, the largest silent class in the corpus",
    },
  ];
  return cases;
}
