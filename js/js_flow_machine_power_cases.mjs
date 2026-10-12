export function js_flow_machine_power_cases() {
  "Whole files of one exported function f, and whether what f hands back still reaches the machine. Power true means a caller handed the answer is handed a tool: the edit check must keep refusing it. Power false means the answer is plain data, so a caller is handed a value only.";
  "THE POWER CASES ARE THE POINT. Making data answers pass is the convenience; letting one tool through as data is the fault, and it is silent, because the check then simply says yes. So every way a handle leaves a function - returned bare, inside a record, inside a list, in a closure, bound, by a method left off the data list, by an import never called - has a case of its own, and each one fails alone.";
  "Every function here reaches the machine, so every one stays dangerous to edit whatever its answer. These cases ask only about the answer.";
  let cases = [
    {
      source: 'import fs from "fs";\nexport function f() {\n  return fs;\n}\n',
      power: true,
      why: "the module itself handed back",
    },
    {
      source:
        'import fs from "fs";\nexport function f() {\n  return fs.promises;\n}\n',
      power: true,
      why: "a property of the module, not a call, still holds the module's powers",
    },
    {
      source:
        'import { spawn } from "child_process";\nexport function f(c) {\n  return spawn(c);\n}\n',
      power: true,
      why: "spawn hands back a running process, which can be written to and killed",
    },
    {
      source:
        'import fs from "fs";\nexport function f(p) {\n  return fs.createReadStream(p);\n}\n',
      power: true,
      why: "a stream is a handle on an open file",
    },
    {
      source:
        'import fs from "fs";\nexport async function f(p) {\n  return await fs.promises.open(p);\n}\n',
      power: true,
      why: "open is left off the data list because it hands back a file handle",
    },
    {
      source: "export function f() {\n  return process;\n}\n",
      power: true,
      why: "a machine global handed back bare",
    },
    {
      source:
        'import fs from "fs";\nexport function f() {\n  return fs.readFileSync.bind(fs);\n}\n',
      power: true,
      why: "a data method not yet called is a tool, and bind is not a data method",
    },
    {
      source: "export function f(u) {\n  return fetch(u);\n}\n",
      power: true,
      why: "fetch itself is a machine global, so its answer is not trusted as data; only the answer's json or text is",
    },
    {
      source:
        'import fs from "fs";\nexport function f() {\n  return { fs };\n}\n',
      power: true,
      why: "the module inside a record",
    },
    {
      source:
        'import fs from "fs";\nexport function f() {\n  return [fs];\n}\n',
      power: true,
      why: "the module inside a list",
    },
    {
      source:
        'import fs from "fs";\nexport function f(p) {\n  return () => fs.readFileSync(p);\n}\n',
      power: true,
      why: "a closure that reads the disk whenever it is called",
    },
    {
      source:
        'import { readFileSync } from "fs";\nexport function f() {\n  return readFileSync;\n}\n',
      power: true,
      why: "a data method imported by name and handed back uncalled",
    },
    {
      source:
        'import fs from "fs";\nexport function f(p, h) {\n  let a = fs;\n  if (p) {\n    a = h;\n  }\n  return a.readdirSync(p);\n}\n',
      power: true,
      why: "a data method on something that is the machine only some of the time: the other time it is whatever the caller handed in, whose readdirSync may hand back anything",
    },
    {
      source:
        'import fs from "fs";\nexport function f(p) {\n  return fs.readdirSync(p);\n}\n',
      power: false,
      why: "a list of names",
    },
    {
      source: "export function f() {\n  return process.cwd();\n}\n",
      power: false,
      why: "a folder path is text",
    },
    {
      source:
        'import os from "os";\nexport function f() {\n  return os.homedir();\n}\n',
      power: false,
      why: "a folder path is text",
    },
    {
      source:
        "export async function f(u) {\n  let r = await fetch(u);\n  return await r.json();\n}\n",
      power: false,
      why: "a fetch answer's json is plain data even though the answer itself is not",
    },
    {
      source:
        'import * as fs from "fs";\nexport function f(p) {\n  return fs.readFileSync(p);\n}\n',
      power: false,
      why: "a namespace import read through a data method gives bytes",
    },
    {
      source:
        'import fs from "fs";\nexport function f(p) {\n  let all = fs.readdirSync(p);\n  return all.filter((n) => fs.statSync(n).isFile());\n}\n',
      power: false,
      why: "a filter over a list of names hands back names, never the function that chose them",
    },
    {
      source:
        'import fs from "fs";\nexport function f(p) {\n  let all = fs.readdirSync(p);\n  return all.filter((n) => n).slice(1).find((n) => fs.existsSync(n));\n}\n',
      power: false,
      why: "a search over a filtered list of names is still a name",
    },
    {
      source:
        'import fs from "fs";\nexport function f(xs) {\n  return xs.filter(() => fs);\n}\n',
      power: true,
      why: "a filter on something handed in may be the caller's own, which may hand back the function",
    },
    {
      source:
        'import fs from "fs";\nexport function f(p) {\n  let all = fs.readdirSync(p);\n  return all.map(() => fs);\n}\n',
      power: true,
      why: "a map hands back what the function gave, and this one gives the module",
    },
    {
      source:
        'import fs from "fs";\nexport function f(p, xs) {\n  let all = p ? fs.readdirSync(p) : xs;\n  return all.find(() => fs);\n}\n',
      power: true,
      why: "a list that is plain data only some of the time: the other time it is whatever the caller handed in",
    },
    {
      source:
        'import fs from "fs";\nexport function f(p) {\n  let all = fs.readdirSync(p);\n  let found = null;\n  function keep(n) {\n    found = n;\n    return fs.existsSync(n);\n  }\n  all.filter(keep);\n  return found;\n}\n',
      power: false,
      why: "a callback handed only to a filter over names is only ever handed a name",
    },
    {
      source:
        'import fs from "fs";\nexport function f(p, g) {\n  let all = fs.readdirSync(p);\n  let found = null;\n  function keep(n) {\n    found = n;\n    return true;\n  }\n  all.filter(keep);\n  g(keep, fs);\n  return found;\n}\n',
      power: true,
      why: "a callback also handed to an unknown function may be called by it with the module",
    },
  ];
  return cases;
}
