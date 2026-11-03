export function currency_php_per_usd_date_path(date) {
  "$plain date";
  "Where the shared store keeps the pesos a US dollar bought on one day, one small file per day, named by that day as YYYY-MM-DD.";
  let path = "currency_rate/USD_PHP/" + date + ".json";
  return path;
}
