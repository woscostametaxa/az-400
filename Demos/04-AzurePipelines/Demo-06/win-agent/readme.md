# Implement & Use a Self-hosted Docker Windows Agent

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
