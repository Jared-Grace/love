export function gloss_entries_key() {
  "The name the machine is told to file its list of word explanations under, when it has to answer with an object rather than with a bare list.";
  "The writing service is asked for JSON in object form, and an object cannot be a list, so the list has to sit inside it under a name. That name is spelled once here because two places have to agree on it and they are far apart - the wording that asks for it, and the reading that unwraps it.";
  let r = "words";
  return r;
}
