import { text_frozen } from "./text_frozen.mjs";
export function js_function_forwarding_remove_cases() {
  "Written-out code before and after every function that is only a second name for another one has been dropped.";
  "The first case is the whole point: a function handed to a repo function that calls it with exactly the arguments it takes is a name standing in the way, and the function it calls can be handed over instead.";
  "Every case after it is a keeping, and each names a different reason a wrapper is doing real work. A receiver reached through a property cannot be read, so how many arguments it hands over is unknown. A receiver that hands over fewer than the wrapper takes is the reason the wrapper was written. A wrapper handed over in two places has to agree with both. A name given to a variable is not ready until its line has run, and the place it would be handed over may sit above that line.";
  "Each piece of code is frozen text, because the names inside it are real repo names and the pass that turns a mentioned name into a reference would rewrite them into something the case no longer tests.";
  let cases = [
    {
      name: "handed to a walk that calls it with the one argument it takes",
      code: text_frozen(
        "function lambda(v) {\n  return ok(v);\n}\neach_async(xs, lambda);\n",
      ),
      after: text_frozen("each_async(xs, ok);\n"),
    },
    {
      name: "handed to something reached through a property, which cannot be read",
      code: text_frozen(
        "function lambda(v) {\n  return ok(v);\n}\nxs.map(lambda);\n",
      ),
      after: text_frozen(
        "function lambda(v) {\n  return ok(v);\n}\nxs.map(lambda);\n",
      ),
    },
    {
      name: "takes two where the walk hands over one, which is why it was written",
      code: text_frozen(
        "function lambda(v, w) {\n  return ok(v, w);\n}\neach_async(xs, lambda);\n",
      ),
      after: text_frozen(
        "function lambda(v, w) {\n  return ok(v, w);\n}\neach_async(xs, lambda);\n",
      ),
    },
    {
      name: "handed over in two places, which have to agree",
      code: text_frozen(
        "function lambda(v) {\n  return ok(v);\n}\neach_async(xs, lambda);\neach_async(ys, lambda);\n",
      ),
      after: text_frozen(
        "function lambda(v) {\n  return ok(v);\n}\neach_async(xs, lambda);\neach_async(ys, lambda);\n",
      ),
    },
    {
      name: "the one it calls is a variable, so it holds nothing until its line has run",
      code: text_frozen(
        "let ok = null;\nfunction lambda(v) {\n  return ok(v);\n}\neach_async(xs, lambda);\n",
      ),
      after: text_frozen(
        "let ok = null;\nfunction lambda(v) {\n  return ok(v);\n}\neach_async(xs, lambda);\n",
      ),
    },
  ];
  return cases;
}
