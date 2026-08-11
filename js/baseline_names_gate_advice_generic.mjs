export async function baseline_names_gate_advice_generic(
  offenders,
  path,
  hint_get,
  name_write,
) {
  arguments_assert(arguments, 4);
  ("Run a ratchet gate over a flat list of offending names, the same as its sibling in every way but one: what it says about the names that newly offend is worked out from those names rather than written down beforehand.");
  ("A sentence written beforehand can only ever say what is true of the whole class, so it says the same thing about a name that wants renaming and a name that must on no account be renamed. Where the difference can be worked out, working it out is worth more than any sentence somebody could have written, and it is worth most at the moment a gate has just stopped somebody.");
  ("It is handed a way of making the sentence rather than the sentence, so that a reading costing a search of the repo for each name is paid for only by a gate that is failing. A gate that passes must cost nothing beyond its own sweep, or it stops being run.");
  let recorded = await baseline_known_read(path);
  let change = names_versus_baseline(offenders, recorded);
  let added = property_get(change, "added");
  let stale = property_get(change, "stale");
  let added_empty_is = list_empty_is(added);
  if (list_empty_not_is(added)) {
    let hint = await hint_get(added);
    list_empty_is_assert_json(added, {
      hint,
      added,
    });
  }
  list_empty_is_assert_json(stale, {
    hint: text_combine_multiple([
      "these no longer offend - shrink the record with ",
      name_write,
      " so the same name cannot come back unnoticed",
    ]),
    stale,
  });
  let r = {
    added: 0,
    stale: 0,
  };
  return r;
}
