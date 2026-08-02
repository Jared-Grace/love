export function js_call_named_argument_at_undroppable_cases() {
  "Small written-out files, each saying which arguments at one place in a call could not be dropped without dropping a behaviour with them.";
  "This reading is the last thing standing between the repair that takes an unread parameter off a function and every call site of it. What it fails to see is written away silently, so the shapes it turns on are written out here rather than trusted.";
  "Each file is held as fixed text so no rename walks into it.";
  let cases = [
    {
      name: "a spread before the place is unsafe whatever sits at the place, because nothing here can say how many arguments it becomes",
      code: text_frozen("f(...rest, x, y);\n"),
      index: 2,
      unsafe: [text_frozen("f(...rest, x, y)")],
    },
    {
      name: "a spread after the place is harmless - the target keeps its place and the spread only moves left with everything else",
      code: text_frozen("f(a, b, ...rest);\n"),
      index: 1,
      unsafe: [],
    },
    {
      name: "a plain name does nothing when it is evaluated, so dropping it drops nothing",
      code: text_frozen("f(a, b, c);\n"),
      index: 1,
      unsafe: [],
    },
    {
      name: "a call may be the whole reason its line was written, so it cannot be dropped",
      code: text_frozen("f(a, g(b), c);\n"),
      index: 1,
      unsafe: [text_frozen("g(b)")],
    },
    {
      name: "a call site that never reached that place has nothing there to drop",
      code: text_frozen("f(a);\n"),
      index: 1,
      unsafe: [],
    },
    {
      name: "a written-out value is the other shape that does nothing when it is evaluated",
      code: text_frozen("f(a, 1);\n"),
      index: 1,
      unsafe: [],
    },
    {
      name: "a property read can throw, so it is not the free thing a plain name is",
      code: text_frozen("f(a, record.total);\n"),
      index: 1,
      unsafe: [text_frozen("record.total")],
    },
  ];
  return cases;
}
