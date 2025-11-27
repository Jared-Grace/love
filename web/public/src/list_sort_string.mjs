export function list_sort_string(list) {
  function lambda(a, b) {
    const [na, ia] = a.split(/[_\.]/);
    const [nb, ib] = b.split(/[_\.]/);
    let v = na.localeCompare(nb) || Number(ia) - Number(ib);
    return v;
  }
  list.sort(lambda);
}
