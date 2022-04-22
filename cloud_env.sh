while IFS='=' read -r -d '' n v; do
    printf '  %s: "%s"\n' "$n" "$v" >> app.yaml
done < <(env -0)