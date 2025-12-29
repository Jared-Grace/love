import { marker } from "../../../love/public/src/marker.mjs";
export function list_sort_string_mapper(list, mapper) {
  marker("1");
  function lambda(a, b) {
    const va = lambda$item(a);
    const vb = lambda$item(b);
    const [na, ia] = va.split(/[_\.]/);
    const [nb, ib] = vb.split(/[_\.]/);
    let v = na.localeCompare(nb) || Number(ia) - Number(ib);
    return v;
  }
  list.sort(lambda);
}
