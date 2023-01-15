import { Notifications } from '../entities/notifications';

export abstract class NotificationRepository {
  abstract create(notification: Notifications): Promise<void>;
}
