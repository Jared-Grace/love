export function path_join(segments) {
  let parts = [];

  for (let seg of segments) {
    if (!seg) continue;
    let split = seg.split(/[\\/]+/);
    for (let s of split) {
      if (s === "" || s === ".") continue;
      if (s === "..") {
        if (parts.length > 0 && parts[parts.length - 1] !== "..") {
          parts.pop();
        } else {
          parts.push(".."); // preserve leading ..
        }
      } else {
        parts.push(s);
      }
    }
  }

  return parts.join("/");
}