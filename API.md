# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnhancedMonitoringRole <a name="EnhancedMonitoringRole" id="iam-rds-roles.EnhancedMonitoringRole"></a>

IAM role assumed by RDS Enhanced Monitoring.

This construct attaches `AmazonRDSEnhancedMonitoringRole` and allows additional
managed/inline policies to be provided via props.

#### Initializers <a name="Initializers" id="iam-rds-roles.EnhancedMonitoringRole.Initializer"></a>

```typescript
import { EnhancedMonitoringRole } from 'iam-rds-roles'

new EnhancedMonitoringRole(scope: Construct, id: string, props?: EnhancedMonitoringRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.Initializer.parameter.props">props</a></code> | <code><a href="#iam-rds-roles.EnhancedMonitoringRoleProps">EnhancedMonitoringRoleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="iam-rds-roles.EnhancedMonitoringRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="iam-rds-roles.EnhancedMonitoringRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="iam-rds-roles.EnhancedMonitoringRole.Initializer.parameter.props"></a>

- *Type:* <a href="#iam-rds-roles.EnhancedMonitoringRoleProps">EnhancedMonitoringRoleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.applyRemovalPolicy">applyRemovalPolicy</a></code> | Skip applyRemovalPolicy if role synthesis is prevented by customizeRoles. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.addManagedPolicy">addManagedPolicy</a></code> | Attaches a managed policy to this role. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.addToPolicy">addToPolicy</a></code> | Add to the policy of this principal. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.addToPrincipalPolicy">addToPrincipalPolicy</a></code> | Adds a permission to the role's default policy document. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.attachInlinePolicy">attachInlinePolicy</a></code> | Attaches a policy to this role. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.grant">grant</a></code> | Grant the actions defined in actions to the identity Principal on this resource. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.grantAssumeRole">grantAssumeRole</a></code> | Grant permissions to the given principal to assume this role. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.grantPassRole">grantPassRole</a></code> | Grant permissions to the given principal to pass this role. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.withoutPolicyUpdates">withoutPolicyUpdates</a></code> | Return a copy of this Role object whose Policies will not be updated. |

---

##### `toString` <a name="toString" id="iam-rds-roles.EnhancedMonitoringRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="iam-rds-roles.EnhancedMonitoringRole.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="iam-rds-roles.EnhancedMonitoringRole.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="iam-rds-roles.EnhancedMonitoringRole.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Skip applyRemovalPolicy if role synthesis is prevented by customizeRoles.

Because in this case, this construct does not have a CfnResource in the tree.

###### `policy`<sup>Required</sup> <a name="policy" id="iam-rds-roles.EnhancedMonitoringRole.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

RemovalPolicy.

---

##### `addManagedPolicy` <a name="addManagedPolicy" id="iam-rds-roles.EnhancedMonitoringRole.addManagedPolicy"></a>

```typescript
public addManagedPolicy(policy: IManagedPolicy): void
```

Attaches a managed policy to this role.

###### `policy`<sup>Required</sup> <a name="policy" id="iam-rds-roles.EnhancedMonitoringRole.addManagedPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

The the managed policy to attach.

---

##### `addToPolicy` <a name="addToPolicy" id="iam-rds-roles.EnhancedMonitoringRole.addToPolicy"></a>

```typescript
public addToPolicy(statement: PolicyStatement): boolean
```

Add to the policy of this principal.

###### `statement`<sup>Required</sup> <a name="statement" id="iam-rds-roles.EnhancedMonitoringRole.addToPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `addToPrincipalPolicy` <a name="addToPrincipalPolicy" id="iam-rds-roles.EnhancedMonitoringRole.addToPrincipalPolicy"></a>

```typescript
public addToPrincipalPolicy(statement: PolicyStatement): AddToPrincipalPolicyResult
```

Adds a permission to the role's default policy document.

If there is no default policy attached to this role, it will be created.

###### `statement`<sup>Required</sup> <a name="statement" id="iam-rds-roles.EnhancedMonitoringRole.addToPrincipalPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

The permission statement to add to the policy document.

---

##### `attachInlinePolicy` <a name="attachInlinePolicy" id="iam-rds-roles.EnhancedMonitoringRole.attachInlinePolicy"></a>

```typescript
public attachInlinePolicy(policy: Policy): void
```

Attaches a policy to this role.

###### `policy`<sup>Required</sup> <a name="policy" id="iam-rds-roles.EnhancedMonitoringRole.attachInlinePolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.Policy

The policy to attach.

---

##### `grant` <a name="grant" id="iam-rds-roles.EnhancedMonitoringRole.grant"></a>

```typescript
public grant(grantee: IPrincipal, actions: ...string[]): Grant
```

Grant the actions defined in actions to the identity Principal on this resource.

###### `grantee`<sup>Required</sup> <a name="grantee" id="iam-rds-roles.EnhancedMonitoringRole.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

---

###### `actions`<sup>Required</sup> <a name="actions" id="iam-rds-roles.EnhancedMonitoringRole.grant.parameter.actions"></a>

- *Type:* ...string[]

---

##### `grantAssumeRole` <a name="grantAssumeRole" id="iam-rds-roles.EnhancedMonitoringRole.grantAssumeRole"></a>

```typescript
public grantAssumeRole(identity: IPrincipal): Grant
```

Grant permissions to the given principal to assume this role.

###### `identity`<sup>Required</sup> <a name="identity" id="iam-rds-roles.EnhancedMonitoringRole.grantAssumeRole.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

---

##### `grantPassRole` <a name="grantPassRole" id="iam-rds-roles.EnhancedMonitoringRole.grantPassRole"></a>

```typescript
public grantPassRole(identity: IPrincipal): Grant
```

Grant permissions to the given principal to pass this role.

###### `identity`<sup>Required</sup> <a name="identity" id="iam-rds-roles.EnhancedMonitoringRole.grantPassRole.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

---

##### `withoutPolicyUpdates` <a name="withoutPolicyUpdates" id="iam-rds-roles.EnhancedMonitoringRole.withoutPolicyUpdates"></a>

```typescript
public withoutPolicyUpdates(options?: WithoutPolicyUpdatesOptions): IRole
```

Return a copy of this Role object whose Policies will not be updated.

Use the object returned by this method if you want this Role to be used by
a construct without it automatically updating the Role's Policies.

If you do, you are responsible for adding the correct statements to the
Role's policies yourself.

###### `options`<sup>Optional</sup> <a name="options" id="iam-rds-roles.EnhancedMonitoringRole.withoutPolicyUpdates.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.WithoutPolicyUpdatesOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.customizeRoles">customizeRoles</a></code> | Customize the creation of IAM roles within the given scope. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.fromLookup">fromLookup</a></code> | Lookup an existing Role. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.fromRoleArn">fromRoleArn</a></code> | Import an external role by ARN. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.fromRoleName">fromRoleName</a></code> | Import an external role by name. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.isRole">isRole</a></code> | Return whether the given object is a Role. |

---

##### `isConstruct` <a name="isConstruct" id="iam-rds-roles.EnhancedMonitoringRole.isConstruct"></a>

```typescript
import { EnhancedMonitoringRole } from 'iam-rds-roles'

