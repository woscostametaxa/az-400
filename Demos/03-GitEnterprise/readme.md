# Scaling Git for Enterprise DevOps

## Demos

- Demo-01
  - Explain Monorepo
  - Show Pull Request
- Demo-02
  - Azrue Devops Protection Policy
  - Show Git Branch Protection Policy
- Demo-03
  - Git-Flow
  - Forking Workflow
- Demo-04  
  - Using Git LFS
- Demo-05
  - Git Hooks & GitHub Events

## Readings

[Handling Merge Conflicts in VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_merge-conflicts)

[Improve code quality with branch policies](https://docs.microsoft.com/en-us/azure/devops/repos/git/branch-policies?view=azure-devops)

[Git Flow Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)

## Extensions & Tools

[Github Pull Request and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)

## Remotes

A Remote is a GIT Repo on a Git Server, typically in the cloud, like GitHub.

Adding Remotes:

```
git remote add origin https://github.com/try-git/try_git.git
```

Pull / Push from / to repository:

```
git pull / git push
```

## Forking Workflow - Getting Updates for Class Demos

![forking-wf](_images/forking-workflow.jpg)

Original Repo could be: `https://github.com/ARambazamba/AZ-400` where `ARambazamba` is the `original-owner-github-username` and `AZ-400` is the `reponame`

### Listing the current Remotes

List the current configured remote repository for your fork.

```
git remote -v
> origin  https://github.com/your-github-username/reponame.git (fetch)
> origin  https://github.com/your-github-username/reponame.git (push)
```

Specify a new remote upstream repository that will be synced with the fork.

### Adding the Repo of the original owner as Upstream

```
git remote add upstream https://github.com/ARambazamba/AZ-400.git
```

Verify the new upstream repository you've specified for your fork.

```
git remote -v
> origin    https://github.com/your-github-username/reponame.git (fetch)
> origin    https://github.com/your-github-username/reponame.git (push)
> upstream  https://github.com/original-owner-github-username/reponame.git (fetch)
> upstream  https://github.com/original-owner-github-username/reponame.git (push)
```

### Getting Updates

Fetch from Upstream:

```
 git fetch upstream
 git merge upstream/main
 git push origin main
```

## Working with Submodules

Add a Submodule:

```
git submodule add https://github.com/ARambazamba/FoodApp FoodApp
git commit -m foodapp-submodule
```

Updating a Submodule to it's latest commit:

```
git submodule update --remote --merge
```

> Note: I use submodules to include samples in classes that are used in different classes or to shorten / avoid path problems in devops

## Git-flow

[Gitflow Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)

> Note: Require GIT 2.24.0+ - Check with `git --version` and seperate package installation on Linux `sudo apt-get install -y git-flow`

Initialize repo for gitflow:

```
git flow init
```

Start a new feature:

```
git flow feature start MYFEATURE
```

Finish feature:

```
git flow feature finish MYFEATURE
```

Publish a feature:

```
git flow feature publish  MYFEATURE
```

Start a release:

```
git flow release start RELEASE
```

Finish a release:

```
git flow release finish  RELEASE
```

## Git Hooks

[About Hooks](https://githooks.com/)

[Azure DevOps Web Hooks](https://docs.microsoft.com/en-us/azure/devops/service-hooks/services/webhooks?view=azure-devops)

## Fostering Internal Open Source

Forking is done using the Fork Button

![fork](../_images/fork.jpg)

Add the repo your forked from as "upstream":

```
git remote add upstream {upstream_url}
```

Make changes an create a Pull Request

Sync your fork to latest:

```
git fetch upstream master
git rebase upstream/master
git push origin
```

## Git Versioning

[GitVersion Documentation](https://gitversion.net/docs/usage/usage)

[GitVersion for Azure DevOps](https://marketplace.visualstudio.com/items?itemName=gittools.gitversion)

## Additional Labs & Walkthroughs

[Collaborate with Git](https://docs.microsoft.com/en-us/learn/modules/collaborate-with-git/)

[Edit code through branching and merging in Git](https://docs.microsoft.com/en-us/learn/modules/branch-merge-git/)
