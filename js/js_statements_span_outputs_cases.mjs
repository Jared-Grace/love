import { text_frozen } from "./text_frozen.mjs";
export function js_statements_span_outputs_cases() {
  "Written-out pairs of a run of lines and the lines behind it, pinning which names the run has to hand back when it leaves";
  "Each case is two pieces of a single function body, given as text: what would be cut out, and what would stay behind it. They are parsed into statements before the reading is asked, which is the shape the reading takes them in.";
  "The cases fail both ways on purpose. A reading that handed back every name it saw declared breaks the three that hand back nothing; a reading that handed back none breaks the two that must.";
  "The names inside are frozen text, because the pass that turns a mentioned name into a reference would otherwise rewrite them and the case would stop testing what it was written for.";
  let cases = [
    {
      name: "a name the lines behind still read must be handed back",
      span: text_frozen("let total = 1;\n"),
      tail: text_frozen("console.log(total);\n"),
      outputs: ["total"],
    },
    {
      name: "a name nothing behind reads stays where it is",
      span: text_frozen("let total = 1;\n"),
      tail: text_frozen("console.log(2);\n"),
      outputs: [],
    },
    {
      name: "a name opened by a loop head is bound too deep to hand back",
      span: text_frozen("for (let ms of known) {\n  added += ms;\n}\n"),
      tail: text_frozen("console.log(ms);\n"),
      outputs: [],
    },
    {
      name: "the function's own name is handed back, the name opened inside it is not",
      span: text_frozen("function cost() {\n  let ms = 1;\n  return ms;\n}\n"),
      tail: text_frozen("console.log(cost() + ms);\n"),
      outputs: ["cost"],
    },
    {
      name: "two names read behind, both handed back",
      span: text_frozen("let one = 1;\nlet other = 2;\n"),
      tail: text_frozen("console.log(one + other);\n"),
      outputs: ["one", "other"],
    },
    {
      name: "nothing declared at all, so nothing to hand back",
      span: text_frozen("console.log(1);\n"),
      tail: text_frozen("console.log(2);\n"),
      outputs: [],
    },
  ];
  return cases;
}