EnhancedMonitoringRole.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="iam-rds-roles.EnhancedMonitoringRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="iam-rds-roles.EnhancedMonitoringRole.isOwnedResource"></a>

```typescript
import { EnhancedMonitoringRole } from 'iam-rds-roles'

EnhancedMonitoringRole.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="iam-rds-roles.EnhancedMonitoringRole.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="iam-rds-roles.EnhancedMonitoringRole.isResource"></a>

```typescript
import { EnhancedMonitoringRole } from 'iam-rds-roles'

EnhancedMonitoringRole.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="iam-rds-roles.EnhancedMonitoringRole.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `customizeRoles` <a name="customizeRoles" id="iam-rds-roles.EnhancedMonitoringRole.customizeRoles"></a>

```typescript
import { EnhancedMonitoringRole } from 'iam-rds-roles'

EnhancedMonitoringRole.customizeRoles(scope: Construct, options?: CustomizeRolesOptions)
```

Customize the creation of IAM roles within the given scope.

It is recommended that you **do not** use this method and instead allow
CDK to manage role creation. This should only be used
in environments where CDK applications are not allowed to created IAM roles.

This can be used to prevent the CDK application from creating roles
within the given scope and instead replace the references to the roles with
precreated role names. A report will be synthesized in the cloud assembly (i.e. cdk.out)
that will contain the list of IAM roles that would have been created along with the
IAM policy statements that the role should contain. This report can then be used
to create the IAM roles outside of CDK and then the created role names can be provided
in `usePrecreatedRoles`.

