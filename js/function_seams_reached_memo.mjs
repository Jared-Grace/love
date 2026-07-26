export async function function_seams_reached_memo(f_name, seams, remembered) {
  "Which of the named seams this function can reach through its imports, with the plumbing edges left out, reusing what an earlier walk already read.";
  "The walk and the set it looks for are separate on purpose, the same way a selector and a transform are: one walk paired with any set of seams answers a new question for the cost of the list. Asking which functions reach a shell and asking which change the disk is one piece of code and two lists.";
  await function_exists_assert_json(f_name, {
    hint: "the function should exist to ask what it can reach",
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
    return kept;
  }
  await visit_unique_async(f_name, children_get, lambda);
  return reached;
}
