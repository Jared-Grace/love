export async function data_transform(property_name, value) {
    var d = await data_get(property_name, null);
    let { data } = d;
    object_property_set(data, property_name, value);
    await data_save(d);
}
