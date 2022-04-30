
while IFS='=' read -r -d '' n v; do
    printf '  %s: "%s"\n' "$n" "$v" >> app.yaml
done < <(env -0)



sed -i '/^  HOSTNAME:/d' app.yaml 
sed -i '/^  _:/d' app.yaml 
sed -i '/^  BUILDER_OUTPUT:/d' app.yaml 
sed -i '/^  PWD:/d' app.yaml 
sed -i '/^  HOME:/d' app.yaml 
sed -i '/^  SHLVL:/d' app.yaml 
sed -i '/^  PATH:/d' app.yaml 
sed -i '/^  XTERM:/d' app.yaml 
sed -i '/^  LS_COLORS:/d' app.yaml 

