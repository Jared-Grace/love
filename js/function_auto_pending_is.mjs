import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { function_parse_unaliased } from "./function_parse_unaliased.mjs";
import { js_auto_generic } from "./js_auto_generic.mjs";
import { js_auto_transforms_dry } from "./js_auto_transforms_dry.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { not_equal } from "./not_equal.mjs";
import { property_get } from "./property_get.mjs";
export async function function_auto_pending_is(f_name) {
  "Whether the canonicalizing pass would still change this function - that is, whether somebody edited it and did not run the pass afterwards.";
  "Asked by running the pass and looking at what it produces, rather than by looking for the shapes it fixes one at a time. A list of shapes goes stale the moment a step is added to the pipeline, and it would only ever be as complete as whoever wrote it; running the pass is the question itself.";
  "Nothing is written. The pipeline only rewrites the tree it was handed, and the one step that reaches the disk is the write at the end, which is simply not done here. The file-creating step is swapped out the same way the loadability check swaps it, so this cannot litter the repo with new files either.";
  "The two sides are compared as written-out source rather than as trees, and both sides are written out by the same writer, so how the file happens to be laid out on disk cannot make a canonical function look pending. What is compared is what the pass would have saved against what saving the file untouched would have saved.";
  "The tree is rewritten in place, so the before side is taken before the pass runs. Taking it after would compare a thing against itself and answer no every time - the shape of a bug that reports a clean repo and never fails.";
  let unaliased = await function_name_unalias_only(f_name);
  let parsed = await function_parse_unaliased(unaliased);
  let ast = property_get(parsed, "ast");
  let before = js_unparse(ast);
  let transforms = js_auto_transforms_dry();
  await js_auto_generic(ast, transforms);
  let after = js_unparse(ast);
  let pending = not_equal(before, after);
  return pending;
}
