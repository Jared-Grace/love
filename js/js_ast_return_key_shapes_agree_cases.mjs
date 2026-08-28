import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function js_ast_return_key_shapes_agree_cases() {
  arguments_assert(arguments, 0);
  ("Small written-out files, each beside the file the mend should turn it into.");
  ("The reading that finds these functions has a corpus of its own; the writing that mends them had none, and the writing is the half that changes files. It ran over twenty-four of them in one pass, and nothing but this says what it wrote.");
  ("HALF OF THESE MUST COME BACK UNTOUCHED, and that half is the one that matters. A mend that widened every record it could see would leave the gate it serves green - every way out would agree - while quietly naming keys in functions that never disagreed at all. So a file whose ways out already agree, a function with one way out, a record this cannot read, and a record reached from a way out that hands back something else all appear here and all must come back exactly as they went in.");
  ("The first case is the break itself, and it is here to show what the mend does NOT fix. Two ways out said marker_text where the third said marker, and the mend makes them agree by carrying both words with one of them empty - which is not what was wanted there. What was wanted was the key spelled back. So the mend takes one name at a time from somebody who has read the function, and this case is the reason why.");
  ("Each file is held as fixed text, because the names written inside are ordinary repo names and the canonicalizing pass would otherwise rewrite them into references and change what the case says. The mended text is printed the way the repo's own printer prints, so a case whose ways out already agree still comes back laid out afresh - what it must not come back with is a key it did not have.");
  let cases = [
    {
      name: "the rename break is made to agree by carrying both words, which is not the mend that break wanted",
      code: text_frozen(
        "export function f(line) {\n  if (a) {\n    let unmarked = { marker_text: '', rest: line };\n    return unmarked;\n  }\n  let both = { marker: c, rest: d };\n  return both;\n}\n",
      ),
      after: text_frozen(
        "export function f(line) {\n  if (a) {\n    let unmarked = {\n      marker_text: '',\n      rest: line,\n      marker: null\n    };\n    return unmarked;\n  }\n  let both = {\n    marker: c,\n    rest: d,\n    marker_text: null\n  };\n  return both;\n}\n",
      ),
    },
    {
      name: "three ways out, each gaining the words the other two carry and it does not",
      code: text_frozen(
        "export function f() {\n  if (a) {\n    return { about: 1, why: 2 };\n  }\n  if (b) {\n    return { about: 3 };\n  }\n  let named = { about: 4, f_name_new: 5 };\n  return named;\n}\n",
      ),
      after: text_frozen(
        "export function f() {\n  if (a) {\n    return {\n      about: 1,\n      why: 2,\n      f_name_new: null\n    };\n  }\n  if (b) {\n    return {\n      about: 3,\n      why: null,\n      f_name_new: null\n    };\n  }\n  let named = {\n    about: 4,\n    f_name_new: 5,\n    why: null\n  };\n  return named;\n}\n",
      ),
    },
    {
      name: "a word already carried keeps what it holds, and the order it was typed in is not a difference",
      code: text_frozen(
        "export function f() {\n  if (a) {\n    return { start: 1, end: 2 };\n  }\n  let r = { end: 4, start: 3 };\n  return r;\n}\n",
      ),
      after: text_frozen(
        "export function f() {\n  if (a) {\n    return {\n      start: 1,\n      end: 2\n    };\n  }\n  let r = {\n    end: 4,\n    start: 3\n  };\n  return r;\n}\n",
      ),
    },
    {
      name: "one way out has nothing to agree with, so nothing is named",
      code: text_frozen(
        "export function f() {\n  return { found: 1, path: 2 };\n}\n",
      ),
      after: text_frozen(
        "export function f() {\n  return {\n    found: 1,\n    path: 2\n  };\n}\n",
      ),
    },
    {
      name: "answering with nothing is not a record, so the record beside it is left alone",
      code: text_frozen(
        "export function f() {\n  if (a) {\n    return null;\n  }\n  return { found: 1, path: 2 };\n}\n",
      ),
      after: text_frozen(
        "export function f() {\n  if (a) {\n    return null;\n  }\n  return {\n    found: 1,\n    path: 2\n  };\n}\n",
      ),
    },
    {
      name: "a function written inside another is mended on its own words, and none of them reach the record around it",
      code: text_frozen(
        "export function f(list) {\n  function one(item) {\n    if (a) {\n      return { start: 1, text: item };\n    }\n    return { text: item };\n  }\n  let lines = list.map(one);\n  return { lines, duration: 2 };\n}\n",
      ),
      after: text_frozen(
        "export function f(list) {\n  function one(item) {\n    if (a) {\n      return {\n        start: 1,\n        text: item\n      };\n    }\n    return {\n      text: item,\n      start: null\n    };\n  }\n  let lines = list.map(one);\n  return {\n    lines,\n    duration: 2\n  };\n}\n",
      ),
    },
    {
      name: "a key not known until the code runs makes its record unreadable, so the function is left alone",
      code: text_frozen(
        "export function f(word) {\n  if (a) {\n    return { [word]: 1, rest: 2 };\n  }\n  return { marker: 1, rest: 2 };\n}\n",
      ),
      after: text_frozen(
        "export function f(word) {\n  if (a) {\n    return {\n      [word]: 1,\n      rest: 2\n    };\n  }\n  return {\n    marker: 1,\n    rest: 2\n  };\n}\n",
      ),
    },
    {
      name: "ways out handing back something this cannot read leave one record standing, and one record is left alone",
      code: text_frozen(
        "export function f(saved) {\n  if (a) {\n    return saved;\n  }\n  if (b) {\n    return saved;\n  }\n  return { kept: 1, why: 2 };\n}\n",
      ),
      after: text_frozen(
        "export function f(saved) {\n  if (a) {\n    return saved;\n  }\n  if (b) {\n    return saved;\n  }\n  return {\n    kept: 1,\n    why: 2\n  };\n}\n",
      ),
    },
    {
      name: "entries written the short way stay short, and the word named for them is written out",
      code: text_frozen(
        "export function f(rest, marker) {\n  if (a) {\n    return { marker, rest };\n  }\n  return { rest, extra: 3 };\n}\n",
      ),
      after: text_frozen(
        "export function f(rest, marker) {\n  if (a) {\n    return {\n      marker,\n      rest,\n      extra: null\n    };\n  }\n  return {\n    rest,\n    extra: 3,\n    marker: null\n  };\n}\n",
      ),
    },
  ];
  return cases;
}
