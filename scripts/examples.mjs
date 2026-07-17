import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { js_parse_statement } from "../js/js_parse_statement.mjs";
import { js_parse_expression } from "../js/js_parse_expression.mjs";
import { file_temp } from "../js/file_temp.mjs";
import { file_overwrite } from "../js/file_overwrite.mjs";
import { file_read } from "../js/file_read.mjs";
import { file_js_transform } from "../js/file_js_transform.mjs";
import { js_format } from "../js/js_format.mjs";
import { folder_src } from "../js/folder_src.mjs";
import { js_imports_missing_add_all_program_at } from "../js/js_imports_missing_add_all_program_at.mjs";
import { function_arguments_assert_each_add_lambda } from "../js/function_arguments_assert_each_add_lambda.mjs";
import { js_node_type_is_new_lambda } from "../js/js_node_type_is_new_lambda.mjs";

// Runs the example corpus as a gate.
//  - rejection examples run in-memory (call the fn, assert throw vs not)
//  - transform examples run pass-through in a temp-file sandbox (file_js_transform)
let here = dirname(fileURLToPath(import.meta.url));
let root = dirname(here);
let dir = join(root, "data", "examples");
let jsdir = join(root, "js");

function tokens(command) {
  let re = /"([^"]*)"|(\S+)/g;
  let out = [];
  let m = re.exec(command);
  while (m) {
    out.push(m[1] === undefined ? m[2] : m[1]);
    m = re.exec(command);
  }
  return out;
}

// tools emit canonical ./ imports in natural order (js_imports_missing_add_all_at);
// run both sides through js_format (the same pass the real file-write applies) and compare byte-exact
async function canonical(code) {
  let formatted = await js_format(code);
  return formatted.trim();
}

function transform_lambda(t) {
  if (t[0] === "aea") {
    return function_arguments_assert_each_add_lambda(t[2]);
  }
  if (t[0] === "ntp") {
    return js_node_type_is_new_lambda(t[1], t[2]);
  }
  if (t[0] === "imports") {
    return (ast) => js_imports_missing_add_all_program_at(ast, folder_src());
  }
  return null;
}

function transform_before(t, e) {
  if (t[0] === "ntp") {
    return "export function " + t[1] + "() {}";
  }
  return e.before;
}

async function run_transform(e) {
  let t = tokens(e.command);
  let lambda = transform_lambda(t);
  if (!lambda) {
    return "skip";
  }
  let before = transform_before(t, e);
  let out = await file_temp(async (p) => {
    await file_overwrite(p, before);
    await file_js_transform(p, lambda);
    return await file_read(p);
  });
  return (await canonical(out)) === (await canonical(e.after)) ? "pass" : "fail";
}

async function run_rejection(e) {
  let fn_mod = await import(join(jsdir, e.fn + ".mjs"));
  let fn = fn_mod[e.fn];
  let args = e.args.map((a) =>
    a.parse === "statement" ? js_parse_statement(a.code) : js_parse_expression(a.code),
  );
  let threw = false;
  try {
    fn(...args);
  } catch (err) {
    threw = true;
  }
  let want = e.expect === "throw";
  return threw === want ? "pass" : "fail";
}

let names = readdirSync(dir).filter((n) => n.endsWith(".mjs"));
let pass = 0;
let fail = 0;
let skip = 0;
for (let name of names) {
  let mod = await import(join(dir, name));
  let e = mod.example;
  let result = "skip";
  if (e.kind === "rejection") {
    result = await run_rejection(e);
  } else if (e.kind === "transform") {
    result = await run_transform(e);
  }
  if (result === "pass") {
    pass++;
  } else if (result === "fail") {
    fail++;
  } else {
    skip++;
  }
  console.log(result.toUpperCase().padEnd(6) + e.title);
}
console.log("\npass " + pass + "  fail " + fail + "  skip " + skip);
if (fail > 0) {
  process.exit(1);
}
