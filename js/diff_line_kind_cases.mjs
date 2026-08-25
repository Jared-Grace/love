import { text_frozen } from "./text_frozen.mjs";
export function diff_line_kind_cases() {
  "Single changed lines of a difference, each beside the kind of thing that line is made of.";
  "IT WAS WRITTEN THE DAY THE READING WAS FOUND WRONG. A line was called a paragraph on its opening character alone, so every key inside a written-out record counted as prose, and the mistake stood long enough for a whole measurement to be built on it and reported. Nothing went red, because nothing was watching.";
  "THE RECORD ENTRIES ARE THE POINT OF THE CORPUS. Three of them are here and all three would have passed before - one closing at a comma because another entry follows, one closing at its own value because it is the last, one whose value is itself a piece of text so that the line opens and closes on a quote. Between them they hold the fix in place, which is that a paragraph is known by how it ends and not by how it begins.";
  "BOTH SIGNS APPEAR, because the sign is cut off before anything else is asked and a reading that only ever cut the one sign would answer about a line taken out by looking at its first letter.";
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
      kind: "code",
    },
    {
      name: "the last entry in a record, which closes at its own value and is not a paragraph either",
      line: text_frozen('+  "fellowship": 1'),
      kind: "code",
    },
    {
      name: "an entry whose value is itself a piece of text, which opens and closes on a quote and is still not a paragraph",
      line: text_frozen('+  "lamp": "#ffcc00",'),
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
