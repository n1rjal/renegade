import { Module } from '@nestjs/common';
import { AurdinoService } from './aurdino.service';

@Module({
  providers: [AurdinoService]
})
export class AurdinoModule {}
