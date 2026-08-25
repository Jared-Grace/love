export function commit_edit_diff_code_lines_named(code, changed) {
  "The few words for a commit that did touch program, chosen from how many lines of program it touched - a whole new function, one call swapped for another, one line replaced, added or removed, or several lines.";
  "A WHOLE NEW FUNCTION IS SAID SO RATHER THAN COUNTED AS SEVERAL LINES OF PROGRAM. It reads as the largest bucket there is and is the one shape this repo has had a command for the longest, so a reader scanning for what no command covers was being handed the covered work first. It is asked before the number of lines is looked at, because the number is the thing it is there to stop being trusted.";
  "Two lines of code, one taken out and one put in, is looked at once more: where the two differ only in which function is being called, that is worth saying, because it is the shape almost every routing and renaming commit takes and it is always safe to skip.";
  "THE WHOLE CHANGED RUN IS TAKEN ALONGSIDE THE PROGRAM LINES, because a new function arrives as its imports and its prose as well as its program, and asking that question of the program alone would answer no to every one of them.";
  arguments_assert(arguments, 2);
  let written = diff_lines_function_written_is(changed);
  if (written) {
    let r11 = "a whole new function written";
    return r11;
  }
  let size = list_size(code);
  let pair = equal(size, 2);
  if (pair) {
    let swapped = commit_edit_callee_swap_is(code);
    if (swapped) {
      let r4 = "one call, different function put in its place";
      return r4;
    }
    let r5 = "one line of code replaced";
    return r5;
  }
  let single = equal(size, 1);
  if (single) {
    let first = list_first(code);
    let put_in = text_starts_with(first, "+");
    if (put_in) {
      let r6 = "one line of code added";
      return r6;
    }
    let r7 = "one line of code removed";
    return r7;
  }
  let r8 = "several lines of code";
  return r8;
}
