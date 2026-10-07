import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { property_in_is } from "./property_in_is.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_size } from "./list_size.mjs";
export function song_sections_glosses_assert(title, sections, glosses) {
  "$plain title";
  "$plain sections";
  "$plain glosses";
  "Every line a song sings has an explanation, and every explanation belongs to a line it sings.";
  "THE EXPLANATIONS ARE KEPT UNDER THE WORDS OF THE LINE THEY EXPLAIN, which is what stops a reordering handing a line somebody else's passages - but it also means a line whose wording is corrected by a letter stops finding its explanation, and nothing about that looks wrong. The page draws such a line plainly, exactly as it draws a line deliberately left unexplained, so the loss is invisible to a reader.";
  "It is asked in both directions because the two failures are different mistakes. A line with no explanation is work not done; an explanation with no line is work that has quietly stopped being used, and that one leaves the page looking finished.";
  "The title is only for the message, so a failure names the song it is about.";
  arguments_assert(arguments, 3);
  let lines = [];
  for (let section of sections) {
    let sung = property_get(section, "lines");
    for (let line of sung) {
      let already = list_includes(lines, line);
      if (already) {
        continue;
      }
      list_add(lines, line);
    }
  }
  function unexplained_is(line) {
    let explained = property_in_is(glosses, line);
    let n = not(explained);
    return n;
  }
  let unexplained = list_filter(lines, unexplained_is);
  list_empty_is_assert_json(unexplained, {
    title,
    hint: "these lines are sung but nothing explains them, so the page draws them plain and offers the reader no scripture - write an entry for each under its exact words, or correct the wording if what changed was a typing slip",
  });
  let explained_lines = properties_get(glosses);
  function unsung_is(line) {
    let n = list_includes_not(lines, line);
    return n;
  }
  let unsung = list_filter(explained_lines, unsung_is);
  list_empty_is_assert_json(unsung, {
    title,
    hint: "these explanations name words the song does not sing, so they are reaching nobody - was a line reworded, and if so should the explanation move to the new wording rather than being left behind under the old?",
  });
  let r = {
    lines: list_size(lines),
    glosses: list_size(explained_lines),
    unexplained: 0,
    unsung: 0,
  };
  return r;
}
