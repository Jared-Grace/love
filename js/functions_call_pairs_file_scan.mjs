import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { functions_call_pairs_statements_scan } from "./functions_call_pairs_statements_scan.mjs";
import { js_atomic_statement_signature } from "./js_atomic_statement_signature.mjs";
import { js_blocks_all } from "./js_blocks_all.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_return_name } from "./js_return_name.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function functions_call_pairs_file_scan(entry, tally, file_keys) {
  arguments_assert(arguments, 3);
  ("Reads one file into the two gatherings: every pair of neighbouring calls anywhere in it goes into the tally, and what the file itself is goes into the list kept under its name.");
  ("A file this cannot be read is stepped over rather than stopping the scan. The scan is over every file in the repo and one of them being mid-edit by somebody else is the ordinary case, not a fault worth losing the other nine thousand readings to.");
  let file = property_get(entry, "file");
  let text = property_get(entry, "text");
  let body = null;
  let blocks = null;
  let return_name = null;
  try {
    let ast = js_parse(text);
    body = js_flo_body(ast);
    blocks = js_blocks_all(ast);
    return_name = js_return_name(ast);
  } catch (e) {
    return;
  }
  let body_sigs = list_map(body, js_atomic_statement_signature);
  let calls = 0;
  for (let sig of body_sigs) {
    if (property_get(sig, "callee")) {
      calls = calls + 1;
    }
  }
  let keys_here = [];
  property_set(file_keys, file, {
    keys: keys_here,
    calls: calls,
  });
  ("Every run of statements, not the one the function opens with. Two lines written");
  ("under an if or inside a lambda are the same two lines, and counting only the top");
  ("of each file made this agree with a fold that had the same blind spot - both");
  ("reported a tidy repo about the same unread half of it.");
  for (let block of blocks) {
    let statements = property_get(block, "body");
    let body_is = equal(statements, body);
    functions_call_pairs_statements_scan(
      statements,
      body_is,
      tally,
      keys_here,
      file,
      return_name,
    );
  }
}
