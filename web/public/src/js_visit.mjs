
import { visit } from "./visit.mjs";
import { object_properties } from "./object_properties.mjs";
import { list_is } from "./list_is.mjs";
import { string_is } from "./string_is.mjs";
export function js_visit(parsed, on_each) {
    visit(
        parsed,
        (n) => {
            if (list_is(n)) {
                return n;
            }
            if (string_is(n)) {
                return [];
            }
            return object_properties(n);
        },
        on_each
    );
}

