import { js_builtin_calls_rewrite } from "../../js/js_builtin_calls_rewrite.mjs";
export const example = {
  fn: js_builtin_calls_rewrite.name,
  args: [],
  kind: "transform",
  title: "Say a built-in method with the name the repo keeps for it",
  note: [
    "The operator pass already turns ",
    {
      code: "a - b",
    },
    " into a call, on the grounds that the repo says that with a name. A method written after a dot is the same thing one step further out, and ",
    {
      fn: js_builtin_calls_rewrite.name,
    },
    " finishes it: every call to a method the repo already has a function for is pointed at that function. Which built-ins those are is a list of pairings, so ",
    {
      code: "JSON.stringify",
    },
    " and ",
    {
      code: "Date.now",
    },
    " are covered by the same reading that covers ",
    {
      code: "Math.floor",
    },
    ".",
    " Three calls here are left exactly as written, and each refusal is the interesting part.",
    " ",
    {
      code: "Math.max(a, b, c)",
    },
    " hands over three things where ",
    {
      code: "math_max",
    },
    " takes two, so rewriting it would quietly turn a largest-of-three into a largest-of-two that still read as if nothing had changed.",
    " ",
    {
      code: "Math.sqrt",
    },
    " has no function standing for it, so there is nothing to point it at.",
    " And ",
    {
      code: "thing.round",
    },
    " only looks like one — the name before the dot is half of what says which pairing a call matches.",
  ],
  before: `export function f(a, b, c, thing) {
  let low = Math.floor(a);
  let near = Math.round(b);
  let small = Math.min(a, b);
  let three = Math.max(a, b, c);
  let root = Math.sqrt(a);
  let other = thing.round(b);
  let text = JSON.stringify(a);
  let stamp = Date.now();
  let all = [low, near, small, three, root, other, text, stamp];
  return all;
}`,
  after: `export function f(a, b, c, thing) {
  let low = floor(a);
  let near = round(b);
  let small = math_min(a, b);
  let three = Math.max(a, b, c);
  let root = Math.sqrt(a);
  let other = thing.round(b);
  let text = json_to(a);
  let stamp = date_now_milliseconds();
  let all = [low, near, small, three, root, other, text, stamp];
  return all;
}`,
};
