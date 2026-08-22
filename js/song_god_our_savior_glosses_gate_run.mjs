import { song_god_our_savior_sections } from "./song_god_our_savior_sections.mjs";
import { song_god_our_savior_glosses } from "./song_god_our_savior_glosses.mjs";
import { property_get } from "./property_get.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_in_is } from "./property_in_is.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function song_god_our_savior_glosses_gate_run() {
  "QA gate: every line this song sings has an explanation, and every explanation belongs to a line it sings.";
  "THE EXPLANATIONS ARE KEPT UNDER THE WORDS OF THE LINE THEY EXPLAIN, which is what stops a reordering handing a line somebody else's passages - but it also means a line whose wording is corrected by a letter stops finding its explanation, and nothing about that looks wrong. The page draws such a line plainly, exactly as it draws a line deliberately left unexplained, so the loss is invisible to a reader and to every other gate.";
  "It is asked in both directions because the two failures are different mistakes. A line with no explanation is work not done; an explanation with no line is work that has quietly stopped being used, and that one leaves the page looking finished.";
  "It needs no network, which is deliberate: what it checks is that two lists in this repo agree with each other, and a gate that reached for a bible over the wire would start failing for reasons that have nothing to do with the question.";
  let sections = song_god_our_savior_sections();
  let glosses = song_god_our_savior_glosses();
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
    hint: "these lines of God Our Savior are sung but nothing explains them, so the page draws them plain and offers the reader no scripture - write an entry for each under its exact words, or correct the wording if what changed was a typing slip",
  });
  let explained_lines = properties_get(glosses);
  function unsung_is(line) {
    let n = list_includes_not(lines, line);
    return n;
  }
  let unsung = list_filter(explained_lines, unsung_is);
  list_empty_is_assert_json(unsung, {
    hint: "these explanations of God Our Savior name words the song does not sing, so they are reaching nobody - was a line reworded, and if so should the explanation move to the new wording rather than being left behind under the old?",
  });
  ("Says how much it looked at, because a gate that answers nothing cannot be told apart from one that did nothing.");
  let r = {
    lines: list_size(lines),
    glosses: list_size(explained_lines),
    unexplained: 0,
    unsung: 0,
  };
  return r;
}
