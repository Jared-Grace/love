import { text_frozen } from "./text_frozen.mjs";
export function text_split_comma_outside_brackets_cases() {
  "Lists written the way a command line receives them, each one saying what cutting it at its own commas should give back, and a refusal written as nothing at all.";
  "The plain cases are here because every one of them worked before this existed and has to keep working unchanged. A word with no bracket in it is what every transform in the repo already hands over, and if one of those ever came back different the cost would land on calls nobody was thinking about.";
  "The refusals carry the rule that a mismatched bracket is not quietly absorbed. What they guard is somebody meeting one of them, reading it as a bug, and taking it out - after which a list written one bracket short comes back one part short and says nothing.";
  "Each list is held as fixed text, because the pass that canonicalizes this file would otherwise read a name inside one as a reference and change what the case says.";
  let cases = [
    {
      written: text_frozen("a"),
      taken: ["a"],
      why: "one word alone comes back as a list of one, which is what the plain splitter has always handed back",
    },
    {
      written: text_frozen("a,b,c"),
      taken: ["a", "b", "c"],
      why: "single commas between words with no bracket anywhere is every list this repo has ever written, and it has to come back exactly as it did before brackets were read at all",
    },
    {
      written: text_frozen("rgb(55, 55, 55)"),
      taken: ["rgb(55, 55, 55)"],
      why: "the case this was built for: one colour spelled with two commas of its own is one thing rather than three, and the plain splitter could only ever hand back three pieces none of which is a colour",
    },
    {
      written: text_frozen("#000000 ~ rgb(55, 55, 55),#0b0b0b ~ #1a1a1a"),
      taken: ["#000000 ~ rgb(55, 55, 55)", "#0b0b0b ~ #1a1a1a"],
      why: "a value carrying commas standing beside one that does not, so the cut is decided per comma rather than per list",
    },
    {
      written: text_frozen("a,rgb(1, 2, 3),b"),
      taken: ["a", "rgb(1, 2, 3)", "b"],
      why: "the commas inside a bracket are passed over and the ones outside it still cut, on both sides of it",
    },
    {
      written: text_frozen("f(g(1, 2), 3),b"),
      taken: ["f(g(1, 2), 3)", "b"],
      why: "a bracket inside a bracket is counted rather than matched against the first closing one, so the piece is not cut short at its own middle",
    },
    {
      written: text_frozen("rgb(55, 55, 55"),
      taken: null,
      why: "a bracket left open at the end is refused, because the quiet answer is a list one part shorter than was written and that reads exactly like a list somebody wrote one part shorter",
    },
    {
      written: text_frozen("a),b"),
      taken: null,
      why: "a closing bracket with nothing open is refused where it stands rather than counted downwards, which would let a later comma be swallowed by a depth that was never really entered",
    },
  ];
  return cases;
}
