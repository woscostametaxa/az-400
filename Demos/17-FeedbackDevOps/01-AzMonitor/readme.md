# Azure Monitor

## Demos

- Explain Azure Monitor
- Sign-in and Azure Audit Logs
- Explain Log Analytics for AAD. Show Connection between Diagnostic Settings and Log Analytics. Show Alert based on Query

    ```
    SigninLogs
    | where CreatedDateTime >= ago(7d)
    | summarize signInCount = count() by AppDisplayName
    | sort by signInCount desc
    ```

    ```
    SigninLogs
    | where CreatedDateTime >= ago(14d)
    | where isRisky == true
    ```
    
## Readings

[Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/overview)

[Create, view, and manage metric alerts using Azure Monitor](https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/azure-monitor/platform/alerts-metric.md)

[Send Data to Azure Monitor using Audit Streaming](https://docs.microsoft.com/en-us/azure/devops/organizations/audit/auditing-streaming?view=azure-devops)