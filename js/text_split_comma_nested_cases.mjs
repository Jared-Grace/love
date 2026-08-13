import { text_frozen } from "./text_frozen.mjs";
export function text_split_comma_nested_cases() {
  "Lists written the way a command line receives them, each one saying what taking it apart should give back, and a refusal written as nothing at all.";
  "The refusals carry most of the rule, and one of them is not a mistake being caught - it is a decision being held open. A list of one-word lists and a flat list of words are two different things spelled the same way, both readings are reasonable, and nobody has needed either yet. So it is refused rather than guessed, and written down here as refused. Without a case saying so, the next reader meets an error where a sensible list went in and takes the check out, which closes the choice quietly on whoever writes the first real one.";
  "The plain cases are here because every one of them worked before any of this existed and has to keep working unchanged. A word with no comma, and a word with only single commas, are what every transform in the repo already hands over.";
  "Each list is held as fixed text, because the pass that canonicalizes this file would otherwise read a name inside one as a reference and change what the case says.";
  let cases = [
    {
      written: text_frozen("a"),
      taken: "a",
      why: "one word alone is not a list at all and comes back as itself, which is what a transform receiving a single argument has always been handed",
    },
    {
      written: text_frozen("a,b,c"),
      taken: ["a", "b", "c"],
      why: "single commas between words is every list this repo has ever written, and it has to come back exactly as it did before nesting existed",
    },
    {
      written: text_frozen("a,b,,c,d"),
      taken: [
        ["a", "b"],
        ["c", "d"],
      ],
      why: "two commas separate lists of words, which is the whole of what the new spelling adds",
    },
    {
      written: text_frozen("a,b,,c,d,,,e,f,,g,h"),
      taken: [
        [
          ["a", "b"],
          ["c", "d"],
        ],
        [
          ["e", "f"],
          ["g", "h"],
        ],
      ],
      why: "three commas separate lists of lists, so the levels keep going for as many as are written rather than stopping at a depth agreed up front",
    },
    {
      written: text_frozen("a,,b,,c"),
      taken: null,
      why: "the deferred decision: two commas were written and one never was, so this is either three lists of one word each or three plain words, and it stays refused until somebody needs one of them and can say which",
    },
    {
      written: text_frozen("a,b,,c"),
      taken: null,
      why: "one part nested and the part beside it not, which would come back ragged - refused so that every leaf sits at the same level by construction rather than by the caller remembering to check",
    },
    {
      written: text_frozen("a,b,,c,d,,,e,,f"),
      taken: null,
      why: "the unevenness is a whole level in, inside the part reading e,,f - so the check has to be asked at every level and not only at the widest cut",
    },
  ];
  return cases;
}
