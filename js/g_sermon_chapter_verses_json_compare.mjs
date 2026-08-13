import { g_sermon_chapter_passages_chaptered } from "./g_sermon_chapter_passages_chaptered.mjs";
import { g_sermon_chapter_codes_all } from "./g_sermon_chapter_codes_all.mjs";
import { g_sermon_chapter_verses_text } from "./g_sermon_chapter_verses_text.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { newline } from "./newline.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { divide_round } from "./divide_round.mjs";
export async function g_sermon_chapter_verses_json_compare() {
  "What it would cost to hand an arc prompt its chapter as JSON rather than as the numbered lines it gets now - measured over every written chapter, against the same printer the profile in that prompt already goes through.";
  "The question is a fair one, because the SAME PROMPT already hands the person over as JSON. What settles it is not which form is tidier but what each form is being asked to carry.";
  "A profile is a record whose KEYS ARE CONTENT: gender, age, marital status and servitude vary from one another, and a reader who lost the keys could not tell which value was which. JSON pays for those keys once and they earn it.";
  "A chapter is a TABLE: every row is the same two fields, so JSON pays for the same two keys once per passage and buys nothing a single header line does not already say. That is the number this measures.";
  "The second cost is not size and is the worse one. Scripture is full of speech, so the text is full of double quotes, and JSON escapes every one of them. The model is being asked to read this AS Scripture and answer from it, and a backslash before every quotation mark is noise laid over exactly the thing it must read most carefully. The count of passages holding a quote is what says how much noise that is.";
  "A newline inside a passage is the one finding that would argue FOR the change, because the line form cannot carry it - a passage broken over two lines reads as two passages, silently. So it is counted too, and a nonzero count is a real defect rather than a preference.";
  "CHARACTERS rather than tokens, for the reason its sibling gives: nothing here tokenizes the way a model does, and a proxy that admits to being one is worth more than a token count that is not.";
  let codes = await g_sermon_chapter_codes_all();
  let chapters = [];
  let passages_total = 0;
  let plain_total = 0;
  let json_total = 0;
  let holding_quote = 0;
  let holding_newline = 0;
  for (let code of codes) {
    let passages = await g_sermon_chapter_passages_chaptered(code);
    let plain = g_sermon_chapter_verses_text(passages);
    let rows = [];
    for (let passage of passages) {
      let verse_numbers = property_get(passage, "verse_numbers");
      let scripture = property_get(passage, "scripture");
      if (text_includes(scripture, '"')) {
        holding_quote = add(holding_quote, 1);
      }
      let part = newline();
      if (text_includes(scripture, part)) {
        holding_newline = add(holding_newline, 1);
      }
      list_add(rows, {
        verse_numbers,
        scripture,
      });
    }
    let json = json_format_to(rows);
    passages_total = add(passages_total, passages.length);
    plain_total = add(plain_total, plain.length);
    json_total = add(json_total, json.length);
    list_add(chapters, {
      chapter: code,
      passages: passages.length,
      plain_characters: plain.length,
      json_characters: json.length,
    });
  }
  let added = subtract(json_total, plain_total);
  let hundred = multiply(added, 100);
  let overhead_percent = divide_round(hundred, plain_total);
  let r = {
    chapters: chapters.length,
    passages_total,
    plain_characters_total: plain_total,
    json_characters_total: json_total,
    overhead_percent,
    passages_holding_quote: holding_quote,
    passages_holding_newline: holding_newline,
  };
  return r;
}
