export function visit(node, children_get, on_each){
    on_each(node);
    children=children_get(node);
}