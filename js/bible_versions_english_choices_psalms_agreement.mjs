import { object_property_names } from "./object_property_names.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_versions_english_choices_references } from "./bible_versions_english_choices_references.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { text_words_content_echo } from "./text_words_content_echo.mjs";
export async function bible_versions_english_choices_psalms_agreement() {
  arguments_assert(arguments, 0);
  ("How far each English translation this repo offers a reader agrees with the others about what a psalm verse says, as the longest stretch of words it says the same way as its nearest neighbour, at its worst across a handful of psalms spread through the book.");
  ("IT IS ASKING WHETHER THEY ARE ALL LOOKING AT THE SAME VERSE, NOT WHETHER THEY WORD IT ALIKE. A translation reading from the Vulgate numbers the psalms one behind the Hebrew ones for most of the book, so asked for the twenty third psalm it hands back the twenty fourth - real words, in good English, about the wrong thing. Nothing else here can see that: the words come back, so every question this repo asks about whether a translation answers is satisfied, and a comparison of translations shows the wrong psalm as one more way of putting the right one.");
  ("AGAINST THE OTHERS RATHER THAN AGAINST A CHOSEN ONE, because choosing one to measure from would decide in advance which numbering is the right one, and the answer wanted here is which translations stand apart from the rest - whichever rest that turns out to be.");
  ("THE WORST OF SEVERAL PSALMS AND NOT THE AVERAGE. The two numberings agree at the start of the book and at the end of it, and part company in the middle, so a translation that is one out for most of the psalter still matches everybody at the first psalm. An average over the probes hides that behind the passages where it was right.");
  ("THE ONES THAT NEVER ANSWERED ARE NAMED RATHER THAN QUIETLY MISSING, because a translation that was never asked and a translation that agreed with everybody look exactly alike in a list of the ones that agreed. Reading a passage out of a translation is allowed to fail without ending the comparison - one that cannot be read would otherwise take the other twenty down with it - so a fetch that times out costs a translation its place here and says nothing. Measured twice over the same five psalms: one run held twenty-one translations and the next held twenty-two, and the missing one hands over the psalm perfectly well when it is asked on its own.");
  ("That silence is the whole of what a check next door could not see. It fails a translation for standing apart from the others, so a translation that was never measured passes it by not being there - which is the one way a wrongly numbered bible could walk through the check written to catch it.");
  ("This says how far apart they stand and stops there; what counts as too far is decided next door, where there is a number to fail on.");
  let references = [
    "Psalm 23:1",
    "Psalm 51:10",
    "Psalm 100:1",
    "Psalm 119:105",
    "Psalm 145:1",
  ];
  let passages = await bible_versions_english_choices_references(references);
  let lowest_by_folder = {};
  let named_by_folder = {};
  for (let passage of passages) {
    let wordings = property_get(passage, "wordings");
    for (let wording of wordings) {
      let bible_folder = property_get(wording, "bible_folder");
      let text = property_get(wording, "text");
      let nearest = 0;
      for (let against of wordings) {
        let other_folder = property_get(against, "bible_folder");
        let itself = equal(other_folder, bible_folder);
        if (itself) {
          continue;
        }
        let other_text = property_get(against, "text");
        let echo = text_words_content_echo(text, other_text);
        let run = property_get(echo, "run");
        let longer = greater_than(run, nearest);
        if (longer) {
          nearest = run;
        }
      }
      named_by_folder[bible_folder] = property_get(wording, "name");
      let seen = lowest_by_folder[bible_folder];
      let first = equal(seen, undefined);
      let worse = less_than(nearest, seen);
      if (first || worse) {
        lowest_by_folder[bible_folder] = nearest;
      }
    }
  }
  let apart = [];
  for (let bible_folder of object_property_names(lowest_by_folder)) {
    let v = {
      bible_folder,
      name: named_by_folder[bible_folder],
      nearest: lowest_by_folder[bible_folder],
    };
    list_add(apart, v);
  }
  function ordered(one, other) {
    let left = property_get(one, "nearest");
    let right = property_get(other, "nearest");
    let gap = subtract(left, right);
    return gap;
  }
  apart.sort(ordered);
  let usable = await bible_versions_english_choices_usable();
  let unmeasured = [];
  for (let version of usable) {
    let bible_folder = property_get(version, "bible_folder");
    let seen = lowest_by_folder[bible_folder];
    let unasked = equal(seen, undefined);
    if (unasked) {
      list_add(unmeasured, version);
    }
  }
  let r = {
    references,
    apart,
    unmeasured,
  };
  return r;
}
