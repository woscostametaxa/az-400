# Introduction to Environments

The advantages of using environments include the following.

- Deployment history - Pipeline name and run details are recorded for deployments to an environment and its resources. In the context of multiple pipelines targeting the same environment or resource, deployment history of an environment is useful to identify the source of changes.
- Traceability of commits and work items - View jobs within the pipeline run that target an environment. You can also view the commits and work items that were newly deployed to the environment. Traceability also allows one to track whether a code change (commit) or feature/bug-fix (work items) reached an environment.
- Diagnose resource health - Validate whether the application is functioning at its desired state.
- Permissions - Secure environments by specifying which users and pipelines are allowed to target an environment.

While executing deployment strategies, you can access output variables across jobs using the following syntax.

- For runOnce strategy: `$[dependencies.<job-name>.outputs['<job-name>.<step-name>.<variable-name>']]`
- For deployment jobs using the runOnce strategy:` $[dependencies.<job-name>.outputs['<lifecycle-hookname>_<resource-name>.<step-name>.<variable-name>']]`.

  For example, if you have a deployment job to a virtual machine named Vm1, the output variable would be $[dependencies.<job-name>.outputs['Deploy_vm1.<step-name>.<variable-name>']]

- For canary strategy: `$[dependencies.<job-name>.outputs['<lifecycle-hookname>_<increment-value>.<step-name>.<variable-name>']]`
- For rolling strategy: `$[dependencies.<job-name>.outputs['<lifecycle-hookname>_<resource-name>.<step-name>.<variable-name>']]`
