import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingMiddleware } from './middleware/logging.middleware';
import { TokenMiddleware } from './middleware/token.middleware';
import { ContentTypeMiddleware } from './middleware/content-type/content-type.middleware';
import { ConvertMiddleware } from './middleware/convert.middleware';
import { RequestDetailsMiddleware } from './middleware/request-details/request-details.middleware';
import { timestamp } from 'rxjs';
import { TimeStampMiddleware } from './middleware/time-stamp/time-stamp.middleware';
import { UserService } from './services/user/user.service';
import { UserLoggingMiddleware } from './middleware/user-logging/user-logging.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(ContentTypeMiddleware)
  //     .exclude(
  //       { path: '/client/route4', method: RequestMethod.POST },
  //       {
  //         path: '/client/route2',
  //         method: RequestMethod.GET,
  //       },
  //     )
  //     .forRoutes(AppController);
  // }
  // consumer.apply(RequestDetailsMiddleware, TimeStampMiddleware).forRoutes('*')
  // consumer.apply(ConvertMiddleware).forRoutes('*')
  // consumer.apply(RequestDetailsMiddleware, TimeStampMiddleware).forRoutes({path: '*', method: RequestMethod.ALL})
 consumer.apply(UserLoggingMiddleware).forRoutes('*')
}
}