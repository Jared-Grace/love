import { http_local_json } from "../../../love/public/src/http_local_json.mjs";
export async function sandbox() {
  let url =
    "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/exports/json/?lang=en&timezone=America%2FNew_York";
  let v = await http_local_json(url);
  return v;
}
