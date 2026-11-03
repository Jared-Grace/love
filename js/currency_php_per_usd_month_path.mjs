export function currency_php_per_usd_month_path(month) {
  "$plain month";
  "Where the shared store keeps one finished month of peso rates, with month written YYYY-MM.";
  let r = "currency_rate/USD_PHP/" + month + ".json";
  return r;
}
