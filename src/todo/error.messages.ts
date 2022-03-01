import { ValidationArguments } from 'class-validator';

export const TROP_LONG =
  (n: number) => (validationData: ValidationArguments) => {
    return `${validationData.property} :: Trop long, reçu ${
      validationData?.value?.length ?? 0
    }, taille maximale ${n} caractères.`;
  };
export const TROP_COURT =
  (n: number) => (validationData: ValidationArguments) => {
    return `${validationData.property} :: Trop court, reçu ${
      validationData?.value?.length ?? 0
    }, taille minimale ${n} caractères.`;
  };
export const OBLIGATOIR = (validationData: ValidationArguments) => {
  return `${validationData.property} :: champs obligatoir`;
};
