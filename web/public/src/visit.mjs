import {each} from './each.mjs'
export function visit(node, children_get, on_each){
    on_each(node);
    let children=children_get(node);
     each(children, c=>visit(c, children_get, on_each))
}