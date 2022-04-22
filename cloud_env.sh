while IFS='=' read -r -d '' n v; do
    printf '%s: "%s"\n' "$n" "$v"
done < <(env -0)