import { arguments_assert } from "./arguments_assert.mjs";
export function gloss_word_claims_chain_collapsed_cases() {
  "A dictionary small enough to read whole, and the claims a word could be explained by against it, each with what should be left standing and what should be folded in underneath.";
  "The pair worth looking at first is alpha and beta, which name each other as roots. There is no deeper reading between them, so both have to stay - a rule that folded either one in would answer a question the dictionary never settled, and would do it silently.";
  "The same two claims are asked in both orders, because an answer that depends on which chapter was read first is not an answer.";
  "The claims tulun and tulon are one claim spelled two ways, and the first spelling is the one that has to come back, because the folded form is not a word anybody writes.";
  arguments_assert(arguments, 0);
  let known = {
    pangita: {
      word: "pangita",
      analysed: true,
      root: "kita",
      affixes: "pang-",
    },
    kita: {
      word: "kita",
      analysed: false,
      root: "",
      affixes: "",
    },
    tulunan: {
      word: "tulunan",
      analysed: true,
      root: "tulun",
      affixes: "-an",
    },
    tulun: {
      word: "tulun",
      analysed: false,
      root: "",
      affixes: "",
    },
    alpha: {
      word: "alpha",
      analysed: true,
      root: "beta",
      affixes: "",
    },
    beta: {
      word: "beta",
      analysed: true,
      root: "alpha",
      affixes: "",
    },
    top: {
      word: "top",
      analysed: true,
      root: "mid",
      affixes: "",
    },
    mid: {
      word: "mid",
      analysed: true,
      root: "bottom",
      affixes: "",
    },
    bottom: {
      word: "bottom",
      analysed: false,
      root: "",
      affixes: "",
    },
    gugma: {
      word: "gugma",
      analysed: true,
      root: "gugma",
      affixes: "",
    },
  };
  let cases = [
    {
      claims: ["pangita", "kita"],
      kept: ["pangita"],
      collapsed: [
        {
          claim: "kita",
          under: "pangita",
        },
      ],
    },
    {
      claims: ["kita", "pangita"],
      kept: ["pangita"],
      collapsed: [
        {
          claim: "kita",
          under: "pangita",
        },
      ],
    },
    {
      claims: ["alpha", "beta"],
      kept: ["alpha", "beta"],
      collapsed: [],
    },
    {
      claims: ["top", "mid", "bottom"],
      kept: ["top"],
      collapsed: [
        {
          claim: "mid",
          under: "top",
        },
        {
          claim: "bottom",
          under: "top",
        },
      ],
    },
    {
      claims: ["tulunan", "tulun", "tulon"],
      kept: ["tulunan"],
      collapsed: [
        {
          claim: "tulun",
          under: "tulunan",
        },
      ],
    },
    {
      claims: ["gugma"],
      kept: ["gugma"],
      collapsed: [],
    },
    {
      claims: ["kita", "kita"],
      kept: ["kita"],
      collapsed: [],
    },
  ];
  let r = {
    known,
    cases,
  };
  return r;
}
