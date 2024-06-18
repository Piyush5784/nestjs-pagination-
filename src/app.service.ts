import { Injectable } from '@nestjs/common';
import { dataDto } from './dto/data-format-dto';
import { Data } from './schema/data-schema';
import { Connection, Model } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Data.name) private readonly dataModel: Model<Data>,
    @InjectConnection() private connection: Connection,
  ) {}

  async storeData(dataDto: dataDto) {
    const { name, role, age } = dataDto;

    await this.dataModel.create({
      name,
      role,
      age,
    });

    return {
      message: 'Data successfully stored',
    };
  }

  async getAllData(page: number) {
    const resultPerPage = 2;
    const currentPage = page || 1;
    let skipPage = resultPerPage * (currentPage - 1);

    if (skipPage <= 0) skipPage = 1;

    const allData = await this.dataModel
      .find({})
      .skip(skipPage)
      .limit(resultPerPage);

    return {
      allData,
    };
  }
}
