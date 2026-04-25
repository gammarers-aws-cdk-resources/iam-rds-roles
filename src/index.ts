/**
 * Minimal example class exported from this construct library.
 */
import { EnhancedMonitoringRole } from './roles/enhanced-monitoring-role';

export class Hello {
  /**
   * Returns a friendly greeting.
   */
  public sayHello() {
    return 'hello, world!';
  }
}

export {
  EnhancedMonitoringRole,
  EnhancedMonitoringRoleProps,
} from './roles/enhanced-monitoring-role';

export const iam = {
  rds: {
    EnhancedMonitoringRole,
  },
} as const;