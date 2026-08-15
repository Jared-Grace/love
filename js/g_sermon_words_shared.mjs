import { g_sermon_write_chapter_passages } from "./g_sermon_write_chapter_passages.mjs";
import { not } from "./not.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { g_sermon_line_words_shared } from "./g_sermon_line_words_shared.mjs";
export async function g_sermon_words_shared(chapter_code) {
  "$plain chapter_code";
  "Every written line of one chapter, each shown with how much of it is made of its own passage's words and what it adds beyond them.";
  "Read it while drafting, before a line is handed over to be reviewed. A line sharing almost nothing with its passage is one the player has to understand before they can pick it, which is the hard road for somebody who may be reading the Bible for the first time; a line sharing everything has taught them nothing new. Neither number is a rule, and there is no gate here on purpose - what is easy and what is clear will be told by people using it, not decided in advance.";
  "A passage with no lines written yet is passed over rather than reported empty, so this reads the same whether a chapter is finished or half done.";
  let passages = await g_sermon_write_chapter_passages(chapter_code);
  let reports = [];
  function passage_check(passage) {
    if (not("lines" in passage)) {
      return;
    }
    let scripture = property_get(passage, "scripture");
    let lines = property_get(passage, "lines");
    function line_read(line) {
      let said = property_get(line, "text");
      let shared = g_sermon_line_words_shared(scripture, said);
      return shared;
    }
    let read = list_map(lines, line_read);
    let key = g_sermon_passage_verses_key(passage);
    reports.push({
      key,
      lines: read,
    });
  }
  passages.forEach(passage_check);
  return reports;
}
