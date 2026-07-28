export async function examples_names_used() {
  "Every unit the corpus actually names — the verb each example runs and the address it runs it at";
  "Two gates ask the same question of this list from opposite sides: whether everything the corpus may reach is reached, and whether everything the instructions promise is reachable at all. The list itself is the same both times, so it is gathered once here.";
  let examples = await examples_corpus_read();
  let fns = list_map_property(examples, "fn");
  function select_of(example) {
    let select = property_get_or_null(example, "select");
    return select;
  }
  let selects = list_map(examples, select_of);
  let named = list_concat(fns, selects);
  return named;
}
