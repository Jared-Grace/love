import { examples_corpus_read } from "./examples_corpus_read.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { file_temp } from "./file_temp.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { file_read } from "./file_read.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
import { js_format } from "./js_format.mjs";
import { folder_src } from "./folder_src.mjs";
import { folder_previous } from "./folder_previous.mjs";
import { repo_current_name } from "./repo_current_name.mjs";
import { path_join } from "./path_join.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { js_imports_missing_all_program } from "./js_imports_missing_all_program.mjs";
import { function_imports_add_relative } from "./function_imports_add_relative.mjs";
import { js_imports_auto_relative } from "./js_imports_auto_relative.mjs";
import { function_arguments_assert_each_add_lambda } from "./function_arguments_assert_each_add_lambda.mjs";
import { js_node_type_is_new_lambda } from "./js_node_type_is_new_lambda.mjs";

// Runs the example corpus as a gate.
//  - rejection examples run in-memory (call the fn, assert throw vs not)
//  - transform examples run pass-through in a temp-file sandbox (file_js_transform)
// Throws on any failure so the r.mjs seam exits nonzero.
export async function examples_gate_run() {
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

  // tools emit canonical ./ imports in natural order (js_imports_auto_relative);
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
      return async (ast) => {
        let dict = await functions_names_to_paths();
        let from_dir = path_join([
          folder_previous(),
          repo_current_name(),
          folder_src(),
        ]);
        let missing = await js_imports_missing_all_program(ast);
        await function_imports_add_relative(ast, missing, dict, from_dir);
      };
    }
    if (t[0] === "auto") {
      return async (ast) => {
        let dict = await functions_names_to_paths();
        let from_dir = path_join([
          folder_previous(),
          repo_current_name(),
          folder_src(),
        ]);
        await js_imports_auto_relative(ast, dict, from_dir);
      };
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
    let fn_mod = await import("./" + e.fn + ".mjs");
    let fn = fn_mod[e.fn];
    let args = e.args.map((a) =>
      a.parse === "statement"
        ? js_parse_statement(a.code)
        : js_parse_expression(a.code),
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

  let examples = await examples_corpus_read();
  let pass = 0;
  let fail = 0;
  let skip = 0;
  for (let e of examples) {
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
    throw new Error("examples gate: " + fail + " failed");
  }
  return { pass, fail, skip };
}
