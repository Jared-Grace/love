import { assert_message } from "./assert_message.mjs";
import { app_g_dev_index_tree } from "./app_g_dev_index_tree.mjs";
import { app_g_dev_index_prefixes } from "./app_g_dev_index_prefixes.mjs";
import { equal } from "./equal.mjs";
export function app_g_dev_index_tree_check() {
  "deterministic REGRESSION check of the #index drill-down tree: a top-level route is a leaf carrying its own hash; a category node carries no hash; a categorized route nests under its ': ' segments with the deepest node carrying the route hash; and a name that is BOTH a route and a category (unbeliever) carries a hash AND has children. run: node scripts/ai.mjs app_g_dev_index_tree_check";
  let prefixes = app_g_dev_index_prefixes();
  let names = ["study", "unbeliever", "gospel_share"];
  let tree = app_g_dev_index_tree(names, prefixes);
  let study = tree.children["study"];
  assert_message(
    equal(study.hash, "study"),
    "top-level route is a leaf with its hash",
  );
  let conversation = tree.children["conversation"];
  assert_message(
    equal(conversation.hash, null),
    "conversation is a category, no hash",
  );
  let unbeliever = conversation.children["unbeliever"];
  assert_message(
    equal(unbeliever.hash, "unbeliever"),
    "unbeliever carries its route hash",
  );
  let gospel = unbeliever.children["gospel_share"];
  assert_message(
    equal(gospel.hash, "gospel_share"),
    "unbeliever also holds gospel_share as a child",
  );
  return {
    ok: true,
  };
}
