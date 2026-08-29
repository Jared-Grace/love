import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function js_compare_text_number_cases() {
  "Small files written out, each one saying which of its own exact comparisons holds a cut of text against a number.";
  "The whole-repo gate over this reader passes by finding nothing, which is exactly what a repo with nothing wrong looks like and exactly what a reader that has stopped looking looks like. The first case here must come back with a line, and that is what tells the two apart.";
  "The first case is the one this was written for, copied in the shape it really had: a chapter cut out of a file as writing, held against a chapter handed in as a number, matching nothing and saying nothing. The second case is the same file after the repair, and must be silent.";
  "The false cases carry the edges that made earlier drafts of this reader wrong. A call whose name ends in the word number does not make a number - writing a number out makes text, and reading that as a number made this reader accuse the very function it was written to defend. A call that measures text gives a number even though its own name begins with the word text, so a name is never trusted over what it was filled from. And two cuts of text held against each other are ordinary and must not be reported.";
  "Every name written inside a case is held as fixed text, because the pass that canonicalizes this file would otherwise read a real one as a reference.";
  let cases = [
    {
      code: text_frozen(
        'export function taken(lines, chapter_number) {\n  let inside = false;\n  for (let line of lines) {\n    let number = text_split_first(line, " ");\n    inside = equal(number, chapter_number);\n  }\n  return inside;\n}\n',
      ),
      found: ["equal(number, chapter_number)"],
      why: "the case this was written for - the chapter is cut out of the file so it is writing, the caller holds it as a number, and the exact comparison matches nothing while reporting nothing",
    },
    {
      code: text_frozen(
        'export function taken(lines, chapter_number) {\n  let wanted = text_from_number(chapter_number);\n  let inside = false;\n  for (let line of lines) {\n    let number = text_split_first(line, " ");\n    inside = equal(number, wanted);\n  }\n  return inside;\n}\n',
      ),
      found: [],
      why: "the same file after the repair - the number is written out once before the walk, so both sides are writing and there is nothing to say",
    },
    {
      code: text_frozen(
        "export function walk(input) {\n  let index_left = 0;\n  let index_last = text_size(input);\n  let done = equal(index_left, index_last);\n  return done;\n}\n",
      ),
      found: [],
      why: "a measurement of text is a number however the measuring is named, so a name beginning with the word text must not be read as a cut of text - an earlier draft reported this line and it is correct",
    },
    {
      code: text_frozen(
        'export function same(left, right) {\n  let a = text_split_first(left, " ");\n  let b = text_split_first(right, " ");\n  let both = equal(a, b);\n  return both;\n}\n',
      ),
      found: [],
      why: "two cuts of text held against each other, which is the ordinary way this comparison is used and must never be reported",
    },
    {
      code: text_frozen(
        'export function differs(code, line) {\n  let chapter_number = text_to_number(code);\n  let number = text_split_first(line, " ");\n  let apart = not_equal(chapter_number, number);\n  return apart;\n}\n',
      ),
      found: [
        text_combine_multiple([
          fn_name("not_equal"),
          "(chapter_number, number)",
        ]),
      ],
      why: "the same fault written the other way round and with the other comparison - the number stands on the left and the cut of text on the right, and both orders are equally silent",
    },
  ];
  return cases;
}
