export function html_code_script_module(middle) {
  const script_type = "module";
  let v = `<script type="${script_type}"> 
    ${middle}
  </script>`;
  return v;
}
