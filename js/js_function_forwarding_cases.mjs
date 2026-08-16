import { text_frozen } from "./text_frozen.mjs";
export function js_function_forwarding_cases() {
  "Written-out functions pinning which ones count as a second name for the function they call, and which ones do something of their own.";
  "A function that counts can be dropped, and the function it calls passed in its place. So every case that answers with a name is a licence to delete code, and a case that answers with nothing is the reading refusing to give that licence.";
  "The refusals are the point of the corpus. Each one names a way a function can look like a hand-off while doing something the hand-off would lose: a different order, an argument of its own, a wait, a name that means nothing outside, an answer that is not the call's.";
  let cases = [
    {
      name: "returns the call it was given the arguments for",
      code: text_frozen("function lambda(v) {\n  return ok(v);\n}\n"),
      target: "ok",
    },
    {
      name: "gives the call a name and returns that name",
      code: text_frozen(
        "function lambda(v) {\n  let r = ok(v);\n  return r;\n}\n",
      ),
      target: "ok",
    },
    {
      name: "makes the call and throws the answer away",
      code: text_frozen("function lambda(v) {\n  ok(v);\n}\n"),
      target: "ok",
    },
    {
      name: "says what it is for first, which is not a thing it does",
      code: text_frozen(
        'function lambda(v) {\n  "hands it over";\n  return ok(v);\n}\n',
      ),
      target: "ok",
    },
    {
      name: "hands both over in the other order, which is work of its own",
      code: text_frozen("function lambda(v, w) {\n  return ok(w, v);\n}\n"),
      target: null,
    },
    {
      name: "adds an argument the caller never gave it",
      code: text_frozen("function lambda(v) {\n  return ok(v, 1);\n}\n"),
      target: null,
    },
    {
      name: "waits for the answer, so it hands back a promise where the other hands back a value",
      code: text_frozen(
        "async function lambda(v) {\n  let r = await ok(v);\n  return r;\n}\n",
      ),
      target: null,
    },
    {
      name: "calls a name it was handed, which means nothing anywhere else",
      code: text_frozen("function lambda(f) {\n  return f(f);\n}\n"),
      target: null,
    },
    {
      name: "returns something other than the call's answer",
      code: text_frozen(
        "function lambda(v) {\n  let r = ok(v);\n  return v;\n}\n",
      ),
      target: null,
    },
    {
      name: "reaches the call through a property, so there is no plain name to pass",
      code: text_frozen("function lambda(v) {\n  return ok.call(v);\n}\n"),
      target: null,
    },
  ];
  return cases;
}
