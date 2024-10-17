import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogIpMiddleware } from './middleware/log-ip/log-ip.middleware';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DatabaseAbstractionModule } from './database-abstraction/database-abstraction.module';
import { DBType } from './database-abstraction/types/enums/database-type.enum';

@Module({
  imports: [UsersModule,  AuthModule, ConfigModule.forRoot(), DatabaseAbstractionModule.register(DBType.POSTGRES),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogIpMiddleware)
      .forRoutes('*'); 
  }
}
