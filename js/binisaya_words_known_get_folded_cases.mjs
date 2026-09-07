export function binisaya_words_known_get_folded_cases() {
  "Words to ask a small made-up dictionary about, each with what the folded lookup owes back.";
  "The dictionary here is written out rather than gathered, so a case says what it means on its own page. Every entry in it is one the real dictionary was measured to hold in this shape: a word under one spelling asked for under another, a word held plainly, a word nobody has, and a folded form two different words answer to.";
  "The last of those is the case worth the file. sadan is what both sad-an and salan fold to, and they are not the same word - so a lookup that answered would be picking one, and the case pins the refusal rather than the pick.";
  let known = {
    "sad-an": {
      analysed: true,
      root: "sala",
      affixes: "-an",
    },
    salan: {
      analysed: true,
      root: "sala",
      affixes: "-an",
    },
    igsoon: {
      analysed: false,
      root: "",
      affixes: "",
    },
    Igsoon: {
      analysed: false,
      root: "",
      affixes: "",
    },
    hangtod: {
      analysed: true,
      root: "hangtod",
      affixes: "",
    },
    "maluloy-on": {
      analysed: true,
      root: "luoy",
      affixes: "ma-, -l-, -on",
    },
  };
  let cases = [
    {
      word: "hangtod",
      root: "hangtod",
      why: "held under exactly that spelling, so the first asking answers and nothing is folded",
    },
    {
      word: "hangtud",
      root: "hangtod",
      why: "the u where the dictionary wrote an o, which is the commonest miss of all",
    },
    {
      word: "igsuon",
      root: "",
      why: "held under two spellings that are one word, so the capital is not an ambiguity",
    },
    {
      word: "maluluy-on",
      root: "luoy",
      why: "a dash and a folded consonant at once, answered from the spelling the dictionary keeps",
    },
    {
      word: "sal-an",
      root: null,
      why: "sad-an and salan both fold to sadan and are not one word, so nothing is answered",
    },
    {
      word: "kaayohan",
      root: null,
      why: "nothing the dictionary holds folds to it, so the second asking finds nothing either",
    },
    {
      word: "",
      root: null,
      why: "an empty word is asked for like any other and found nowhere",
    },
  ];
  let r = {
    known,
    cases,
  };
  return r;
}
