import { arguments_assert } from "./arguments_assert.mjs";
import { song_agape_title } from "./song_agape_title.mjs";
import { song_agape_sections } from "./song_agape_sections.mjs";
import { song_agape_glosses } from "./song_agape_glosses.mjs";
import { song_sections_glosses_assert } from "./song_sections_glosses_assert.mjs";
export function song_agape_glosses_gate_run() {
  "QA gate: every line Agape sings has an explanation, and every explanation belongs to a line it sings.";
  "It needs no network, which is deliberate: what it checks is that two lists in this repo agree with each other.";
  arguments_assert(arguments, 0);
  let title = song_agape_title();
  let sections = song_agape_sections();
  let glosses = song_agape_glosses();
  let r = song_sections_glosses_assert(title, sections, glosses);
  return r;
}
