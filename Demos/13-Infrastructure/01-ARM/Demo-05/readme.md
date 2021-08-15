# Using Secrets in ARM Templates

[Use Azure Key Vault to pass secure parameter value during deployment](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/key-vault-parameter?tabs=azure-cli)

- Create KeyVault using `create-arm-vault.azcli`
- Update `azuredeploy.json` - take value from script output

```
"properties": {
    "SQLAdmin": "[parameters('SQLAdmin')]",
    "SQLAdminPassword": {
        "reference": {
        "keyVault": {
        "id": "/subscriptions/<subscription-id>/resourceGroups/<rg-name>/providers/Microsoft.KeyVault/vaults/<vault-name>"
        },
    "secretName": "sqlpwd"
},
```

![kv-ref](_images/kv-reference.jpg)
