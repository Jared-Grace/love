export async function qa_gate_kept_remembered(commit, before) {
  "$plain commit";
  "$plain before";
  arguments_assert(arguments, 2);
  ("The answer already written down for the commit this run is standing on, when there is one and it was worked out beside the very same neighbours - and nothing at all otherwise.");
  ("A run that asks the copy anew takes about a quarter of an hour, and the copy it asks is now the same kind of artifact a judging asks, standing on the same commit. So an answer somebody else already paid for is this run's answer, and asking again would be paying for it twice to learn the same thing.");
  ("Nothing is remembered for a copy of the working folder, because that copy is of a state of the code with no name, and no answer in the record is about it.");
  ("Whether the neighbours agree is asked by the same reader the judging uses, so the two cannot come to different conclusions about the same entry - which is the whole hazard, since a run skipped on a wrong match leaves nothing behind to look at.");
  let nameless = null_is(commit);
  if (nameless) {
    return null;
  }
  let known = await qa_commit_named();
  let entry = property_get_or_null(known, commit);
  let matching = qa_commit_entry_beside_matching_is(entry, before);
  if (matching) {
    return entry;
  }
  return null;
}
