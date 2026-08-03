import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists_assert } from "./function_exists_assert.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { json_to } from "./json_to.mjs";
import { function_new_code } from "./function_new_code.mjs";
import { function_run_args_none } from "./function_run_args_none.mjs";
import { function_list_name_add } from "./function_list_name_add.mjs";
import { fn_name } from "./fn_name.mjs";
export async function functions_new_baseline_ratchet(lister, slug, hint) {
  "Writes a whole shrink-only ratchet from the one function that lists what offends - the four functions around it, the record it holds, and its place in the list of gates - and leaves nothing to finish by hand.";
  "A ratchet is the repo's answer to a fault it already carries: it cannot demand nought today, so it records what is there and refuses one more. Twenty-five of them are written here, and every one of them cost four near-identical files after the interesting part was already done. The interesting part is the listing - what counts as an offence - and that is the one thing this asks for.";
  "The four are separate on purpose and stay separate. Where the record lives is one function because three others read it; refusing to grow it is its own function because the writer must not be able to decide that for itself; the writer and the gate are separate because one is run by hand after a repair and the other is run by everybody, always.";
  "It seeds the record before it finishes, so the repo it leaves is green. A gate that arrives red is a gate every other Claude in this directory meets as a broken build they did not cause.";
  "It joins the list of gates too, because a gate that is not in that list is not run, and there is already a gate that fails on exactly that omission. Writing the four files and stopping would leave the build red in a second way.";
  "The name it is given is read as a name and refused if it is anything more, and the function that does the listing is checked against the functions that exist. What it writes is shaped from those two words and from nothing a caller hands over as code.";
  arguments_assert(arguments, 3);
  await function_exists_assert(lister);
  js_identifier_expression(lister);
  js_identifier_expression(slug);
  let name_path = text_combine(slug, "_baseline_path");
  let name_growth = text_combine(slug, "_baseline_growth_assert");
  let name_write = text_combine(slug, "_baseline_write");
  let name_gate = text_combine(slug, "_gate_run");
  let file = text_combine_3("data/", slug, "_baseline.json");
  let left = json_to(
    "Where this ratchet keeps what the repo already carried. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.",
  );
  let combined = text_combine(left, ";");
  let b = json_to(file);
  let abc = text_combine_3("let path = ", b, ";");
  await function_new_code(name_path, [], false, [
    combined,
    abc,
    "return path;",
  ]);
  let left2 = json_to(
    "Refuse to record an offender the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.",
  );
  let combined2 = text_combine(left2, ";");
  let left3 = json_to(
    "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names.",
  );
  let combined3 = text_combine(left3, ";");
  let abc2 = text_combine_3("let path = ", name_path, "();");
  let object = text_combine(
    "recording these as known would bless a new offence rather than repair it - ",
    hint,
  );
  let json = json_to(object);
  let combined4 = text_combine_multiple([
    text_combine_multiple([
      "await ",
      fn_name("baseline_known_growth_assert"),
      "(known, path, ",
    ]),
    json,
    ");",
  ]);
  await function_new_code(name_growth, ["known"], true, [
    combined2,
    combined3,
    abc2,
    combined4,
  ]);
  let left4 = json_to(
    "Rewrite this ratchet's record from what offends right now. For seeding it once, and for shrinking it after a repair - never for blessing a new offence, which is the one thing the gate exists to refuse.",
  );
  let combined5 = text_combine(left4, ";");
  let abc3 = text_combine_3("let known = await ", lister, "();");
  let abc4 = text_combine_3("await ", name_growth, "(known);");
  let abc5 = text_combine_3("let path = ", name_path, "();");
  await function_new_code(name_write, [], true, [
    combined5,
    abc3,
    abc4,
    abc5,
    text_combine_multiple([
      "let r = await ",
      fn_name("baseline_known_write"),
      "(known, path);",
    ]),
    "return r;",
  ]);
  let left5 = json_to(
    "QA gate: what offends now must be what the baseline already held.",
  );
  let combined6 = text_combine(left5, ";");
  let left6 = json_to(
    "Measured against the baseline rather than against nought, because the repo already carried some of these when this was written. What it holds is the thing worth holding - today's change is not allowed to add one more.",
  );
  let combined7 = text_combine(left6, ";");
  let abc6 = text_combine_3("let offenders = await ", lister, "();");
  let abc7 = text_combine_3("let path = ", name_path, "();");
  let b2 = json_to(name_write);
  let abc8 = text_combine_3(
    text_combine_multiple(["let name_write = ", fn_name("fn_name"), "("]),
    b2,
    ");",
  );
  let json2 = json_to(hint);
  let combined8 = text_combine_multiple([
    text_combine_multiple([
      "let r = await ",
      fn_name("baseline_names_gate_generic"),
      "(offenders, path, ",
    ]),
    json2,
    ", name_write);",
  ]);
  await function_new_code(name_gate, [], true, [
    combined6,
    combined7,
    abc6,
    abc7,
    abc8,
    combined8,
    "return r;",
  ]);
  await function_run_args_none(name_write);
  let f_name = fn_name("qa_gates");
  await function_list_name_add(f_name, name_gate);
  let r = {
    lister,
    path: name_path,
    growth_assert: name_growth,
    write: name_write,
    gate_run: name_gate,
    baseline: file,
  };
  return r;
}
