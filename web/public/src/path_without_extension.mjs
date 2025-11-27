export function path_name(p) {
  function lambda(m) {
    let v = m.replace(/\.[^.]+$/, "");
    return v;
  }
  let v2 = p.replace(/[/\\][^/\\]+$/, lambda);
  return v2;
}
