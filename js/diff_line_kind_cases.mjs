import { text_frozen } from "./text_frozen.mjs";
export function diff_line_kind_cases() {
  "Single changed lines of a difference, each beside the kind of thing that line is made of.";
  "IT WAS WRITTEN THE DAY THE READING WAS FOUND WRONG. A line was called a paragraph on its opening character alone, so every key inside a written-out record counted as prose, and the mistake stood long enough for a whole measurement to be built on it and reported. Nothing went red, because nothing was watching.";
  "THE RECORD ENTRIES ARE THE POINT OF THE CORPUS. Three of them are here and all three would have passed before - one closing at a comma because another entry follows, one closing at its own value because it is the last, one whose value is itself a piece of text so that the line opens and closes on a quote. Between them they hold the fix in place, which is that a paragraph is known by how it ends and not by how it begins.";
  "BOTH SIGNS APPEAR, because the sign is cut off before anything else is asked and a reading that only ever cut the one sign would answer about a line taken out by looking at its first letter.";
  "THE UNDECIDED SHAPE IS HELD FROM BOTH ENDS. A name and a number are here, and one of each closes at a comma while the other runs out at its own value, because requiring the comma was the narrowing that let a list of plain numbers extended by one be read as a line of program put in place of another - the whole of that commit, three changed lines, and not a word of program in any of them.";
  "A PARAGRAPH PRINTED OVER SEVERAL LINES IS HERE FOR BOTH OF ITS ANSWERS. Its opening line is prose and is named so, and the line under it, which hands a function's name over inside brackets, is program and is named that - not because it is program but because nothing about the line says it is not, and a corpus that only pinned the parts that come out right would hide the shortfall it is here to record.";
  "THE LINES ARE FROZEN TEXT, because they hold names spelled the way the code spells them and the pass that turns a mentioned name into a reference would otherwise rewrite the corpus out from under the gate.";
  let cases = [
    {
      name: "an import put in, which the canonicalizing pass writes rather than a person",
      line: text_frozen('+import { add } from "./add.mjs";'),
      kind: "import",
    },
    {
      name: "an import taken out, which proves the sign is cut off on the other side too",
      line: text_frozen('-import { add } from "./add.mjs";'),
      kind: "import",
    },
    {
      name: "a paragraph put in, written as a plain piece of text standing alone",
      line: text_frozen('+  "What this does, said plainly.";'),
      kind: "comment",
    },
    {
      name: "a paragraph taken out, wrapped in brackets the way a long one is printed",
      line: text_frozen('-  ("What this does, said at greater length.");'),
      kind: "comment",
    },
    {
      name: "an entry in a record with another entry after it, which closes at a comma and is not a paragraph",
      line: text_frozen('+  "offer": 2,'),
      kind: "data",
    },
    {
      name: "the last entry in a record, which closes at its own value and is not a paragraph either",
      line: text_frozen('+  "fellowship": 1'),
      kind: "data",
    },
    {
      name: "an entry whose value is itself a piece of text, which opens and closes on a quote and is still not a paragraph",
      line: text_frozen('+  "lamp": "#ffcc00",'),
      kind: "data",
    },
    {
      name: "a number raised in a record under a name spelled without quotes, which is the commonest hand-made edit there is",
      line: text_frozen("+      kept: 8,"),
      kind: "data",
    },
    {
      name: "a name whose value waits on the next line, which is a key even with nothing after the colon",
      line: text_frozen("+      lyric_explain:"),
      kind: "data",
    },
    {
      name: "the value that waited, standing alone as a piece of text and closing at a comma rather than a semicolon",
      line: text_frozen(
        '+        "Being in an agony HE prayed more earnestly.",',
      ),
      kind: "data",
    },
    {
      name: "a line of program holding a colon inside a piece of text, which the opening run rules out before the colon is reached",
      line: text_frozen('+  let ref = text_trim("1 Peter 1:17");'),
      kind: "code",
    },
    {
      name: "a name alone on its line, which is answered as itself because an entry of a list, a part of a record and an argument to a call broken over several lines are all written that way",
      line: text_frozen("+    app_fn,"),
      kind: "name alone",
    },
    {
      name: "a name alone taken out, which proves the doubt is carried on both sides of a difference",
      line: text_frozen("-    js_selects_text_set,"),
      kind: "name alone",
    },
    {
      name: "a number standing alone with a comma, which is an entry of a list of numbers and under the same doubt a name is",
      line: text_frozen("+  8,"),
      kind: "name alone",
    },
    {
      name: "a number standing alone with no comma, which is how the last entry of a list is written and was read as program until it was opened",
      line: text_frozen("+  9"),
      kind: "name alone",
    },
    {
      name: "a name standing alone with no comma, which is how the last argument of a call broken over several lines is written",
      line: text_frozen("-    changed"),
      kind: "name alone",
    },
    {
      name: "the opening line of a paragraph printed over several lines, which opens a bracket and a piece of text and runs out at a comma",
      line: text_frozen(
        '+  ("A page opening its body tag any other way says the same thing. ",',
      ),
      kind: "comment",
    },
    {
      name: "a name handed over inside a paragraph printed over several lines, which is written the same way whether a reader or a program receives it and so stays program",
      line: text_frozen('+    fn_name("html_code_is"),'),
      kind: "code",
    },
    {
      name: "a name with a dot in it standing alone, which is a reading rather than a name and so is program",
      line: text_frozen("+    js_array_text_add.name,"),
      kind: "code",
    },
    {
      name: "a call standing alone as an argument, which ends at a comma but is not a bare name",
      line: text_frozen("+    text_trim(line),"),
      kind: "code",
    },
    {
      name: "an ordinary line of program, which is the only kind that stands for a missing command",
      line: text_frozen("+  let r = work(state);"),
      kind: "code",
    },
  ];
  return cases;
}
