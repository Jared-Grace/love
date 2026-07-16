import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { js_parse_statement } from "../js/js_parse_statement.mjs";
import { js_parse_expression } from "../js/js_parse_expression.mjs";

// runs the example corpus as a gate: rejection examples run in-memory here;
// transform examples are sandbox-run (browser IndexedDB, or a temp-file runner).
let here = dirname(fileURLToPath(import.meta.url));
let root = dirname(here);
let dir = join(root, "data", "examples");
let jsdir = join(root, "js");

function build_arg(a) {
  if (a.parse === "statement") {
    return js_parse_statement(a.code);
  }
  return js_parse_expression(a.code);
}

let names = readdirSync(dir).filter((n) => n.endsWith(".mjs"));
let pass = 0;
let fail = 0;
let skip = 0;
for (let name of names) {
  let mod = await import(join(dir, name));
  let e = mod.example;
  if (e.kind !== "rejection") {
    skip++;
    console.log("skip".padEnd(6) + e.title + "  (kind=" + e.kind + ", sandbox-run)");
    continue;
  }
  let fn_mod = await import(join(jsdir, e.fn + ".mjs"));
  let fn = fn_mod[e.fn];
  let args = e.args.map(build_arg);
  let threw = false;
  try {
    fn(...args);
  } catch (err) {
    threw = true;
  }
  let want = e.expect === "throw";
  let ok = threw === want;
  if (ok) {
    pass++;
  } else {
    fail++;
  }
  console.log((ok ? "PASS" : "FAIL").padEnd(6) + e.title);
}
console.log("\npass " + pass + "  fail " + fail + "  skip " + skip);
if (fail > 0) {
  process.exit(1);
}
