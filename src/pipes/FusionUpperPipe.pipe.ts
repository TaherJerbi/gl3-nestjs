import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export class FusionUpperPipe implements PipeTransform {
  transform(value: { skills }, metadata: ArgumentMetadata): string {
    console.log(
      '🚀 ~ file: FusionUpperPipe.pipe.ts ~ line 4 ~ FusionUpperPipe ~ transform ~ metadata',
      metadata,
    );
    return value.skills.map((skill) => skill.toUpperCase()).join('-');
  }
}
