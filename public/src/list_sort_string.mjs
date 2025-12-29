import { identity } from "../../../love/public/src/identity.mjs";
import { list_sort_string_mapper } from "../../../love/public/src/list_sort_string_mapper.mjs";
export function list_sort_string(list) {
  function lambda(a, b) {
    const [na, ia] = a.split(/[_\.]/);
    const [nb, ib] = b.split(/[_\.]/);
    let v = na.localeCompare(nb) || Number(ia) - Number(ib);
    return v;
    list_sort_string_mapper(list, identity);
  }
  list.sort(lambda);
}
