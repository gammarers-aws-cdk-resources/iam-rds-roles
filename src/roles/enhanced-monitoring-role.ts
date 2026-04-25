import { Duration } from 'aws-cdk-lib';
import { Role, ServicePrincipal, ManagedPolicy, IManagedPolicy, PolicyDocument } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

/**
 * Properties for {@link EnhancedMonitoringRole}.
 */
export interface EnhancedMonitoringRoleProps {
  readonly roleName?: string;
  readonly managedPolicies?: IManagedPolicy[];
  readonly permissionsBoundary?: IManagedPolicy;
  readonly maxSessionDuration?: Duration;
  readonly inlinePolicies?: {
    [name: string]: PolicyDocument;
  };
  readonly path?: string;
  readonly description?: string;
}

/**
 * IAM role assumed by RDS Enhanced Monitoring.
 *
 * This construct attaches `AmazonRDSEnhancedMonitoringRole` and allows additional
 * managed/inline policies to be provided via props.
 */
export class EnhancedMonitoringRole extends Role {

  /**
   * Creates a new RDS Enhanced Monitoring role.
   */
  constructor(scope: Construct, id: string, props?: EnhancedMonitoringRoleProps) {
    super(scope, id, {
      roleName: props?.roleName,
      permissionsBoundary: props?.permissionsBoundary,
      maxSessionDuration: props?.maxSessionDuration,
      path: props?.path,
      description: props?.description ?? 'rds monitoring role',
      assumedBy: new ServicePrincipal('monitoring.rds.amazonaws.com'),
      managedPolicies: [
        ...(props?.managedPolicies ?? []),
        ManagedPolicy.fromAwsManagedPolicyName('AmazonRDSEnhancedMonitoringRole'),
      ],
      inlinePolicies: props?.inlinePolicies,
    });
  }
}