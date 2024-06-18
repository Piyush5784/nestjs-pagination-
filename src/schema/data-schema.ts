import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Data {
  @Prop({ trim: true })
  name: string;

  @Prop({ trim: true })
  role: string;

  @Prop()
  age: number;
}

export const dataSchema = SchemaFactory.createForClass(Data);
