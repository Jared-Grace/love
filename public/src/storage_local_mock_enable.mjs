import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { properties_size } from "../../../love/public/src/properties_size.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { text_to } from "../../../love/public/src/text_to.mjs";
import { object_property_get_or } from "../../../love/public/src/object_property_get_or.mjs";
export function storage_local_mock_enable() {
  let s = {};
  let localStorage = {
    getItem: function getItem(storage_local_key) {
      let value3 = object_property_get_or(s, storage_local_key, null);
      return value3;
    },
    setItem: function setItem(storage_local_key, v) {
      v = text_to(v);
      object_property_set(s, storage_local_key, v);
    },
    get length() {
      let size = properties_size(s);
      return size;
    },
    key: function lambda2(index) {
      let properties = properties_get(s);
      let item = list_get(properties, index);
      return item;
    },
    removeItem: function lambda5(storage_local_key) {
      object_property_delete(s, storage_local_key);
    },
  };
  global.localStorage = localStorage;
}
