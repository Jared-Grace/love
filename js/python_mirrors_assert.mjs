export async function python_mirrors_assert() {
  arguments_assert(arguments, 0);
  ("Gate: every list the python guard imports still says what this side says.");
  ("Drift is silent in the dangerous direction. The guard's floor is keyed on these");
  ("sets, so a name dropped from one copy stops being denied while every check made");
  ("from the other side still reports it as covered — closed from wherever you look,");
  ("open where it counts.");
  ("Reports every stale file rather than the first, since regenerating them is one");
  ("command either way and a partial answer only earns a second run.");
  let mirrors = python_mirrors();
  let checked = await list_map_async(mirrors, python_mirror_checked);
  let stale = list_filter_property_not(checked, "fresh", true);
  let paths = list_map_property(stale, "path");
  list_empty_is_assert_json(paths, {
    hint: "these generated python files no longer match their source — regenerate them with python_mirrors_write",
    paths,
  });
  let r = {
    checked: list_size(checked),
    stale: paths,
  };
  return r;
}
