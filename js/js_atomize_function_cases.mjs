import { text_frozen } from "./text_frozen.mjs";
export function js_atomize_function_cases() {
  "Written-out code pinning which functions written inside a call the lifting pass takes out into a declaration of their own and which it leaves where they stand.";
  "The third case is why this corpus exists. Two functions written as arguments may share a name, because as arguments the name belongs to each one alone and neither can see the other. Lifted side by side into one block they become two declarations of one name, both hoisted, and the later one answers to it everywhere - so the first call quietly runs the second function. Found 2026-08-16 in a function whose map then received the wrong one; the canonicalize answered ok, both shadowing gates were looking at nesting rather than sameness, and a duplicate function declaration is legal, so nothing anywhere went red.";
  "The second case is the third one with the two names made different, and that pair is what makes this a proof rather than a set of agreeing examples. Same code, same two functions, same block - only whether the names match differs. A pass with the check taken out lifts both and fails the third; a check that fires too widely lifts one and fails the second.";
  "Each piece of code is frozen text, because the words inside are ordinary repo names and the pass that turns a mentioned name into a reference would rewrite them into something the case no longer tests.";
  let cases = [
    {
      name: "one function written inside a call, which is given a declaration of its own",
      code: text_frozen(
        "list_any(xs, function lambda(v) {\n  return ok(v);\n});\n",
      ),
      lifted: 1,
    },
    {
      name: "two of them under names that differ, both lifted",
      code: text_frozen(
        "first(xs, function lambda(v) {\n  return ok(v);\n});\nsecond(ys, function lambda2(w) {\n  return ok(w);\n});\n",
      ),
      lifted: 2,
    },
    {
      name: "two of them under one name, where lifting the second would take the first one's callers with it",
      code: text_frozen(
        "first(xs, function lambda(v) {\n  return ok(v);\n});\nsecond(ys, function lambda(w) {\n  return no(w);\n});\n",
      ),
      lifted: 1,
    },
    {
      name: "a function given to a name rather than to a call, which is already where a declaration would put it",
      code: text_frozen("let f = function lambda(v) {\n  return ok(v);\n};\n"),
      lifted: 0,
    },
  ];
  return cases;
}
