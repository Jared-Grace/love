import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_exists } from "./function_exists.mjs";
import { property_get } from "./property_get.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { function_select_apply_args_auto } from "./function_select_apply_args_auto.mjs";
export async function function_nested_rename(f_name, nested_name, name_after) {
  arguments_assert(arguments, 3);
  ("Give a function written inside the named one a name that says what it does, everywhere the holder mentions it.");
  ("The step the lifting pass asks for and could not take. It walks a body moving out every piece it can, and skips each one the auto pass named for itself, because a piece carried out as lambda5 would stand in the repo under a name no search for what it does could ever reach. Its refusal ends by asking whether you would like to name it for what it does first - and there was nowhere to go and do that. So the pieces sat unliftable and the bodies holding them sat over the ceiling. This is that answer.");
  ("Nothing about it is a lift, and it is worth keeping separate from one. Renaming preserves behaviour on its own reasoning - the same value under a different word - so it can go in a commit by itself and be checked in a glance, which is the rule this repo already holds refactors to. Run this, read it, then run the lift.");
  ("It refuses a name a repo function already answers to. The renamed piece stays inside its holder, so such a name would not collide - it would hide, and every line below would reach the local instead of the function it was written against. That is the one thing this repo forbids outright, and the gate that ratchets it would go red on the next run rather than here, which is a worse place to find out.");
  let search = await function_exists(name_after);
  let taken = property_get(search, "exists");
  false_is_assert_json(taken, {
    hint: "a repo function already answers to this name, so a piece named that way inside a body would hide it from every line below - pick a name of its own",
    name_after,
  });
  let select_fn_name = fn_name("js_function_nested_find_named");
  let apply_fn_name = fn_name("js_selects_function_rename");
  let output = await function_select_apply_args_auto(
    f_name,
    select_fn_name,
    nested_name,
    apply_fn_name,
    name_after,
  );
  return output;
}
