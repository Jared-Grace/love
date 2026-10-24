import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { equal } from "./equal.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_verse_glyph_counts } from "./bible_glyph_verse_glyph_counts.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_add } from "./list_add.mjs";
import { text_trim } from "./text_trim.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_glyph_chapter_god_fire_redraw(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("the code is a written chapter's own, spelled as the chapter list spells it. It names a file to read and write and nothing that runs.");
  ("Redraws God as the burning heart in one written picture Bible chapter, in every verse where the bare fire picture can only be standing for God.");
  ("THE HUMAN CHOSE THIS ON 2026-10-24. God was first drawn as fire, then as fire joined to the red heart, and since 2026-10-03 the root table seats God on the burning heart alone. The names built on God were carried across then, and the bare fire was not, because the bare fire is also the picture of fire itself and a word-for-word swap would have turned the burning bush into God.");
  ("A VERSE IS REDRAWN ONLY WHEN THE COUNT LEAVES NO OTHER READING. Nothing in the verse seats fire, so no drawn fire can be the word for fire; and the verse seats God on the burning heart at least as many more times as it draws fire, so every fire there has a God to stand for. Anything else - a verse where real fire and God meet, or where fire is drawn more often than God is spoken - is held and handed back, because which fire is which is a reading of the sentence and the count cannot make it.");
  ("WHERE THE INTERLINEAR WRITES GOD WITH A SMALL LETTER THE FIRE BECOMES THE IDOL. The table seats elohim and theos on the burning heart for the gods of the nations as well, and the human chose on 2026-10-03 that those are drawn as the carved stone figure, so a fire drawn over them was never God's. The same count decides it: nothing seats fire, every God in the verse is already drawn as God, and the small-letter gods still undrawn are at least as many as the fires. A verse where an undrawn God and an undrawn god meet is held, because the count cannot say which fire stands over which.");
  ("IT CHECKS ITS OWN WRITING AGAINST THE COUNT. The verse is rewritten by spelling, and the number of spellings changed has to equal the number of fires the parsed verse draws; a verse where they disagree is held rather than written, so a spelling the parser reads differently cannot be redrawn by half.");
  let both = await bible_glyph_chapter_rows_filed(chapter_code);
  let seats_by_verse = {};
  for (let row of both.rows) {
    let fire = 0;
    let god = 0;
    let small = 0;
    for (let word of row.words) {
      if (equal(word.glyph, "fire")) {
        fire = fire + 1;
      }
      if (equal(word.glyph, "heart_on_fire")) {
        let v = String(word.gloss);
        if (/\bgod(s|dess|desses)?\b/.test(v)) {
          small = small + 1;
        } else {
          god = god + 1;
        }
      }
    }
    seats_by_verse[row.verse_number] = {
      fire,
      god,
      small,
    };
  }
  let lower = text_lower_to(chapter_code);
  let f_path = text_combine_3("js/bible_glyph_chapter_", lower, ".mjs");
  let before = await file_read(f_path);
  let lines = text_split_newline(before);
  let parsed = bible_glyph_chapter(chapter_code);
  let redrawn = [];
  let held = [];
  for (let verse of parsed.verses) {
    let verse_number = verse.verse_number;
    let drawn_counts = bible_glyph_verse_glyph_counts(verse);
    let fire_drawn = property_get_or_null(drawn_counts, "fire");
    if (equal(fire_drawn, null)) {
      continue;
    }
    let god_drawn = property_get_or_null(drawn_counts, "heart_on_fire");
    if (equal(god_drawn, null)) {
      god_drawn = 0;
    }
    let idol_drawn = property_get_or_null(drawn_counts, "moai");
    if (equal(idol_drawn, null)) {
      idol_drawn = 0;
    }
    let seats = property_get_or_null(seats_by_verse, verse_number);
    if (equal(seats, null)) {
      seats = {
        fire: 0,
        god: 0,
        small: 0,
      };
    }
    let god_open = subtract(seats.god, god_drawn);
    let idol_open = subtract(seats.small, idol_drawn);
    let only_god =
      equal(seats.fire, 0) &&
      less_than_equal(fire_drawn, god_open) &&
      equal(seats.small, 0);
    let only_idol =
      equal(seats.fire, 0) &&
      less_than_equal(god_open, 0) &&
      less_than_equal(fire_drawn, idol_open);
    let to = "$heart_on_fire";
    if (only_idol) {
      to = "$moai";
    }
    if (equal(only_god || only_idol, false)) {
      list_add(held, {
        verse_number,
        fire_drawn,
        fire_seated: seats.fire,
        god_seated: seats.god,
        god_drawn,
        small: seats.small,
      });
      continue;
    }
    let opener = "verse_number: " + verse_number + ",";
    function lambda(line) {
      let left = text_trim(line);
      let eq = equal(left, opener);
      return eq;
    }
    let start = lines.findIndex(lambda);
    let changed = 0;
    let rewritten = [];
    let index = start + 1;
    while (greater_than_equal(start, 0) && less_than(index, lines.length)) {
      let left2 = text_trim(lines[index]);
      if (equal(left2, "},")) {
        break;
      }
      let line = lines[index];
      function lambda2() {
        changed = changed + 1;
        let r2 = to;
        return r2;
      }
      let next = line.replace(/\$fire(?![a-z_+])/g, lambda2);
      list_add(rewritten, {
        index,
        next,
      });
      index = index + 1;
    }
    if (not_equal(changed, fire_drawn)) {
      list_add(held, {
        verse_number,
        fire_drawn,
        spelled: changed,
      });
      continue;
    }
    for (let item of rewritten) {
      lines[item.index] = item.next;
    }
    list_add(redrawn, verse_number);
  }
  if (greater_than(redrawn.length, 0)) {
    let contents = list_join_newline(lines);
    await file_overwrite(f_path, contents);
  }
  let r = {
    chapter_code,
    redrawn,
    held,
  };
  return r;
}
