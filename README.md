# How to setup JWT token based flow

1. Generate a private key and self signed digital certificate ( openssl req -nodes -new -x509 -keyout private.pem -out server.cert )
2. Create a connected app to enable JWT flow ( https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm ). Need to upload cert from step 1 into Connected App UI.
3. Set private key, salesforce user and client Id in environments.yaml. Refer environments.yaml.example
