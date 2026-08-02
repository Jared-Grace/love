import { text_frozen } from "./text_frozen.mjs";
export function js_address_fused_words_cases() {
  "The corpus pinning what counts as a word written into the middle of a joined-up address. Each case is a piece of code, the words being looked for, and the joined-up strings the reading should hand back.";
  "This reading passes by finding nothing, and a walk that has stopped reaching anything finds nothing too. The four shapes that must be caught and the four that must be left alone are written down here so the difference between the two is a thing that fails rather than a thing somebody remembers.";
  let cases = [
    {
      code: text_frozen('let url = base + "#ref=" + reference;'),
      words: ["ref"],
      fused: ["#ref="],
      why: "a word after the hash, fused between the mark and the equals sign - the shape that broke a share link",
    },
    {
      code: text_frozen('let url = base + "?chapter=" + code;'),
      words: ["chapter"],
      fused: ["?chapter="],
      why: "the same shape after the question mark, which is where a query word lives",
    },
    {
      code: text_frozen('let part = "&screen=" + name;'),
      words: ["screen"],
      fused: ["&screen="],
      why: "a second field of the same address is joined with an ampersand",
    },
    {
      code: text_frozen('let url = first + ",l=" + languages;'),
      words: ["l"],
      fused: [",l="],
      why: "a comma separates the fields of a bible link, so it counts as a separator too",
    },
    {
      code: text_frozen(
        'let word = app_shared_bible_reference_hash_key();\nlet url = base + "#" + word + "=" + reference;',
      ),
      words: ["ref"],
      fused: [],
      why: "the repaired shape - the word is read off the function that holds it, so the strings beside it are punctuation only",
    },
    {
      code: text_frozen(
        'function share() {\n  "a link is shared as base + #ref= and the reference";\n  return 1;\n}',
      ),
      words: ["ref"],
      fused: [],
      why: "prose describing the link is a string standing alone as a statement, and rewording an explanation to satisfy a check is the opposite of the point",
    },
    {
      code: text_frozen('let word = "ref";'),
      words: ["ref"],
      fused: [],
      why: "the word on its own is what a function holding it looks like, and is the thing being asked for rather than a thing to report",
    },
    {
      code: text_frozen('let url = base + "#other=" + value;'),
      words: ["ref"],
      fused: [],
      why: "a fused word nobody froze is somebody else's address and none of this reading's business",
    },
  ];
  return cases;
}
