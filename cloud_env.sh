while IFS='=' read -r -d '' n v; do
    printf '  %s: "%s"\n' "$n" "$v" >> app.yaml
done < <(env -0)

echo "BEFORE REMOVALS: \n\n"
cat app.yaml

sed -i '/^  HOSTNAME:/d' app.yaml 
sed -i '/^  _:/d' app.yaml 
sed -i '/^  BUILDER_OUTPUT:/d' app.yaml 
sed -i '/^  PWD:/d' app.yaml 
sed -i '/^  HOME:/d' app.yaml 
sed -i '/^  SHLVL:/d' app.yaml 
sed -i '/^  PATH:/d' app.yaml 

echo "AFTER REMOVALS: \n\n"

cat app.yaml