import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AuthGuard } from './guards/auth/auth.guard';
import { UserService } from './services/user/user.service';
import { RoleGuard } from './guards/role/role.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  const userService = app.get(UserService)
  const reflector = app.get(Reflector)
  app.useGlobalGuards(new RoleGuard(reflector))
  app.useGlobalGuards(new AuthGuard(userService))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
