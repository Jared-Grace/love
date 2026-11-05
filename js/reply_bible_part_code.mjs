import { json_to } from "./json_to.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { equal } from "./equal.mjs";
export function reply_bible_part_code(part, shared) {
  "The written code for one part of a verse rule, as a list of expressions. What verses share is called by its own function, named from its own words. The rest is written where it is used.";
  let codes = [];
  if (part.choice) {
    let key = part.choice.join(" ");
    let code = json_to(part.choice[0]);
    if (shared.choices.includes(key)) {
      let v = part.choice.join("_");
      code = `reply_word_${v}()`;
    } else if (greater_than(part.choice.length, 1)) {
      let json = json_to(part.choice);
      code = `reply_choice(${json})`;
    }
    if (part.optional) {
      code = `reply_optional(${code})`;
    }
    codes.push(code);
    return codes;
  }
  let plain = [];
  function plain_finish() {
    if (greater_than(plain.length, 0)) {
      let object = plain.join(" ");
      let json2 = json_to(object);
      codes.push(`reply_words(${json2})`);
      plain = [];
    }
  }
  let at = 0;
  while (less_than(at, part.run.length)) {
    let found = 0;
    for (
      let size = subtract(part.run.length, at);
      greater_than_equal(size, 2) && equal(found, 0);
      size--
    ) {
      let key = part.run.slice(at, at + size).join(" ");
      if (shared.runs.includes(key)) {
        found = size;
      }
    }
    if (greater_than(found, 0)) {
      plain_finish();
      let piece = part.run.slice(at, at + found);
      let v2 = piece.join("_");
      codes.push(`reply_phrase_${v2}()`);
      at = at + found;
    } else {
      plain.push(part.run[at]);
      at = at + 1;
    }
  }
  plain_finish();
  return codes;
}
