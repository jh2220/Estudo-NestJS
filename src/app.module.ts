import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from './http.module';
import { MailService } from './mail/mail.service';
import { SMTPMailService } from './mail/smtpMail.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: MailService,
      useClass: SMTPMailService
    }
  ],
})
export class AppModule {}
