export async function function_command_seam_path(f_name) {
  "The chain of calls by which this function reaches a command-running one, with the plumbing edges left out - or an empty list when it reaches none.";
  "This exists because the reach answer and the path answer disagreed, and a disagreement between them is unreadable. The reach walk drops the install plumbing every function sits on; the plain path walk does not, so it kept offering the same route through saving a file and installing a package, which is the route the filter was written to ignore. Reading that path explained nothing about why the function was refused. Walking with the same filter the answer was computed with is what makes the path an explanation of it.";
  "Breadth first, so what comes back is a shortest route. A refusal is read by someone deciding whether to grant anyway, and the shortest chain is the one they can check by hand.";
  let seams = functions_command_seams();
  let parents = {};
  let seen = [f_name];
  let frontier = [f_name];
  while (list_not_empty_is(frontier)) {
    let next = [];
    for (let name of frontier) {
      let children = await function_imports_beyond_infrastructure(name);
      for (let child of children) {
        let known = list_includes(seen, child);
        if (known) {
          continue;
        }
        list_add(seen, child);
        property_set(parents, child, name);
        let arrived = list_includes(seams, child);
        if (arrived) {
          let path = function_seam_path_back(child, parents, f_name);
          return path;
        }
        list_add(next, child);
      }
    }
    frontier = next;
  }
  return [];
}
