import { each } from "./each.mjs";
import { object_properties } from "./object_properties.mjs";
import { object_property_get } from "./object_property_get.mjs";

export function object_invert( object ){
    let inverted={}
    each(object_properties(object), p=>{
        let value=object_property_get(object,p);
let list=object_property_initialize(inverted,value)
})
return inverted
}