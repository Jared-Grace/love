import { arguments_assert } from "./arguments_assert.mjs";
import { text_searchable_spans } from "./text_searchable_spans.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
export function text_searchable_spans_set(searchable, words_least) {
  "$plain searchable";
  "$plain words_least";
  "Every run of a fixed number of neighbouring words a piece of writing holds, gathered so that a run can be asked about without reading through the writing again.";
  "It is the same runs the sibling hands back as a list, kept the other way round. A whole translation holds hundreds of thousands of runs, and asking a list whether it holds one means walking all of them - so a caller with hundreds of thousands of runs of its own to ask about would be doing that work multiplied by itself. Asked of a gathering, each question costs the same however much was gathered.";
  arguments_assert(arguments, 2);
  let spans = text_searchable_spans(searchable, words_least);
  let set = list_unique_set(spans);
  return set;
}
