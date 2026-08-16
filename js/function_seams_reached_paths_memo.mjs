export async function function_seams_reached_paths_memo(
  f_name,
  seams,
  remembered,
) {
  "For each of the named seams this function can reach, one chain of calls showing how it gets there - the reach with its evidence attached.";
  "Its neighbour answers which seams are reached and nothing more, and that answer is what a refused permission grant is built on. A reader told only that a function reaches a shell cannot tell whether the reach is the point of the function or an accident three names down, so the refusal has to be believed rather than judged. The chain is what turns it into something a person can weigh.";
  "Nothing here is worked out that was not already worked out. The walk hands its visitor the path it took to reach each name, and the neighbour reads the name off that record and drops the path. So this costs a walk that was happening anyway and keeps the half that was being thrown away.";
  "The same walk is used rather than a second one on purpose. A separate implementation could reach a seam by an edge the refusal never followed, and a chain that does not explain the refusal is worse than no chain, because it looks like an explanation.";
  "One chain per seam, and it is the route the walk arrived by first - not the shortest, and not the only one. Nothing is visited twice, so a second way in is never seen. That is enough to answer why a seam is reachable at all, and it is not enough to answer whether closing this one chain would end the reach.";
  arguments_assert(arguments, 3);
  await function_exists_assert_json(f_name, {
    hint: "the function should exist to ask how it reaches what it reaches",
  });
  let paths = {};
  function lambda(v) {
    let node = property_get(v, "node");
    let seam = list_includes(seams, node);
    if (not(seam)) {
      return;
    }
    let known = property_exists(paths, node);
    if (known) {
      return;
    }
    let stack = property_get(v, "stack");
    property_set(paths, node, stack);
  }
  async function children_get(name) {
    let kept = await function_imports_beyond_infrastructure_memo(
      name,
      remembered,
    );
    return kept;
  }
  await visit_unique_async(f_name, children_get, lambda);
  return paths;
}
