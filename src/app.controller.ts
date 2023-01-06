import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('notifications')
  list() {
    return this.prisma.notification.findMany();
  }

  @Post('notifications')
  async create(@Body() body: CreateNotificationBody) {

    console.log(body);
    // await this.prisma.notification.create({
    //   data: {
    //     id: randomUUID(),
    //     content: 'Você tem uma nova notificação',
    //     category: 'social',
    //     recipientId: randomUUID()
    //   }
    // })
  }
}
