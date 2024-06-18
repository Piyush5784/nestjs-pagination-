import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Data, dataSchema } from './schema/data-schema';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.mongodbUrl),
    MongooseModule.forFeature([{ name: Data.name, schema: dataSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
