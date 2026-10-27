import { arguments_assert } from "./arguments_assert.mjs";
import { bible_bdb_openscriptures_url } from "./bible_bdb_openscriptures_url.mjs";
import { http_get_large } from "./http_get_large.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
import { text_brackets_round_outer } from "./text_brackets_round_outer.mjs";
import { not } from "./not.mjs";
export async function bible_bdb_names_meanings() {
  arguments_assert(arguments, 0);
  ("Every Hebrew proper name Brown, Driver and Briggs list, keyed by its Strong's number, with what they say the name means.");
  ("THE MEANING IS THE SCHOLARS' AND NOT A GUESS FROM THE ENGLISH. A name's pictures are chosen from what the name says in Hebrew, and until now the only witness to that was the one choosing. Brown, Driver and Briggs write the meaning in brackets straight after calling a word a proper name - Joshua (Yahweh is salvation), Hazael (El sees) - so a picture row can be laid against a reading made a century ago by people who were not choosing pictures.");
  ("AN EMPTY LIST IS AN ANSWER, NOT A FAILURE. This layout of the lexicon is an outline, and for most names it carries the headword and who the person was with no meaning at all - about one name in four has one. A name with nothing here was not given a meaning by this source, which says nothing about whether it has one.");
  ("ONLY A BRACKET HOLDING A MEANING IS TAKEN. Brackets in an entry also hold cross-references and readings of other words; the lexicon marks a meaning with its own tag, so a bracket is kept exactly when that tag is inside it. Only the outermost brackets count, and only those before the entry turns to the people who bore the name, since a bracket down there describes one of them. The abbreviation י׳, which is how the lexicon writes Yahweh, is left as written rather than spelled out, so what is kept is the source's own words with the markup taken off.");
  ("Two files are joined because neither alone answers. The lexicon is keyed by its own entry codes and never names a Strong's number; the index names both, and also says which entries are proper names. One entry can serve several numbers - Joshua and Jeshua are one entry - so each number is given the entry's meaning.");
  let url = bible_bdb_openscriptures_url("LexicalIndex.xml");
  let index_buffer = await http_get_large(url);
  let index_text = buffer_text_to(index_buffer);
  let url2 = bible_bdb_openscriptures_url("BrownDriverBriggs.xml");
  let lexicon_buffer = await http_get_large(url2);
  let lexicon_text = buffer_text_to(lexicon_buffer);
  let entries = {};
  for (let m of lexicon_text.matchAll(
    /<entry id="([^"]+)"[^>]*>([\s\S]*?)<\/entry>/g,
  )) {
    let head = m[2].split("<status")[0];
    entries[m[1]] = head;
  }
  let names = {};
  for (let m of index_text.matchAll(
    /<entry id="[^"]+">\s*<w[^>]*>([^<]*)<\/w>\s*<pos>Np<\/pos>\s*<def>([^<]*)<\/def>\s*((?:<xref[^>]*\/>\s*)+)/g,
  )) {
    for (let x of m[3].matchAll(/<xref bdb="([^"]+)" strong="(\d+)"/g)) {
      let head = entries[x[1]] || "";
      let meanings = [];
      let before_senses = head.split("<sense")[0];
      for (let inside of text_brackets_round_outer(before_senses)) {
        let b = inside.includes("<def>");
        if (not(b)) {
          continue;
        }
        let plain = inside
          .replace(/<[^>]+>/g, "")
          .replace(/\s+/g, " ")
          .trim();
        meanings.push(plain);
      }
      names[x[2]] = {
        hebrew: m[1],
        name: m[2],
        bdb: x[1],
        meanings,
      };
    }
  }
  return names;
}
