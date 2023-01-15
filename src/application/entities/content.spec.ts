import { Content } from './content';

describe('Notification content', () => {
  it('Shoud be able to create a notification content', () => {
    const content = new Content('Lorem Ipsum dollor sit amet');

    expect(content).toBeTruthy();
  });

  it('Should not be able to create a notification content with less than 5 caracters', () => {
    expect(() => {
      new Content('aaa');
    }).toThrow();
  });

  it('Should not be able to create a notification content with more than 240 caracters', () => {
    expect(() => {
      new Content('a'.repeat(241));
    }).toThrow();
  });
});
