
import { js_visit_type } from "./js_visit_type.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function js_identifiers_names(declaration) {
    return list_adder_unique(la => {

        js_visit_type(declaration, 'Identifier', v => {
            let { node } = v;
            la(object_property_get(node, 'name'));
        });
    });
}