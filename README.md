# IAM RDS Roles (AWS CDK V2)

[![build](https://github.com/gammarers-aws-cdk-resources/iam-rds-roles/actions/workflows/build.yml/badge.svg)](https://github.com/gammarers-aws-cdk-resources/iam-rds-roles/actions/workflows/build.yml)
![license: Apache-2.0](https://img.shields.io/badge/license-Apache--2.0-blue)

AWS CDK construct(s) for IAM roles related to Amazon RDS.

## Features

- **RDS Enhanced Monitoring role**: Creates an IAM role assumed by `monitoring.rds.amazonaws.com` with the AWS managed policy `AmazonRDSEnhancedMonitoringRole` attached.
- **Namespaced exports**: Access constructs via `iam.rds.*` (e.g., `iam.rds.EnhancedMonitoringRole`).
- **Extensible permissions**: Add extra managed policies and inline policies through props.

## Installation

```bash
npm install iam-rds-roles
```

```bash
yarn add iam-rds-roles
```

## Usage

```ts
import { App, Stack } from 'aws-cdk-lib';
import { iam } from 'iam-rds-roles';

const app = new App();
const stack = new Stack(app, 'Stack');

new iam.rds.EnhancedMonitoringRole(stack, 'RdsEnhancedMonitoringRole');
```

You can also import the construct directly:

```ts
import { EnhancedMonitoringRole } from 'iam-rds-roles';
```

## Options

`EnhancedMonitoringRole` accepts the following props (`EnhancedMonitoringRoleProps`):

- **`roleName`**: Explicit role name.
- **`managedPolicies`**: Additional managed policies to attach.
- **`permissionsBoundary`**: Permissions boundary managed policy.
- **`maxSessionDuration`**: Maximum session duration.
- **`inlinePolicies`**: Inline policies to attach to the role.
- **`path`**: IAM path for the role.
- **`description`**: Role description (defaults to `"rds monitoring role"`).

## Requirements

- **Node.js**: \(>= 20\)
- **Peer dependencies**:
  - `aws-cdk-lib` \(v2\)
  - `constructs` \(v10\)

## License

This project is licensed under the (Apache-2.0) License.