import { MonsterType } from '@app/utils/monster.utils';

export class Monster {
  name = 'My Monster';
  image = 'images/pik.avif';
  type = MonsterType.ELECTRIC;
  hp = 40;
  figureCaption = 'N°001 Monster';
  attackName = 'Geo Impact';
  attackStrength = 60;
  attackDescription =
    'This is a long description of a monster attack. Probably something to do with electricity...';
}
