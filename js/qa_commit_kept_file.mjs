export async function qa_commit_kept_file(named, kept, path) {
  "$plain named";
  "$plain kept";
  "$plain path";
  arguments_assert(arguments, 3);
  ("Writes a judged answer into the record under the commit it is about, together with which commit every neighbouring repo was standing on while it was worked out - and declines to write it at all when a neighbour could not say.");
  ("Two different runs arrive here with an answer in hand. One was asked to judge a commit; the other is the whole-repo run somebody types before committing, which freezes a copy and asks it the very same questions and until now threw the answer away. What must not be written twice is this - stamping the neighbours onto the answer and deciding whether it may be filed - because an answer filed without them is filed under a name that does not identify what was looked at, and a second copy of this reading is a second place for that to come back.");
  ("A neighbour that cannot say which contents it holds - one with work nobody has committed, or one that is not a repository at all - leaves the run unfileable, and it is not filed. The answer is still handed back to whoever asked for it; what does not happen is it being written down for everybody else under a name that is only part of its own question. Having no answer in the record costs the next asker one run; a wrongly named one costs every asker after that a wrong answer, silently.");
  ("The record is read again inside the writing rather than a copy taken earlier being handed back, because judging takes about a quarter of an hour and ten of us share the one folder. Only this run's own commit is added, so nothing else in the record is ever this run's to write.");
  let beside = await qa_commit_beside_heads();
  let heads = property_get(beside, "heads");
  let keyable = property_get(beside, "keyable");
  let silent = property_get(beside, "silent");
  if (keyable) {
    property_set(kept, "beside", heads);
    function entry_add(record) {
      record[named] = kept;
    }
    await file_json_transform_initialize(path, {}, entry_add);
  }
  let r = {
    filed: keyable,
    silent,
  };
  return r;
}
