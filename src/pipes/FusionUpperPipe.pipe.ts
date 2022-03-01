import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
export class FusionUpperPipe implements PipeTransform {
  transform(
    value: { skills: Array<string> },
    metadata: ArgumentMetadata,
  ): string {
    console.log(
      '🚀 ~ file: FusionUpperPipe.pipe.ts ~ line 4 ~ FusionUpperPipe ~ transform ~ metadata',
      metadata,
    );
    if (!value?.skills)
      throw new BadRequestException('expected an array of skills');
    return value.skills.map((skill) => skill.toUpperCase()).join('-');
  }
}
