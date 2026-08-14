export function app_replace_goal_symbols_get(goal, property_name) {
  "The symbols a goal names where it starts or where it ends, with the gaps between them thrown away.";
  "A goal is written with wide gaps so the player can tell one symbol from the next at a glance, and a wide gap is several spaces in a row. Splitting on a single space then hands back an empty word for every space after the first, and an empty word is a symbol as far as everything downstream is concerned - so a goal reached in one step is read as a goal needing four, and no path is ever found to it.";
  let words = property_text_split_space(goal, property_name);
  let symbols = list_filter(words, text_empty_not_is);
  return symbols;
}
