import { list_map_unique } from "./list_map_unique.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
("A zero-argument getter whose whole job is to RETURN one string literal —");
('the shape that makes a constant nameable. Returns that literal, or "" when');
("`code` is not that shape.");
("");
("The literal must be the returned value, not merely present in the body:");
("the getter for languages that lack an original-language text contains exactly");
('one string ("language_code", passed as an argument) and returns a list, and an');
("earlier version of this reported it as a constant named for a property key.");
export function js_code_getter_literal(code, f_name) {
  let start = code.indexOf("export function " + f_name + "()");
  if (less_than(start, 0)) {
    let r = "";
    return r;
  }
  let body = code.slice(start).split("\n}")[0];
  ("A word wrapped in the do-not-change marker is the value, wherever in the body it");
  ("sits. That wrapper is never incidental - it is written by somebody saying this");
  ("exact text must stay - so unlike a bare string it cannot be a passing mention.");
  ("A body freezing several different words is a corpus of written-out cases, not a");
  ("getter: its job is to return the list, and the frozen words are what the cases are");
  ("made of. Reading the first of them as the function's value files the whole corpus in");
  ("the constants index under whichever word happens to be written first - a claim that");
  ("is simply false, and an armed trap besides, because the corpus turns red the day");
  ("anybody else spells that word. Measured across the repo: exactly four functions");
  ("freeze more than one word and every one of them is a corpus, so no watched value");
  ("stops being watched by asking this.");
  let frozen = [...body.matchAll(/text_frozen\(\s*("(?:[^"\\]|\\.)*")\s*\)/g)];
  function frozen_text(found) {
    let text = JSON.parse(found[1]);
    return text;
  }
  let texts = list_map_unique(frozen, frozen_text);
  if (equal(texts.length, 1)) {
    let r1 = texts[0];
    return r1;
  }
  if (greater_than(texts.length, 1)) {
    let r0 = "";
    return r0;
  }
  let direct = body.match(/return\s+("(?:[^"\\]|\\.)*")\s*;/);
  if (direct) {
    let r2 = JSON.parse(direct[1]);
    return r2;
  }
  let named = body.match(
    /let\s+([A-Za-z_$][\w$]*)\s*=\s*("(?:[^"\\]|\\.)*")\s*;\s*return\s+\1\s*;/,
  );
  if (named) {
    let r3 = JSON.parse(named[2]);
    return r3;
  }
  let r4 = "";
  return r4;
}
