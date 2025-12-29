import { marker } from "../../../love/public/src/marker.mjs";
export function list_sort_string_mapper(list) {
  marker("1");
  function lambda(a, b) {
    const [na, ia] = a.split(/[_\.]/);
    const [nb, ib] = b.split(/[_\.]/);
    let v = na.localeCompare(nb) || Number(ia) - Number(ib);
    return v;
  }
  list.sort(lambda);
}
