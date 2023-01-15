import { Notifications } from '../../src/application/entities/notifications';
import { NotificationRepository } from '../../src/application/repositories/notification.repository';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notifications[] = [];

  async create(notification: Notifications) {
    this.notifications.push(notification);
  }
}
