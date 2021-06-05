# Use a Container Agent

[Run a self-hosted agent in Docker](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/docker?view=azure-devops)

[Authenticate with Azure Container Registry from Azure Container Instances](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-auth-aci)

## Linux Agent

Build Linux Agent:

```
docker build -t linux-agent:latest
```

Execute `use-linux-agent.azcli` to upload agent and create Container Instance. Update Environment Vars:

```bash
az container create -g $grp -l $loc -n $agent --image $dockerhubuser/$agent --cpu 1 --memory 1 --dns-name-label $agent --port 80 --environment-variables 'AZP_URL'=$org 'AZP_TOKEN'=$token 'AZP_AGENT_NAME'='shlinuxagent' 'AZP_POOL'=$pool
```

Test Agent:

```yaml
trigger:
    - main

pool:
    name: dockerpool

steps:
    - script: echo Hello, world!
      displayName: "Run a one-line script"

    - script: |
          echo Add other tasks to build, test, and deploy your project.
          echo See https://aka.ms/yaml
      displayName: "Run a multi-line script"
```

> Note: For production you have to update the startup script to install the required software / capabilities

## Windows Agent

Build Windows Agent:

```
docker build -t winagent:latest .
```

Enable Windows Container Feature:

```
Enable-WindowsOptionalFeature -Online -FeatureName $("Microsoft-Hyper-V", "Containers") -All
```
