import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_derivatives_forbidden_words_least } from "./ebible_derivatives_forbidden_words_least.mjs";
import { ebible_derivatives_forbidden_spans } from "./ebible_derivatives_forbidden_spans.mjs";
import { ebible_version_words_searchable } from "./ebible_version_words_searchable.mjs";
import { text_searchable_spans_set } from "./text_searchable_spans_set.mjs";
import { text_searchable_spans_shared } from "./text_searchable_spans_shared.mjs";
import { list_size } from "./list_size.mjs";
import { divide } from "./divide.mjs";
export async function ebible_version_derivatives_forbidden_share(bible_folder) {
  "$plain bible_folder";
  "How much of one whole translation is made of runs of words belonging to a translation this repo may not carry: how many runs it has of its own, how many of them are shared, and the one as a part of the other.";
  "It is here to be asked about a translation nobody suspects. Two people translating the same book into the same language on their own land on the same six words in a row now and then, and how often that happens is a fact about the language rather than about either of them. Without that number a share found anywhere else means nothing at all, because there is no answer to 'compared with what'.";
  arguments_assert(arguments, 1);
  let words_least = ebible_derivatives_forbidden_words_least();
  let forbidden = await ebible_derivatives_forbidden_spans();
  let searchable = await ebible_version_words_searchable(bible_folder);
  let own = text_searchable_spans_set(searchable, words_least);
  let shared_spans = text_searchable_spans_shared(
    searchable,
    forbidden,
    words_least,
  );
  let spans = own.size;
  let shared = list_size(shared_spans);
  let share = divide(shared, spans);
  let r = {
    bible_folder,
    spans,
    shared,
    share,
  };
  return r;
}
