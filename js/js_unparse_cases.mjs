import { text_frozen } from "./text_frozen.mjs";
export function js_unparse_cases() {
  "Written-out files beside the text each one comes back as, once it has been read in as a tree and written straight back out again without anything being changed in between.";
  "This is the step every transform in the repo ends with, so what it puts back is what lands in a file and what a peer reads afterwards. The round trip is the question: text in, tree, text out, and what differs between the two ends is the whole of what the writing decides.";
  "Spacing and a missing semicolon come back in one settled form whatever was written, and a file ends with a newline. That is what makes two rewritten files comparable at all - without it every transform would also be a reformatting, and a diff would say nothing about what actually changed.";
  "The quotes round a piece of text and the way a number was written are NOT settled that way: they come back exactly as they went in, because the writing prints the text a literal keeps beside its value rather than the value. The single-quoted text and the number written in hex are the two cases that would notice a writing that had started printing values instead - both would still be correct code, and both would have quietly rewritten something nobody asked to change. This is also the hazard the other way round: a change that writes a new value into a literal and leaves the old text sitting beside it comes back out as the old text, and nothing anywhere goes red.";
  "A comment does not survive. It is not attached to any node, so reading the file in drops it and writing the file out cannot put it back. The case is here to say so out loud: rewriting a file with a transform costs the comments in it, and that is a known price rather than a thing to discover later in a diff.";
  "Each piece of text is held as fixed text so the canonicalizing pass leaves the names inside it alone.";
  let cases = [
    {
      name: "a file comes back as it was written, with a newline at the end",
      code: text_frozen("let a = 1;"),
      written: text_frozen("let a = 1;\n"),
    },
    {
      name: "spacing and a missing semicolon are put back in one settled form",
      code: text_frozen("let a=1"),
      written: text_frozen("let a = 1;\n"),
    },
    {
      name: "text written in double quotes keeps its double quotes",
      code: text_frozen('let s = "x";'),
      written: text_frozen('let s = "x";\n'),
    },
    {
      name: "text written in single quotes keeps its single quotes",
      code: text_frozen("let s = 'x';"),
      written: text_frozen("let s = 'x';\n"),
    },
    {
      name: "a number written in hex comes back in hex, not as what it counts",
      code: text_frozen("let n = 0x10;"),
      written: text_frozen("let n = 0x10;\n"),
    },
    {
      name: "a comment is dropped, since nothing in the tree is holding it",
      code: text_frozen("// gone\nlet a = 1;"),
      written: text_frozen("let a = 1;\n"),
    },
    {
      name: "a block is written out indented by two, one statement to a line",
      code: text_frozen("if (a) {\n  b;\n}"),
      written: text_frozen("if (a) {\n  b;\n}\n"),
    },
  ];
  return cases;
}
