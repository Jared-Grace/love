import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { gloss_entries_count } from "./gloss_entries_count.mjs";
import { list_filter_property_not } from "./list_filter_property_not.mjs";
import { list_first_try } from "./list_first_try.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_size } from "./list_size.mjs";
export function gloss_words_settled_outvoted(ranked, settled) {
  "Every glossed word whose settled wording is carried by fewer entries than some other wording the same word is given, the widest disagreement first.";
  "$plain ranked";
  "$plain settled";
  "A table of settled wordings is written once, from English, by somebody thinking about the word. The entries are written a thousand times, in front of a verse, by somebody looking at what the word is doing there. When the two disagree the table is not automatically right, and this reading is the only place the disagreement is visible at all: a settled wording is never a shared label, so no list of labels to license will ever mention it.";
  "The test is deliberately a count and not a judgement. A word is returned when the heaviest wording its entries carry is not the settled one, which says nothing about which of the two is better and only says that the store has, in aggregate, written something else more often. Reading the pair is what decides, and that stays a person's job.";
  "Measured on the English-to-Urdu store the first time it ran: the word 'there' was settled as telling the place, 'وہاں', while forty-six entries said it points at the place already mentioned and another fifty explained the job the table had left out entirely - standing in front of a verb to say something exists, as in 'there was a man', where the word names no place at all. The settled wording was wrong about half the word, and every one of those entries had found that out separately.";
  "The name is borrowed from the Cebuano reading that compares the store's roots against a dictionary, and so is its warning: the first name for that one called the losing side wrong, and it had to be renamed once the rows were read, because the disagreement did not run one way. Outvoted means outnumbered and nothing more.";
  function word_outvoted_or_null(row) {
    let word = property_get(row, "word");
    let said = property_get_or_null(settled, word);
    let unsettled = equal(said, null);
    if (unsettled) {
      return null;
    }
    let explains = property_get(row, "explains");
    let settled_row = list_find_property_or_null(explains, "explain", said);
    let settled_entries = 0;
    let written = not_equal(settled_row, null);
    if (written) {
      settled_entries = gloss_entries_count(settled_row);
    }
    let off = list_filter_property_not(explains, "explain", said);
    let top = list_first_try(off);
    let none = equal(top, null);
    if (none) {
      return null;
    }
    let off_entries = gloss_entries_count(top);
    let outvoted = greater_than(off_entries, settled_entries);
    if (outvoted) {
      let r = {
        word,
        entries: property_get(row, "entries"),
        settled_entries,
        off_entries,
        settled: said,
        off: property_get(top, "explain"),
      };
      return r;
    }
    return null;
  }
  function off_entries_read(row) {
    let count = property_get(row, "off_entries");
    return count;
  }
  let mapped = list_map(ranked, word_outvoted_or_null);
  let found = list_filter_null_not_is(mapped);
  let rows = list_sort_number_mapper_reverse(found, off_entries_read);
  let r2 = {
    words: list_size(ranked),
    outvoted: list_size(rows),
    rows,
  };
  return r2;
}
