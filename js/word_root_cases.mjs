import { arguments_assert } from "./arguments_assert.mjs";
export function word_root_cases() {
  "Two English words and whether they must reach the same root, with the reason each pair is written down.";
  "Pairs rather than exact roots, on purpose. What the rooting is FOR is meeting one word in a passage with another spelling of it in a sermon line, so what has to be true is that two forms of one word meet and two different words do not. Whether the meeting place is judg or judge is the stemmer's own business, and pinning it would turn every honest improvement red without catching a single thing pairs miss.";
  "The pairs that must NOT meet are the half that decays quietly. A missed meeting only under-counts the sharing, which reads as a line being harder than it is; a wrong meeting invents a match that is not there, and nothing downstream can tell an invented match from a real one. So every ending that was adopted is written here beside the word it would have ruined - ness beside witness, ion beside passion, ity beside authority.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      a: "bold",
      b: "boldness",
      meet: true,
      why: "the plain ness, which is why the ending is carried at all",
    },
    {
      a: "wit",
      b: "witness",
      meet: false,
      why: "witness is not wit with an ending on it, and it is the commonest word ness would ruin",
    },
    {
      a: "command",
      b: "commandment",
      meet: true,
      why: "the plain ment",
    },
    {
      a: "mo",
      b: "moment",
      meet: false,
      why: "moment keeps its ment because nothing worth meeting is left when it goes",
    },
    {
      a: "gar",
      b: "garment",
      meet: false,
      why: "the same, and garment is a word the gospels use often",
    },
    {
      a: "friend",
      b: "friendship",
      meet: true,
      why: "the plain ship",
    },
    {
      a: "wor",
      b: "worship",
      meet: false,
      why: "worship is one word, and it is the reason ship must leave four letters standing",
    },
    {
      a: "end",
      b: "endless",
      meet: true,
      why: "the plain less, which needs only three letters left so that aimless and endless work",
    },
    {
      a: "un",
      b: "unless",
      meet: false,
      why: "unless is held whole by the doubled s below the less rule",
    },
    {
      a: "boast",
      b: "boastful",
      meet: true,
      why: "the plain ful",
    },
    {
      a: "aw",
      b: "awful",
      meet: false,
      why: "awful is not aw with an ending",
    },
    {
      a: "accept",
      b: "acceptable",
      meet: true,
      why: "able is spelled whole because the trailing e is dropped after the cut, not before it",
    },
    {
      a: "par",
      b: "parable",
      meet: false,
      why: "a parable is not a par, and it is the word able would ruin",
    },
    {
      a: "appear",
      b: "appearance",
      meet: true,
      why: "ance, spelled whole for the same reason as able",
    },
    {
      a: "ch",
      b: "chance",
      meet: false,
      why: "chance keeps its ance",
    },
    {
      a: "act",
      b: "action",
      meet: true,
      why: "the plain ion",
    },
    {
      a: "pass",
      b: "passion",
      meet: false,
      why: "passion is frozen in the irregular list, which is read first, precisely so that ion can be kept",
    },
    {
      a: "captive",
      b: "captivity",
      meet: true,
      why: "the plain ity",
    },
    {
      a: "author",
      b: "authority",
      meet: false,
      why: "an authority is not an author, and it is frozen for the same reason as passion",
    },
    {
      a: "action",
      b: "actions",
      meet: true,
      why: "a word and its own plural, which needs the ending cut to be asked more than once - actions ends in s and not in ion",
    },
    {
      a: "commandment",
      b: "commandments",
      meet: true,
      why: "the same again, and it was broken for every word built on ion, ment or ness",
    },
    {
      a: "confess",
      b: "confession",
      meet: true,
      why: "confession gives up its ion and stops at the doubled s, which is what proves the asking terminates",
    },
    {
      a: "act",
      b: "acts",
      meet: true,
      why: "a four letter plural, which a guard measuring the whole word rather than what remains used to refuse",
    },
    {
      a: "th",
      b: "thing",
      meet: false,
      why: "thing keeps its ing, which the same guard used to allow it to lose",
    },
    {
      a: "form",
      b: "formed",
      meet: true,
      why: "the plain ed",
    },
    {
      a: "cross",
      b: "crossed",
      meet: true,
      why: "the doubled s is kept rather than reduced, or crossed would reach cros and never meet cross",
    },
    {
      a: "jesus",
      b: "jesu",
      meet: false,
      why: "a word ending us keeps every letter, so the plural s never reaches into Jesus",
    },
    {
      a: "love",
      b: "loves",
      meet: true,
      why: "the trailing e is dropped from both sides, or the form that lost its e to an ending would fail to meet its own word",
    },
    {
      a: "wife",
      b: "wives",
      meet: true,
      why: "the f and ves family, which no rule reaches - loves and believes end in ves too",
    },
    {
      a: "man",
      b: "men",
      meet: true,
      why: "the word that changes shape rather than taking an ending, which is what the irregular list exists for",
    },
    {
      a: "be",
      b: "was",
      meet: true,
      why: "the same, and the commonest word in the New Testament",
    },
    {
      a: "lie",
      b: "lies",
      meet: true,
      why: "ies would leave one letter, so the word falls through to the plain s rather than being refused outright",
    },
  ];
  return cases;
}
