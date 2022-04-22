echo $(printenv | grep ^_) >> app.yaml

sed -i 's/%USERNAME%/'$USERNAME'/g' app.yaml
sed -i 's/%PASSWORD%/'$PASSWORD'/g' app.yaml

cat app.yaml
