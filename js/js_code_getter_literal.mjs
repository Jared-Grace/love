// A zero-argument getter whose whole job is to RETURN one string literal —
// the shape that makes a constant nameable. Returns that literal, or "" when
// `code` is not that shape.
//
// The literal must be the returned value, not merely present in the body:
// `ebible_languages_without_original()` contains exactly one string
// ("language_code", passed as an argument) and returns a list, and an
// earlier version of this reported it as a constant named for a property key.
export function js_code_getter_literal(code, f_name) {
  let start = code.indexOf("export function " + f_name + "()");
  if (start < 0) {
    return "";
  }
  let body = code.slice(start).split("\n}")[0];
  let direct = body.match(/return\s+("(?:[^"\\]|\\.)*")\s*;/);
  if (direct) {
    return JSON.parse(direct[1]);
  }
  let named = body.match(
    /let\s+([A-Za-z_$][\w$]*)\s*=\s*("(?:[^"\\]|\\.)*")\s*;\s*return\s+\1\s*;/,
  );
  if (named) {
    return JSON.parse(named[2]);
  }
  return "";
}
