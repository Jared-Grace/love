export function path_without_extension(p) {
  function lambda(m) {
    let v = m.replace(/\.[^.]+$/, "");
    return v;
  }
  let v2 = p.replace(/[/\\][^/\\]+$/, lambda);
  return v2;
}
