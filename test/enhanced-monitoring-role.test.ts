import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { EnhancedMonitoringRole, iam } from '../src';

describe('EnhancedMonitoringRole', () => {
  test('should match the CloudFormation snapshot', () => {
    const app = new App();
    const stack = new Stack(app, 'Stack');

    new EnhancedMonitoringRole(stack, 'Role');

    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });

  test('should create an IAM role assumed by RDS Enhanced Monitoring', () => {
    const app = new App();
    const stack = new Stack(app, 'Stack');

    new EnhancedMonitoringRole(stack, 'Role');

    const template = Template.fromStack(stack);
    const templateJson = JSON.stringify(template.toJSON());

    expect(templateJson).toContain('sts:AssumeRole');
    expect(templateJson).toContain('monitoring.rds.amazonaws.com');
  });

  test('should include the AmazonRDSEnhancedMonitoringRole managed policy by default', () => {
    const app = new App();
    const stack = new Stack(app, 'Stack');

    new EnhancedMonitoringRole(stack, 'Role');

    const template = Template.fromStack(stack);
    const templateJson = JSON.stringify(template.toJSON());
    expect(templateJson).toContain('AmazonRDSEnhancedMonitoringRole');
  });

  test('should be available under iam.rds.EnhancedMonitoringRole', () => {
    const app = new App();
    const stack = new Stack(app, 'Stack');

    const role = new iam.rds.EnhancedMonitoringRole(stack, 'Role');

    expect(role).toBeInstanceOf(EnhancedMonitoringRole);
  });
});