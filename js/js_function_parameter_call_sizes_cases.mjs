import { text_frozen } from "./text_frozen.mjs";
export function js_function_parameter_call_sizes_cases() {
  "Written-out functions pinning how many arguments each one hands to the function it was given, and which ones refuse to say.";
  "A refusal is the useful half. Whatever wants to swap one function for another of the same meaning may only do so when this reading gives a number, so every case answering with nothing is a swap that will not be made.";
  let cases = [
    {
      name: "calls it once, with one argument",
      code: text_frozen("function receiver(list, handler) {\n  handler(list);\n}\n"),
      index: 1,
      sizes: [1],
    },
    {
      name: "calls it twice, with two arguments each time",
      code: text_frozen(
        "function receiver(list, handler) {\n  handler(list, 1);\n  handler(list, 2);\n}\n",
      ),
      index: 1,
      sizes: [2, 2],
    },
    {
      name: "never calls it, so there is no number to disagree with",
      code: text_frozen("function receiver(list, handler) {\n  ok(list);\n}\n"),
      index: 1,
      sizes: [],
    },
    {
      name: "hands it on to somebody else, who decides the number elsewhere",
      code: text_frozen("function receiver(list, handler) {\n  other(handler);\n}\n"),
      index: 1,
      sizes: null,
    },
    {
      name: "gives it a second name first, so a mention is not a call",
      code: text_frozen(
        "function receiver(list, handler) {\n  let held = handler;\n  held(list);\n}\n",
      ),
      index: 1,
      sizes: null,
    },
    {
      name: "binds the same name again inside, so the mentions are not all the same thing",
      code: text_frozen(
        "function receiver(list, handler) {\n  if (list) {\n    let handler = 1;\n    ok(handler);\n  }\n  handler(list);\n}\n",
      ),
      index: 1,
      sizes: null,
    },
    {
      name: "was never given anything at this place",
      code: text_frozen("function receiver(list) {\n  ok(list);\n}\n"),
      index: 1,
      sizes: null,
    },
  ];
  return cases;
}
