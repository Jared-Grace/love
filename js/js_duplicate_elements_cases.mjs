import { text_frozen } from "./text_frozen.mjs";
export function js_duplicate_elements_cases() {
  "Small files written out, each one saying which names the ordered lists in it hold twice.";
  "The false cases carry the whole rule, because the true one is obvious and the edges are where this could go wrong in either direction. A list too short to be a register, a list with written words between its names, a list of nothing but written words - each of those repeats something and none of them is a mistake, and a reading that reported any of them would be taken back out within the day.";
  "The empty answer is also what a reader that has stopped looking gives, which is why the true cases are here: without them this whole check could pass by finding nothing forever.";
  "Every name written inside a case is held as fixed text, because the pass that canonicalizes this file would otherwise read a real one as a reference and change what the case says.";
  let cases = [
    {
      code: text_frozen("let r = [a, b, c, d, e, b];\n"),
      names: ["b"],
      why: "a register of six names with one of them written twice - the plain case, and the one two of us wrote by each adding the same gate seconds apart",
    },
    {
      code: text_frozen("let r = [a, b, c, d, e, f];\n"),
      names: [],
      why: "the same register with nothing repeated must stay silent, or the check would report every register there is",
    },
    {
      code: text_frozen("let r = [a, b, c, d, b, a, c];\n"),
      names: ["b", "a", "c"],
      why: "three names repeated are three findings, each named once however many times it was written",
    },
    {
      code: text_frozen("let r = [a, b, c, b, a];\n"),
      names: [],
      why: "five is too few to be a register, and what this shape actually is is something wrapped on both sides - the repo has a line of praise written exactly this way",
    },
    {
      code: text_frozen('let r = [a, " and ", b, " and ", a, "."];\n'),
      names: [],
      why: "written words between the names mean this is text being spelled out a piece at a time, so a name standing either side of one of them is doing two jobs rather than being listed twice",
    },
    {
      code: text_frozen('let r = ["a", "b", "c", "d", "e", "b"];\n'),
      names: [],
      why: "a list of written words may perfectly well say the same thing twice and mean it - only names stand for something that gets run or read",
    },
  ];
  return cases;
}
