import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_named_derived_all } from "./app_ceb_bible_gloss_roots_named_derived_all.mjs";
import { property_get } from "./property_get.mjs";
import { bible_words_written } from "./bible_words_written.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { add } from "./add.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_roots_named_derived_written() {
  "The roots the Cebuano gloss store names that the dictionary takes back further, split by whether the translation itself ever writes the named form standing alone and whether it ever writes the deeper one, so that a word a reader actually meets is told apart from a form that only exists inside longer words.";
  "★ THE QUESTION THAT WAS BEING LEFT TO A SPEAKER HAS AN ANSWER IN THE TEXT ITSELF. Whether paagi is a word or a derived form of agi decided the whole of the wider count, and it was handed over as a judgment nobody here could make. But the translation is right there, and a form it writes on its own line by itself is a word its readers meet; a form that never once appears except buried inside longer words is not, whatever a dictionary can derive. That is evidence rather than an opinion, and it is the same test used earlier to say which apostrophe pieces were words nobody wrote.";
  "Four answers rather than two, because both halves can be words and both can fail to be. Where the translation writes both, the store picking the longer one is a choice between two real words and defensible. Where it writes only the form the store named, the dictionary has gone behind anything a reader would recognise. Where it writes only the deeper form, the store named something its own text never uses alone, and that is the sharp case. Where it writes neither, both are pieces and the entry needs a different kind of help.";
  "It proves what a reader meets and not what is historically true. A form the translation happens never to use is still a real Cebuano word, and this says only that nobody reading this bible will have met it there.";
  "Measured over the 293 named roots: the translation writes both forms alone for 154 of them, covering 2805 of the 4159 entries; it writes only the named form for 96 more, covering 826. So five entries in six are the store choosing between two words a reader meets, or standing on a word the dictionary went behind, and neither is a fault. The 952 paagi entries that made the wider count unreadable land in the first of those, because the translation writes paagi standing alone - which is the answer that was being deferred to a speaker, given by the text.";
  "That leaves 43 named roots and 528 entries where the translation never writes the named form alone, and 21 of those 43 name a deeper form it never writes alone either. Both halves of those 21 are pieces no reader of this bible ever meets, which is not a root judgment going one way or the other but a sign the root was never read off a word at all.";
  "Nothing is asked of the site and nothing is written.";
  arguments_assert(arguments, 0);
  let measured = await app_ceb_bible_gloss_roots_named_derived_all();
  let listed = property_get(measured, "listed");
  let bible_folder = ebible_folder_cebuano();
  let written = await bible_words_written(bible_folder);
  let lowered = list_map_unique(written, text_lower_to);
  let both = [];
  let said_only = [];
  let deeper_only = [];
  let neither = [];
  function root_read(held) {
    let said = property_get(held, "said");
    let deeper = property_get(held, "under_it");
    let item = text_lower_to(said);
    let said_written = list_includes(lowered, item);
    let item2 = text_lower_to(deeper);
    let deeper_written = list_includes(lowered, item2);
    let row = {
      said: said,
      under_it: deeper,
      entries: property_get(held, "entries"),
      words: property_get(held, "words_count"),
    };
    if (said_written) {
      let side = deeper_written ? both : said_only;
      list_add(side, row);
      return;
    }
    let side2 = deeper_written ? deeper_only : neither;
    list_add(side2, row);
  }
  each(listed, root_read);
  function entries_sum(rows) {
    let total = 0;
    function row_add(row) {
      let right = property_get(row, "entries");
      total = add(total, right);
    }
    each(rows, row_add);
    return total;
  }
  let r = {
    roots: list_size(listed),
    both_written: list_size(both),
    both_entries: entries_sum(both),
    said_only: list_size(said_only),
    said_only_entries: entries_sum(said_only),
    deeper_only: list_size(deeper_only),
    deeper_only_entries: entries_sum(deeper_only),
    neither: list_size(neither),
    neither_entries: entries_sum(neither),
    deeper_only_rows: deeper_only,
    neither_rows: neither,
  };
  return r;
}
