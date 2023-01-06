import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.service";

@Injectable()
export class postMarkMailService extends MailService {
    sendEmail(): string {
        return 'Post Mark Mail Service!';
    }
}