*Example*

```typescript
declare const app: App;
iam.Role.customizeRoles(app, {
  usePrecreatedRoles: {
    'ConstructPath/To/Role': 'my-precreated-role-name',
  },
});
```


###### `scope`<sup>Required</sup> <a name="scope" id="iam-rds-roles.EnhancedMonitoringRole.customizeRoles.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope to customize role creation.

---

###### `options`<sup>Optional</sup> <a name="options" id="iam-rds-roles.EnhancedMonitoringRole.customizeRoles.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.CustomizeRolesOptions

options for configuring role creation.

---

##### `fromLookup` <a name="fromLookup" id="iam-rds-roles.EnhancedMonitoringRole.fromLookup"></a>

```typescript
import { EnhancedMonitoringRole } from 'iam-rds-roles'

EnhancedMonitoringRole.fromLookup(scope: Construct, id: string, options: RoleLookupOptions)
```

Lookup an existing Role.

###### `scope`<sup>Required</sup> <a name="scope" id="iam-rds-roles.EnhancedMonitoringRole.fromLookup.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="iam-rds-roles.EnhancedMonitoringRole.fromLookup.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="iam-rds-roles.EnhancedMonitoringRole.fromLookup.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.RoleLookupOptions

---

##### `fromRoleArn` <a name="fromRoleArn" id="iam-rds-roles.EnhancedMonitoringRole.fromRoleArn"></a>

```typescript
import { EnhancedMonitoringRole } from 'iam-rds-roles'

EnhancedMonitoringRole.fromRoleArn(scope: Construct, id: string, roleArn: string, options?: FromRoleArnOptions)
```

Import an external role by ARN.

If the imported Role ARN is a Token (such as a
`CfnParameter.valueAsString` or a `Fn.importValue()`) *and* the referenced
role has a `path` (like `arn:...:role/AdminRoles/Alice`), the
`roleName` property will not resolve to the correct value. Instead it
will resolve to the first path component. We unfortunately cannot express
the correct calculation of the full path name as a CloudFormation
expression. In this scenario the Role ARN should be supplied without the
`path` in order to resolve the correct role resource.

###### `scope`<sup>Required</sup> <a name="scope" id="iam-rds-roles.EnhancedMonitoringRole.fromRoleArn.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope.

---

###### `id`<sup>Required</sup> <a name="id" id="iam-rds-roles.EnhancedMonitoringRole.fromRoleArn.parameter.id"></a>

- *Type:* string

construct id.

---

###### `roleArn`<sup>Required</sup> <a name="roleArn" id="iam-rds-roles.EnhancedMonitoringRole.fromRoleArn.parameter.roleArn"></a>

- *Type:* string

the ARN of the role to import.

---

###### `options`<sup>Optional</sup> <a name="options" id="iam-rds-roles.EnhancedMonitoringRole.fromRoleArn.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.FromRoleArnOptions

allow customizing the behavior of the returned role.

---

##### `fromRoleName` <a name="fromRoleName" id="iam-rds-roles.EnhancedMonitoringRole.fromRoleName"></a>

```typescript
import { EnhancedMonitoringRole } from 'iam-rds-roles'

EnhancedMonitoringRole.fromRoleName(scope: Construct, id: string, roleName: string, options?: FromRoleNameOptions)
```

