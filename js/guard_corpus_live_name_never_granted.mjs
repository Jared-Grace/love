export function guard_corpus_live_name_never_granted() {
  "A function that exists so the guard corpus has a stand-in for the shape it";
  "keeps needing: a name the dispatcher really answers to, which no allow rule";
  "covers, taking no arguments.";
  "It must never be granted and must never be called. Every case testing what the";
  "guard does with an untrusted piece of a chain needs such a name, and until this";
  "each of them borrowed an ordinary helper - so the day somebody granted that";
  "helper for its own sake, cases about chaining would start failing about";
  "something else entirely. Its twin on the other side is the never-defined name";
  "the dead-name cases use.";
  "Taking no arguments is the half that was learnt late: the borrowed helpers took";
  "some, so once a bare argument-taking call became a floor of its own, three cases";
  "about splitting a chain were answered by that floor instead.";
  let nothing = null;
  return nothing;
}
