import { each } from "./each.mjs";
export function each_index(list, lambda) {
    let index=0
  return each(list, item=> {
    lambda(item,index)
    index++
  });
}