Import an external role by name.

The imported role is assumed to exist in the same account as the account
the scope's containing Stack is being deployed to.

###### `scope`<sup>Required</sup> <a name="scope" id="iam-rds-roles.EnhancedMonitoringRole.fromRoleName.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope.

---

###### `id`<sup>Required</sup> <a name="id" id="iam-rds-roles.EnhancedMonitoringRole.fromRoleName.parameter.id"></a>

- *Type:* string

construct id.

---

###### `roleName`<sup>Required</sup> <a name="roleName" id="iam-rds-roles.EnhancedMonitoringRole.fromRoleName.parameter.roleName"></a>

- *Type:* string

the name of the role to import.

---

###### `options`<sup>Optional</sup> <a name="options" id="iam-rds-roles.EnhancedMonitoringRole.fromRoleName.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.FromRoleNameOptions

allow customizing the behavior of the returned role.

---

##### `isRole` <a name="isRole" id="iam-rds-roles.EnhancedMonitoringRole.isRole"></a>

```typescript
import { EnhancedMonitoringRole } from 'iam-rds-roles'

EnhancedMonitoringRole.isRole(x: any)
```

Return whether the given object is a Role.

###### `x`<sup>Required</sup> <a name="x" id="iam-rds-roles.EnhancedMonitoringRole.isRole.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.property.assumeRoleAction">assumeRoleAction</a></code> | <code>string</code> | When this Principal is used in an AssumeRole policy, the action to use. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.property.grants">grants</a></code> | <code>aws-cdk-lib.aws_iam.RoleGrants</code> | Collection of grant methods for a Role. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.property.policyFragment">policyFragment</a></code> | <code>aws-cdk-lib.aws_iam.PrincipalPolicyFragment</code> | Returns the role. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.property.roleArn">roleArn</a></code> | <code>string</code> | Returns the ARN of this role. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.property.roleId">roleId</a></code> | <code>string</code> | Returns the stable and unique string identifying the role. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.property.roleName">roleName</a></code> | <code>string</code> | Returns the name of the role. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.property.roleRef">roleRef</a></code> | <code>aws-cdk-lib.interfaces.aws_iam.RoleReference</code> | A reference to a Role resource. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.property.assumeRolePolicy">assumeRolePolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | The assume role policy document associated with this role. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy</code> | Returns the permissions boundary attached to this role. |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.property.principalAccount">principalAccount</a></code> | <code>string</code> | The AWS account ID of this principal. |

---

##### `node`<sup>Required</sup> <a name="node" id="iam-rds-roles.EnhancedMonitoringRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="iam-rds-roles.EnhancedMonitoringRole.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="iam-rds-roles.EnhancedMonitoringRole.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `assumeRoleAction`<sup>Required</sup> <a name="assumeRoleAction" id="iam-rds-roles.EnhancedMonitoringRole.property.assumeRoleAction"></a>

```typescript
public readonly assumeRoleAction: string;
```

- *Type:* string

When this Principal is used in an AssumeRole policy, the action to use.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="iam-rds-roles.EnhancedMonitoringRole.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `grants`<sup>Required</sup> <a name="grants" id="iam-rds-roles.EnhancedMonitoringRole.property.grants"></a>

```typescript
public readonly grants: RoleGrants;
```

- *Type:* aws-cdk-lib.aws_iam.RoleGrants

Collection of grant methods for a Role.

---

##### `policyFragment`<sup>Required</sup> <a name="policyFragment" id="iam-rds-roles.EnhancedMonitoringRole.property.policyFragment"></a>

```typescript
public readonly policyFragment: PrincipalPolicyFragment;
```

- *Type:* aws-cdk-lib.aws_iam.PrincipalPolicyFragment

Returns the role.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="iam-rds-roles.EnhancedMonitoringRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Returns the ARN of this role.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="iam-rds-roles.EnhancedMonitoringRole.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

Returns the stable and unique string identifying the role.

