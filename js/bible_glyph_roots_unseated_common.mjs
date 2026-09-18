import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { bible_strong_chapter_tallies_cache } from "./bible_strong_chapter_tallies_cache.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_drawn_lookup } from "./bible_glyph_roots_drawn_lookup.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_take } from "./list_take.mjs";
import { bible_strong_glosses } from "./bible_strong_glosses.mjs";
export async function bible_glyph_roots_unseated_common(
  testament_name,
  wanted,
) {
  arguments_assert(arguments, 2);
  ("Every Strong's number one testament uses that no glyph seats yet, commonest first, each carrying the wordings the interlinear gives it most often.");
  ("$plain testament_name");
  ("the name is a testament's own, spelled the way the book divisions spell it. It names a stretch of text to read and nothing that runs.");
  ("$plain wanted");
  ("the number says how many of the ranked words to hand back. It sizes the answer and nothing that runs.");
  ("THE RELEASE ORDER WAS ALWAYS FREQUENCY AND NOTHING HAD MEASURED IT. The plan for this picture Bible is that the words a reader meets most often get their pictures first, because a picture on a word standing four thousand times changes how the whole book reads, and a picture on a word standing twice changes one verse. Until this existed that plan was carried out by guessing which words are common, and a guess about frequency is exactly the kind of guess that is wrong quietly - the guesser remembers the words that felt important rather than the ones that are everywhere.");
  ("IT HANDS THE WORDINGS BACK BESIDE THE COUNT, because the count alone cannot seat anything. Whether a word may carry a picture is settled by whether one wording covers nearly every place it stands, and that is asked of the same interlinear this counts. Sending the top wordings along turns a ranked list of numbers, which nobody can act on, into a list a person can work down in order.");
  ("IT KEEPS MORE THAN THE TOP WORDING ON PURPOSE. A number split evenly between two unrelated wordings has two meanings under one key, and a picture seated on it draws one of them and lies about the other. The top wording alone would hide that split and would make an unseatable word look ready.");
  ("A COUNT IS PER TESTAMENT AND MAY NEVER CROSS ONE. The Greek and the Hebrew numberings both start at one and name unrelated words, so a total that spanned the testaments would add two different words together and report the sum as one common word.");
  ("AN ALREADY SEATED NUMBER IS LEFT OUT RATHER THAN MARKED, because the question this answers is what to draw next, and a list whose top is entirely made of words that are already drawn answers a different question badly.");
  let shown_wanted = number_from_text(wanted);
  let tallies = await bible_strong_chapter_tallies_cache();
  let roots = bible_glyph_roots_testament_table(testament_name);
  let drawn = bible_glyph_roots_drawn_lookup(roots);
  let totals = {};
  let chapters = 0;
  for (let chapter_code of object_property_names(tallies)) {
    let named = bible_chapter_testament_name(chapter_code);
    let mine = equal(named, testament_name);
    if (not(mine)) {
      continue;
    }
    chapters = add(chapters, 1);
    let tally = property_get(tallies, chapter_code);
    for (let strong of object_property_names(tally)) {
      let seated = property_exists(drawn, strong);
      if (seated) {
        continue;
      }
      let seen = property_get(tally, strong);
      let before = property_get_or_null(totals, strong);
      let unmet = null_is(before);
      if (unmet) {
        before = 0;
      }
      let value = add(before, seen);
      property_set(totals, strong, value);
    }
  }
  let ranked = [];
  let occurrences = 0;
  for (let strong of object_property_names(totals)) {
    let total = property_get(totals, strong);
    occurrences = add(occurrences, total);
    list_add(ranked, {
      strong,
      count: total,
    });
  }
  function lambda(row) {
    let r2 = row.count;
    return r2;
  }
  list_sort_number_mapper_reverse(ranked, lambda);
  let shown = list_take(ranked, shown_wanted);
  let glosses = await bible_strong_glosses(testament_name);
  for (let row of shown) {
    let wordings = property_get_or_null(glosses, row.strong);
    let silent = null_is(wordings);
    if (silent) {
      wordings = [];
    }
    let value2 = list_take(wordings, 3);
    property_set(row, "wordings", value2);
  }
  let r = {
    testament_name,
    chapters,
    numbers: ranked.length,
    occurrences,
    shown,
  };
  return r;
}
