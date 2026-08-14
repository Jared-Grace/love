import { function_exists_assert_json } from "./function_exists_assert_json.mjs";
import { function_imports_beyond_infrastructure_memo } from "./function_imports_beyond_infrastructure_memo.mjs";
import { function_ast_memo } from "./function_ast_memo.mjs";
import { js_flo_params_get } from "./js_flo_params_get.mjs";
import { visit_unique_async } from "./visit_unique_async.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { greater_than } from "./greater_than.mjs";
export async function function_seams_reached_steerable_memo(
  f_name,
  seams,
  remembered,
  parsed,
) {
  "Which of the named seams this function can reach along a chain where every step is able to receive an argument. The plain walk answers whether a seam is reachable at all; this one answers the question a standing approval actually turns on, which is whether anything the caller types can arrive there.";
  "A function declaring no parameters cannot be handed anything, so it ends the chain. Whatever it goes on to do it decides for itself, from committed source or from a file or from the environment, and no argument typed at a command line changes it. The reader who reaches for the service account is the case this was built for: it takes nothing and runs the function the user's own config names, so twenty-seven granted functions reached a dispatcher through it and not one of them could steer it.";
  "It says less than it looks like it says, in the same way its plain twin does. An empty answer is conclusive - no argument can arrive. A non-empty answer means only that nothing here ruled the path out: a name may still be built rather than passed through, which is how a ratchet writer runs a function whose name it made by adding a fixed ending to a word it checked was an identifier. That is a reason to read the function, not a verdict on it.";
  "One gap worth naming rather than hiding: a function can read its arguments without declaring any, through the arguments object, and this counts it as taking none. Nothing in the repo does that on a path to a dispatcher today, and a check that guessed instead would be measuring the name of the thing rather than the thing.";
  await function_exists_assert_json(f_name, {
    hint: "the function should exist to ask what its arguments can reach",
  });
  let reached = [];
  function lambda(v) {
    let node = property_get(v, "node");
    let seam = list_includes(seams, node);
    if (seam) {
      list_add_if_not_includes(reached, node);
    }
  }
  async function children_get(name) {
    let kept = await function_imports_beyond_infrastructure_memo(
      name,
      remembered,
    );
    let steerable = [];
    for (let child of kept) {
      let ast = await function_ast_memo(child, parsed);
      let params = js_flo_params_get(ast);
      let takes_arguments = greater_than(params.length, 0);
      if (takes_arguments) {
        list_add(steerable, child);
      }
    }
    return steerable;
  }
  await visit_unique_async(f_name, children_get, lambda);
  return reached;
}
