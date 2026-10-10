export function js_code_confined_cases() {
  "Small programs, each saying whether the confined runner must refuse it.";
  "Both directions are carried. A check that refuses nothing fails the escapes; a check that refuses everything fails the lesson-shaped programs, which is how the course would break.";
  let escapes = [
    'Function("return process")()',
    '"".constructor.constructor("return 1")()',
    'let k = "constr" + "uctor"; let f = (() => 1)[k]; f[k]("x")()',
    "let o = {}; o.__proto__.x = 1",
    "this.process",
    "globalThis.process",
    "process.exit()",
    'import("fs")',
    '{ let Function = 1; } Function("x")',
    "function f() { return arguments; } f()",
    'let { constructor: c } = () => 1; c("x")',
    "x = 5",
    "setTimeout(() => 1)",
    "function f() { return new.target; }",
    "class A { m() { return this; } }",
    'let a = [1]; let i = "constructor"; a[i]',
    '(async () => 1)["constructor"]',
    'console.log.constructor("x")',
    'fetch("http://x")',
    "let s = Symbol; s",
    "with (console) { log(1) }",
    "this",
  ];
  let lessons = [
    "let a = 1; let b = a + 2; console.log(b);",
    "let list = [1, 2, 3]; for (let i = 0; i < list.length; i++) { console.log(list[i]); }",
    "function add(a, b) { return a + b; } console.log(add(1, 2));",
    "let n = 10; while (n > 0) { n = n - 3; } console.log(n, Math.max(n, 0));",
    'let t = "a" + 1; if (t === "a1") { console.log(String(t).length); } else { console.log(parseInt("4")); }',
  ];
  let cases = [];
  for (let code of escapes) {
    cases.push({
      name: code,
      code,
      refused: true,
    });
  }
  for (let code of lessons) {
    cases.push({
      name: code,
      code,
      refused: false,
    });
  }
  return cases;
}
