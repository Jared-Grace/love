import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { json_to } from "./json_to.mjs";
import { fn_name } from "./fn_name.mjs";
export function reply_bible_elements_code(elements, shared) {
  "The written code that reads any one of these elements. Any smaller choice with its own function is called rather than spelled out again, largest first, and the rest is written here.";
  let key = elements.join(" ");
  let left = [...elements];
  let codes = [];
  for (let other of shared.keys) {
    let others = other.split(" ");
    function left_has(element) {
      let has = left.includes(element);
      return has;
    }
    if (not_equal(other, key) && others.every(left_has)) {
      codes.push(`${shared.names[other]}()`);
      function not_taken(element) {
        let b = others.includes(element);
        let kept = not(b);
        return kept;
      }
      left = left.filter(not_taken);
    }
  }
  for (let element of left) {
    if (element.endsWith("*")) {
      let object = element.slice(0, -1);
      let word = json_to(object);
      codes.push(`${fn_name("reply_word_u_v")}(${word})`);
    } else {
      let json = json_to(element);
      codes.push(json);
    }
  }
  if (equal(codes.length, 1)) {
    let r = codes[0];
    return r;
  }
  let joined = codes.join(", ");
  let code = `reply_choice([${joined}])`;
  return code;
}
