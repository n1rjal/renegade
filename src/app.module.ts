import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherService } from './weather/weather.service';
import { WeatherModule } from './weather/weather.module';
import { ConfigModule } from '@nestjs/config';
import { AurdinoModule } from './aurdino/aurdino.module';
import { SurveyModule } from './survey/survey.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    WeatherModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'renegade',
      password: 'test12345',
      username: 'testuser',
      synchronize: true,
      entities: ['dist/**/*.entity{.js,.ts}'],
      logging: true,
    }),
    AurdinoModule,
    SurveyModule,
  ],
  controllers: [AppController],
  providers: [AppService, WeatherService],
})
export class AppModule {}
