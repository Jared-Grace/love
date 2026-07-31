export async function function_select_apply_pair(
  select_fn_name,
  apply_fn_name,
) {
  arguments_assert(arguments, 2);
  ("Two names become the two functions a transform is made of - the one that finds");
  ("the node and the one that changes it.");
  ("Each name is checked against the seam it is allowed to be called from first,");
  ("because a name arriving from a command line is the one place a caller can ask");
  ("for a function it has no business running.");
  await function_callee_seam_assert(select_fn_name);
  await function_callee_seam_assert(apply_fn_name);
  let select_fn = await function_import(select_fn_name);
  let apply_fn = await function_import(apply_fn_name);
  let r = {
    select_fn,
    apply_fn,
  };
  return r;
}
