import { text_frozen } from "./text_frozen.mjs";
export function js_await_add_cases() {
  "Written-out code, each piece with its own small table of which functions wait, pinning which calls are given the word await and which are left alone.";
  "A call to a function that waits, left without the word, hands back a promise where the caller expects an answer. A word put in front of a call that does not wait costs nothing at run time but says something untrue about the call. So both directions matter, and the table is part of each case because the answer is a reading of the table as much as of the code.";
  "The tables here are made up rather than read from the repo. The names in them are real repo names, because the step asks the repo whether a name is a function of its own before it asks the table anything.";
  "One path is deliberately outside this corpus: where the function holding the call is the one its own file hands out, the step goes on to open every file that calls it and give the word there too. That writes to the repo, so a case cannot ask for it. The case named below stops one step short of it, by putting the call in a function the file does not hand out.";
  let cases = [
    {
      name: "a call to a function that waits is given the word",
      code: text_frozen('async function f() {\n  file_read("a");\n}'),
      functions: {
        file_read: {
          async: true,
        },
      },
      after: text_frozen('async function f() {\n  await file_read("a");\n}\n'),
    },
    {
      name: "a call to a function that does not wait is left alone",
      code: text_frozen("async function f() {\n  not(1);\n}"),
      functions: {
        not: {
          async: false,
        },
      },
      after: text_frozen("async function f() {\n  not(1);\n}\n"),
    },
    {
      name: "a call that already has the word is left alone",
      code: text_frozen('async function f() {\n  await file_read("a");\n}'),
      functions: {
        file_read: {
          async: true,
        },
      },
      after: text_frozen('async function f() {\n  await file_read("a");\n}\n'),
    },
    {
      name: "a name the table says nothing about is left alone",
      code: text_frozen('async function f() {\n  file_read("a");\n}'),
      functions: {},
      after: text_frozen('async function f() {\n  file_read("a");\n}\n'),
    },
    {
      name: "a name no function in the repo answers to is left alone, whatever the table says",
      code: text_frozen('async function f() {\n  zzz_no_such_name("a");\n}'),
      functions: {
        zzz_no_such_name: {
          async: true,
        },
      },
      after: text_frozen('async function f() {\n  zzz_no_such_name("a");\n}\n'),
    },
    {
      name: "the function holding the call is made to wait as well",
      code: text_frozen(
        'export function outer() {}\nfunction inner() {\n  file_read("a");\n}',
      ),
      functions: {
        file_read: {
          async: true,
        },
      },
      after: text_frozen(
        'export function outer() {}\nasync function inner() {\n  await file_read("a");\n}\n',
      ),
    },
    {
      name: "a call whose answer is given a name is given the word too",
      code: text_frozen('async function f() {\n  let r = file_read("a");\n}'),
      functions: {
        file_read: {
          async: true,
        },
      },
      after: text_frozen(
        'async function f() {\n  let r = await file_read("a");\n}\n',
      ),
    },
    {
      name: "a parameter of that name is left alone",
      code: text_frozen('async function f(file_read) {\n  file_read("a");\n}'),
      functions: {
        file_read: {
          async: true,
        },
      },
      after: text_frozen(
        'async function f(file_read) {\n  file_read("a");\n}\n',
      ),
    },
    {
      name: "a variable of that name is left alone",
      code: text_frozen(
        'async function f() {\n  let file_read = pick();\n  file_read("a");\n}',
      ),
      functions: {
        file_read: {
          async: true,
        },
      },
      after: text_frozen(
        'async function f() {\n  let file_read = pick();\n  file_read("a");\n}\n',
      ),
    },
    {
      name: "a function of that name written in the file is left alone",
      code: text_frozen(
        'async function f() {\n  function file_read(x) {\n    return x;\n  }\n  file_read("a");\n}',
      ),
      functions: {
        file_read: {
          async: true,
        },
      },
      after: text_frozen(
        'async function f() {\n  function file_read(x) {\n    return x;\n  }\n  file_read("a");\n}\n',
      ),
    },
  ];
  return cases;
}
