export function path_join(list_of_segments) {
  // Flatten and normalize
  let parts = [];

  for (let seg of list_of_segments) {
    if (!seg) continue; // skip null/undefined/empty
    let split = seg.split(/[\\/]+/); // split on / or \
    for (let s of split) {
      if (s === "" || s === ".") continue;
      if (s === "..") {
        if (parts.length > 0) parts.pop();
      } else {
        parts.push(s);
      }
    }
  }

  return parts.join("/");
}
