export async function atoms_unexampled() {
  "Every atom the instructions tell a Claude to reach for that no example ever runs";
  "The two tables are where a Claude looks to find out what the seam can do, so a row there is read as a unit that works. Nothing checks that claim: the corpus is the only thing that runs an address or a verb, and a unit the corpus never names has been described to everyone and demonstrated to no one.";
  "It is the outward-facing half of the register gate. That one asks whether everything the corpus is allowed to reach is reached; this asks whether everything the instructions promise is among what it may reach at all.";
  let documented = await atoms_documented();
  let named = await examples_names_used();
  function unexampled_is(name) {
    let missing = list_includes_not(named, name);
    return missing;
  }
  let unexampled = list_filter(documented, unexampled_is);
  return unexampled;
}
