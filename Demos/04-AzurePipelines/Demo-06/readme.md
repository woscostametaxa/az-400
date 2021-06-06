# Implement & Use a Self-hosted Docker Agent

[Run a self-hosted agent in Docker](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/docker?view=azure-devops)

[Authenticate with Azure Container Registry from Azure Container Instances](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-auth-aci)

## Self-hosted Linux Agent

To add capabilities you have to add setup scripts to `./linux-agent/installers/` and update the `Dockerfile` to install the required software

```bash
COPY installers /installers

RUN /installers/netcore.sh
RUN /installers/azurecli.sh
RUN /installers/node.sh
RUN /installers/m365-cli.sh
```

[Microsoft Hosted Agents Software Inventory](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/hosted?view=azure-devops&tabs=yaml) gives you a starting point for software installed on Azure-hosted-agents

![inventory](_images/inventory.png)

Build Linux Agent:

```bash
docker build -t azdevops-linux-agent .
docker tag azdevops-linux-agent $dockerhubuser/$agent
docker push $dockerhubuser/$agent
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

## Self-hosted Windows Agent

Build Windows Agent:

```bash
docker build -t azdevops-win-agent .
docker tag azdevops-win-agent $dockerhubuser/$agent
docker push $dockerhubuser/$agent
```

Enable Windows Container Feature:

```Powershell
Enable-WindowsOptionalFeature -Online -FeatureName $("Microsoft-Hyper-V", "Containers") -All
```
