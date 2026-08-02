export async function functions_inside_duplicate_names() {
  arguments_assert(arguments, 0);
  ("Name every group of functions sharing a run of work somewhere inside them, one flat word to a group, so a ratchet can hold them.");
  ("The same set of functions answers several times over here, once for each place their shared run can start, because a run of five lines held in common contains two runs of four. Its two neighbours cannot do that - a function has one opening and one ending - so this is the one of the three that has to say each group only once, or a single finding would fill the record with words that differ in nothing a reader could see.");
  let size = functions_inside_duplicates_size();
  let groups = await functions_inside_duplicates(size);
  let named = functions_duplicate_group_names(groups);
  let once = list_unique(named);
  return once;
}
