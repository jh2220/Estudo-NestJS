import { Content } from './content';
import { Notifications } from './notifications';

describe('Notifications', () => {
  it('shoud be able to create a notification', () => {
    const notification = new Notifications({
      content: new Content('Uma nova solicitação de amizde'),
      category: 'social',
      recipientId: 'exemple-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
