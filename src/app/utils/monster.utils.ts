export enum MonsterType {
  PLANT = 'plant',
  FIRE = 'fire',
  WATER = 'water',
  ELECTRIC = 'electric',
}

export interface IMonsterProperties {
  imageUrl: string;
  color: string;
}

export const MonsterTypeProperties: { [key: string]: IMonsterProperties } = {
  [MonsterType.PLANT]: {
    imageUrl: 'images/plant.png',
    color: 'green',
  },
  [MonsterType.FIRE]: {
    imageUrl: 'images/fire.png',
    color: 'red',
  },
  [MonsterType.WATER]: {
    imageUrl: 'images/water.png',
    color: 'blue',
  },
  [MonsterType.ELECTRIC]: {
    imageUrl: 'images/electric.png',
    color: 'yellow',
  },
};