For example,
AIDAJQABLZS4A3QDU576Q.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="iam-rds-roles.EnhancedMonitoringRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Returns the name of the role.

---

##### `roleRef`<sup>Required</sup> <a name="roleRef" id="iam-rds-roles.EnhancedMonitoringRole.property.roleRef"></a>

```typescript
public readonly roleRef: RoleReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_iam.RoleReference

A reference to a Role resource.

---

##### `assumeRolePolicy`<sup>Optional</sup> <a name="assumeRolePolicy" id="iam-rds-roles.EnhancedMonitoringRole.property.assumeRolePolicy"></a>

```typescript
public readonly assumeRolePolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

The assume role policy document associated with this role.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="iam-rds-roles.EnhancedMonitoringRole.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: IManagedPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

Returns the permissions boundary attached to this role.

---

##### `principalAccount`<sup>Optional</sup> <a name="principalAccount" id="iam-rds-roles.EnhancedMonitoringRole.property.principalAccount"></a>

```typescript
public readonly principalAccount: string;
```

- *Type:* string

The AWS account ID of this principal.

Can be undefined when the account is not known
(for example, for service principals).
Can be a Token - in that case,
it's assumed to be AWS::AccountId.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRole.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="iam-rds-roles.EnhancedMonitoringRole.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---

## Structs <a name="Structs" id="Structs"></a>

### EnhancedMonitoringRoleProps <a name="EnhancedMonitoringRoleProps" id="iam-rds-roles.EnhancedMonitoringRoleProps"></a>

Properties for {@link EnhancedMonitoringRole}.

#### Initializer <a name="Initializer" id="iam-rds-roles.EnhancedMonitoringRoleProps.Initializer"></a>

```typescript
import { EnhancedMonitoringRoleProps } from 'iam-rds-roles'

const enhancedMonitoringRoleProps: EnhancedMonitoringRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRoleProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRoleProps.property.inlinePolicies">inlinePolicies</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_iam.PolicyDocument}</code> | *No description.* |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRoleProps.property.managedPolicies">managedPolicies</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy[]</code> | *No description.* |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRoleProps.property.maxSessionDuration">maxSessionDuration</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRoleProps.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRoleProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy</code> | *No description.* |
| <code><a href="#iam-rds-roles.EnhancedMonitoringRoleProps.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `description`<sup>Optional</sup> <a name="description" id="iam-rds-roles.EnhancedMonitoringRoleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inlinePolicies`<sup>Optional</sup> <a name="inlinePolicies" id="iam-rds-roles.EnhancedMonitoringRoleProps.property.inlinePolicies"></a>

```typescript
public readonly inlinePolicies: {[ key: string ]: PolicyDocument};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_iam.PolicyDocument}

---

##### `managedPolicies`<sup>Optional</sup> <a name="managedPolicies" id="iam-rds-roles.EnhancedMonitoringRoleProps.property.managedPolicies"></a>

```typescript
public readonly managedPolicies: IManagedPolicy[];
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy[]

---

##### `maxSessionDuration`<sup>Optional</sup> <a name="maxSessionDuration" id="iam-rds-roles.EnhancedMonitoringRoleProps.property.maxSessionDuration"></a>

```typescript
public readonly maxSessionDuration: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

##### `path`<sup>Optional</sup> <a name="path" id="iam-rds-roles.EnhancedMonitoringRoleProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="iam-rds-roles.EnhancedMonitoringRoleProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: IManagedPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="iam-rds-roles.EnhancedMonitoringRoleProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### Hello <a name="Hello" id="iam-rds-roles.Hello"></a>

#### Initializers <a name="Initializers" id="iam-rds-roles.Hello.Initializer"></a>

```typescript
import { Hello } from 'iam-rds-roles'

new Hello()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#iam-rds-roles.Hello.sayHello">sayHello</a></code> | Returns a friendly greeting. |

---

##### `sayHello` <a name="sayHello" id="iam-rds-roles.Hello.sayHello"></a>

```typescript
public sayHello(): string
```

Returns a friendly greeting.





