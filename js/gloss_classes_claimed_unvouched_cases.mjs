export function gloss_classes_claimed_unvouched_cases() {
  "A written-out dictionary, classes claiming roots in it, and which of those claims nothing in the dictionary vouches for.";
  "The dictionary here holds four entries and every one of them is doing a job. tulod is a plain entry with no breakdown that another entry names as its root, so it is vouched and must be left out. halang is a plain entry with no breakdown that nothing names, so it is where a made-up root would be and must be picked up. tud carries a breakdown, which is the site vouching for it most directly of all, so it must be left out even though nothing names it either. And tud is what names tulod, which is the whole mechanism.";
  "The two entries that look identical on the page are tulod and halang. Four fields each, three of them empty. Nothing about either says whether the site had the word, and the answer here is different for the two - which is the reading, and the reason a check that only looked at the entry would be a check that cannot disagree.";
  "A claim nobody asked about is written out too, because leaving it out of the answer is a decision rather than an oversight, and a decision nothing pins will be reversed by the next person who reads the list and finds it short.";
  let known = {
    tulod: {
      word: "tulod",
      analysed: false,
      root: "",
      affixes: "",
    },
    halang: {
      word: "halang",
      analysed: false,
      root: "",
      affixes: "",
    },
    tud: {
      word: "tud",
      analysed: true,
      root: "tulod",
      affixes: "%ul~",
    },
    higugma: {
      word: "higugma",
      analysed: true,
      root: "gugma",
      affixes: "hi-",
    },
  };
  let classes = [
    {
      root: "hangad",
      claimed: "halang",
      count: 15,
      words: ["halangdon"],
      wanted: true,
      why: "held as four fields with three of them empty and named by nothing - the shape a root that was never a word has, and the biggest single row in the corpus",
    },
    {
      root: "sunod",
      claimed: "tulod",
      count: 3,
      words: ["panulondon"],
      wanted: false,
      why: "held exactly as halang is, and left out anyway, because tud says it comes from this word and only the site could have written that",
    },
    {
      root: "matuod",
      claimed: "tud",
      count: 3,
      words: ["kamatuoran"],
      wanted: false,
      why: "the site took this word apart, which vouches for it more plainly than any other entry naming it could",
    },
    {
      root: "higugma",
      claimed: "gugma",
      count: 9,
      words: ["higugmaon"],
      wanted: false,
      why: "nobody has asked the dictionary about it, so nothing is known either way and it is not a suspect",
    },
    {
      root: "matarong",
      claimed: "tolod",
      count: 2,
      words: ["pagkamatarong"],
      wanted: false,
      why: "the same word as tulod with the other of the two vowels, which must be vouched for by the same entry - a vouching that missed on a vowel would vouch for half of what it should",
    },
  ];
  let r = {
    known,
    classes,
  };
  return r;
}
