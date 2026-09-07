import { gloss_root_named_word_spelled_in_cases } from "./gloss_root_named_word_spelled_in_cases.mjs";
import { less_than } from "./less_than.mjs";
import { gloss_root_named_word_spelled_in_is } from "./gloss_root_named_word_spelled_in_is.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function gloss_root_named_word_spelled_in_gate_run() {
  "Gate: the spelling mark keeps the roots that are written inside their word, refuses the English meanings the ambiguous wording hands back, and still refuses the real roots it is known to refuse. Throws so the dispatcher seam exits nonzero.";
  "★ THE REFUSALS OF REAL ROOTS ARE CHECKED AS CLOSELY AS ANYTHING ELSE, AND A CHANGE THAT STARTED KEEPING THEM WOULD FAIL HERE RATHER THAN LOOK LIKE AN IMPROVEMENT. That is the point of the file. Widening the mark until katawhan and tawo pass would make it agree with more real roots and stop telling the English apart, which is the one thing it is for, and no count of correct answers would show it.";
  "The folded pair is checked because folding is what makes the mark usable rather than what makes it convenient. Without it hangtud and hangtod come apart, and that is the commonest spelling difference in the language, so a mark without it would read as far weaker evidence than it is.";
  let cases = gloss_root_named_word_spelled_in_cases();
  let defects = [];
  let size = cases.length;
  let i = 0;
  while (less_than(i, size)) {
    let one = cases[i];
    let word = one.word;
    let root = one.root;
    let wanted = one.spelled;
    let why = one.why;
    let read = gloss_root_named_word_spelled_in_is(word, root);
    let wrong = not_equal(read, wanted);
    if (wrong) {
      let defect = {
        word,
        root,
        wanted,
        read,
        why,
      };
      defects.push(defect);
      console.log("root spelled in  " + word + "  root " + root);
      console.log(
        "                 wanted " +
          wanted +
          "  read " +
          read +
          "  (" +
          why +
          ")",
      );
    }
    i = i + 1;
  }
  let count = defects.length;
  console.log("root spelled in defects: " + count);
  let any = greater_than(count, 0);
  if (any) {
    throw new Error(
      "gloss root named word spelled in gate: " +
        count +
        " pairs read wrong - the mark that tells a root from an English meaning in the one ambiguous wording has moved",
    );
  }
  let r = {
    checked: size,
    defects: 0,
  };
  return r;
}
