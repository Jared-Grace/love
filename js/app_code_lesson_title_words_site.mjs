import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { function_imports } from "./function_imports.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { function_read } from "./function_read.mjs";
import { text_occurrences_count } from "./text_occurrences_count.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
export async function app_code_lesson_title_words_site(f_name, words) {
  arguments_assert(arguments, 2);
  ("where a lesson's home title spells the words it opens with: the function whose file holds them, the quoted run to look for, and the words themselves; null when the words cannot be pinned to exactly one place");
  ("Looked for only in what the lesson can reach through its title-making and lesson-making imports, never across the whole folder. Four sibling lessons spell swapping and three spell solving inside, so a folder-wide search finds every one of them and can say nothing about which drew this title. What a lesson imports is the only place its own words can have come from.");
  ("Two spellings are tried: the words quoted alone, and the words quoted with the space that follows them. A title maker either bakes the gap into its literal or adds it when it joins the pieces, and which of the two it did is not something the drawn title remembers. The opening quote is part of what is looked for, because it is what keeps a match from landing in the middle of a longer sentence that happens to begin the same way.");
  ("Nothing comes back unless exactly one file holds exactly one copy. Somebody changing the words has to know they are changing the thing they read, and two candidates mean they do not.");
  let seen = [];
  let frontier = [
    {
      name: f_name,
      depth: 0,
    },
  ];
  for (let step of frontier) {
    let name = property_get(step, "name");
    let depth = property_get(step, "depth");
    let known = list_includes(seen, name);
    if (known) {
      continue;
    }
    list_add(seen, name);
    let deeper = depth + 1;
    if (greater_than(deeper, 2)) {
      continue;
    }
    let imports = await function_imports(name);
    for (let one of imports) {
      let titling = text_includes(one, "title");
      let lessoning = text_includes(one, "lesson");
      if (titling || lessoning) {
        list_add(frontier, {
          name: one,
          depth: deeper,
        });
      }
    }
  }
  let alone = text_combine_multiple(['"', words, '"']);
  let spaced = text_combine_multiple(['"', words, ' "']);
  let needles = [alone, spaced];
  let hits = [];
  for (let name of seen) {
    let source = await function_read(name);
    for (let needle of needles) {
      let count_found = text_occurrences_count(source, needle);
      if (count_found) {
        list_add(hits, {
          f_name: name,
          needle,
          words,
          count: count_found,
        });
        break;
      }
    }
  }
  let size = list_size(hits);
  if (not_equal(size, 1)) {
    return null;
  }
  let hit = list_first(hits);
  let count = property_get(hit, "count");
  if (not_equal(count, 1)) {
    return null;
  }
  return hit;
}
