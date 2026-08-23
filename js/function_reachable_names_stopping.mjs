export async function function_reachable_names_stopping(f_name, f_names_stop) {
  "$plain f_name";
  "Every function this one can reach through its imports, itself included, except that the walk turns aside at any of the given names and never opens them.";
  "A STOPPED NAME IS LEFT OUT ALONG WITH EVERYTHING UNDER IT, and leaving it out is the point rather than a detail of how the turning-aside is done. The names handed in are the doorways to a part of the app the asker has decided is not theirs, and a doorway is part of what is behind it. Something under a stopped name that the rest of the app reaches by its own route is still in the answer, because the walk arrives at it the other way - so the stopping takes away a region and never a function the region merely happened to share.";
  "IT IS SEPARATE FROM THE PLAIN WALK BECAUSE THE PLAIN WALK MUST NOT BE ABLE TO STOP. What that one answers is what a bundle built from an entry point carries, and a bundler turns aside at nothing: a static import is packed whether or not anything ever calls it. A walk that could be told to stop would answer a smaller question while still being read as that one. So the plain walk is written in terms of this one with nothing to stop at, which keeps the two answers one piece of code without letting either wear the other's meaning.";
  "WHAT THIS IS FOR IS A PROMISE THAT COVERS PART OF AN APP. An app that promised its reader their own language promised it to the reader, and a screen only the person building the app ever opens has no reader to have promised anything to. Scanning it anyway does not find a broken promise, it finds work nobody asked for, and it buries the two real findings under ten that are not.";
  arguments_assert(arguments, 2);
  let stopped = list_includes(f_names_stop, f_name);
  if (stopped) {
    return [];
  }
  async function imports_unstopped(f_name_visiting) {
    let names = await function_imports(f_name_visiting);
    function kept_is(f_name_import) {
      let v = list_includes_not(f_names_stop, f_name_import);
      return v;
    }
    let r = list_filter(names, kept_is);
    return r;
  }
  async function lambda(add_reachable) {
    function each_visited(v) {
      let node = property_get(v, "node");
      add_reachable(node);
    }
    await visit_unique_async(f_name, imports_unstopped, each_visited);
  }
  let reachable = await list_adder_unique_async(lambda);
  return reachable;
}
