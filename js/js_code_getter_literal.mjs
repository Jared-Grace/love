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
  let frozen = body.match(/text_frozen\(\s*("(?:[^"\\]|\\.)*")\s*\)/);
  if (frozen) {
    let r1 = JSON.parse(frozen[1]);
    return r1;
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
