export function gloss_classes_word_claims_apart_cases() {
  "A written-out set of classes and the words a reader should be shown as explained more than one way, in the order they should be shown in.";
  "The classes here are shortened copies of real ones. panulundon really is explained five ways in the corpus and pagkamatarong really is explained as tarong and as taro, so the two rows wanted here are two the app really does owe somebody an answer about.";
  "Three of the six classes are here to be left out of the answer rather than put in it, and they are the whole reason this is written down. One is a word explained once, which is the ordinary case and must not appear. One claims the same root as another under the other of the two spellings Cebuano gives a sound, which must count as agreement rather than as a second explanation. One was found on two spellings of a single word, which must count once - entered twice it would inflate its own row and could push a word up the ranking on nothing but the way it was spelled.";
  "The counts wanted are the sums of whole classes and a class can also have been found elsewhere, so they are upper bounds by construction. They are pinned anyway, because a reader ranking by them needs them to be the same number every time and a silent change to what is being added up would move the rows without failing anywhere.";
  let classes = [
    {
      root: "sunod",
      claimed: "tulundon",
      count: 8,
      words: ["panulundon"],
      chapters: ["PSA061"],
    },
    {
      root: "sunod",
      claimed: "tulond",
      count: 7,
      words: ["panulondon", "panulundon"],
      chapters: ["PSA002"],
    },
    {
      root: "sunod",
      claimed: "tolond",
      count: 2,
      words: ["panulundon"],
      chapters: ["PSA106"],
    },
    {
      root: "matarong",
      claimed: "tarong",
      count: 5,
      words: ["pagkamatarong"],
      chapters: ["PSA024"],
    },
    {
      root: "matarong",
      claimed: "taro",
      count: 4,
      words: ["pagkamatarong"],
      chapters: ["PSA004"],
    },
    {
      root: "gugma",
      claimed: "gugma",
      count: 20,
      words: ["higugma"],
      chapters: ["PSA136"],
    },
  ];
  let wanted = [
    {
      word: "panulundon",
      claims: 2,
      sightings_at_most: 17,
      why: "explained as tulundon and as tulond, which are two different words - and the third class claiming tolond is the same claim as tulond written the other way, so it adds its count and not a third explanation",
    },
    {
      word: "pagkamatarong",
      claims: 2,
      sightings_at_most: 9,
      why: "explained as tarong and as taro, one of which is the other with a letter missing, and no dictionary is needed to know that both cannot be right",
    },
  ];
  let r = {
    classes,
    wanted,
  };
  return r;
}
