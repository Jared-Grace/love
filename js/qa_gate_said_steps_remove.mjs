export function qa_gate_said_steps_remove(said) {
  "Everything a gate said with the chains it printed taken out, so that what is read back is WHO is at fault rather than everything the fault was found through.";
  "A gate that follows a path to a fault writes the whole path down, because a reader given only the two ends cannot tell how one gets to the other. The path is evidence. Every name on it except the one at the near end is innocent, and most of them are shared code that half the repo ships.";
  "Reading a path as an accusation is not a small inaccuracy, because of what the reading is FOR. A red gate's names are matched against what one app ships, to decide whether that gate can hold that app's deployment - so the more ordinary a name on the path is, the more apps it stops. Measured on 2026-08-19: one app was reaching code that only runs outside a browser, and the path it was found through ran through the bible's own index, which every bible app here ships. All of them were held out of a deployment for a fault in one of them that none of the others could see or repair.";
  "Taking the path out cannot hide an offender. The gate names who is at fault separately, in a word of its own beside the path, and that word is untouched here.";
  "It is asked of the one word gates spell a path under today. A second name for the same thing would go unread, which is why this is pinned by a corpus rather than trusted - a reading narrowed by a typed word stops matching silently, and reads exactly like a run with nothing of that kind in it.";
  let field = '"steps"';
  let open = "[";
  let close = "]";
  let pieces = [];
  let rest = said;
  let more = true;
  while (more) {
    let at = rest.indexOf(field);
    if (at < 0) {
      pieces.push(rest);
      more = false;
      continue;
    }
    pieces.push(rest.slice(0, at));
    let after = rest.slice(at + field.length);
    let opened = after.indexOf(open);
    if (opened < 0) {
      pieces.push(after);
      more = false;
      continue;
    }
    let depth = 0;
    let index = opened;
    let end = -1;
    while (index < after.length) {
      let letter = after[index];
      if (letter === open) {
        depth = depth + 1;
      }
      if (letter === close) {
        depth = depth - 1;
        if (depth === 0) {
          end = index;
          index = after.length;
          continue;
        }
      }
      index = index + 1;
    }
    if (end < 0) {
      pieces.push(after);
      more = false;
      continue;
    }
    rest = after.slice(end + 1);
  }
  let left = pieces.join("");
  return left;
}
