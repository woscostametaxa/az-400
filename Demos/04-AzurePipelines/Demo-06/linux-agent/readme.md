# Implement & Use a Self-hosted Docker Linux Agent

A version of this agent is published at [https://hub.docker.com/repository/docker/arambazamba/azdevops-linux-agent](https://hub.docker.com/repository/docker/arambazamba/azdevops-linux-agent)

## Configure Agent Container

To add capabilities you have to add setup scripts to `./linux-agent/installers/` and update the `Dockerfile` to install the required software

```bash
COPY installers /installers

RUN /installers/netcore.sh
RUN /installers/azurecli.sh
RUN /installers/node.sh
RUN /installers/m365-cli.sh
```

Build Linux Agent:

```bash
docker build -t aciagentlinux .
docker tag aciagentlinux arambazamba/aciagentlinux
docker push arambazamba/aciagentlinux
```

## Use Container

Create a custom agent pool - ie: `aci-pool`

![aci-pool](_images/aci-pool.png)

Get Azure DevOps token:

![devops-token](_images/devops-token.png)

Export token to env or add it to script:

```
export token=ae3ypool6mvpf7624it7j4smbveyrics4rnpulaqbjkeijaxl6nq
```

Execute `creat-linux-agent-on-ci.azcli` to upload agent and create Container Instance. Update Environment Vars:

```bash
az container create -g $grp -l $loc -n $agent --image $dockerhubuser/$agent --cpu 1 --memory 1 --dns-name-label $agent --port 80 --environment-variables 'AZP_URL'=$org 'AZP_TOKEN'=$token 'AZP_AGENT_NAME'='shlinuxagent' 'AZP_POOL'=$pool
```

Simple Agent Test `test-agent.yml`:

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
