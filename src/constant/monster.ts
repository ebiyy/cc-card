export interface MonsterBaseData {
  monsterId: number;
  jaName: string;
  enName: string;
  HP: number;
}

export const MONSTER_BASE_DATA: MonsterBaseData[] = [
  {
    monsterId: 1,
    jaName: 'ゴブリン',
    enName: 'goblin',
    HP: 50,
  },
  {
    monsterId: 2,
    jaName: 'グリーンマン',
    enName: 'goblin',
    HP: 100,
  },
  {
    monsterId: 3,
    jaName: '古龍',
    enName: 'ancient dragon',
    HP: 300,
  },
  {
    monsterId: 4,
    jaName: 'ドラゴン',
    enName: 'doragon',
    HP: 200,
  },
  {
    monsterId: 5,
    jaName: 'グレムリン',
    enName: 'gremlin',
    HP: 80,
  },
  {
    monsterId: 6,
    jaName: 'ホブゴブリン',
    enName: 'hobgoblin',
    HP: 150,
  },
  {
    monsterId: 7,
    jaName: 'コボルト',
    enName: 'kobold',
    HP: 80,
  },
  {
    monsterId: 8,
    jaName: 'リーフ・ドラゴン',
    enName: 'leaf dragon',
    HP: 250,
  },
  {
    monsterId: 9,
    jaName: 'ミノタウロス',
    enName: 'minotaur',
    HP: 200,
  },
  {
    monsterId: 10,
    jaName: 'スモーク・ドラゴン',
    enName: 'smork dragon',
    HP: 180,
  },
  {
    monsterId: 11,
    jaName: '三頭龍',
    enName: 'Three-headed dragon',
    HP: 500,
  },
];

export const MONSTER_DATA = [
  {
    monsterId: 1,
    fileName: 'm001',
    imgSouceURL:
      'https://www.kissclipart.com/free-goblin-clipart-goblin-clip-art-37zkeo/',
  },
  {
    monsterId: 2,
    fileName: 'm002',
    imgSouceURL:
      'https://www.kissclipart.com/slime-monster-clipart-ooze-green-slime-monster-8an7c8/',
  },
  {
    monsterId: 3,
    fileName: 'm003',
    imgSouceURL:
      'https://www.kissclipart.com/transparent-dragon-png-clipart-the-elder-scrolls-v-z2gnpg/',
  },
  {
    monsterId: 4,
    fileName: 'm004',
    imgSouceURL:
      'https://www.kissclipart.com/fire-emblem-dragon-clipart-fire-emblem-shadow-drag-5exfqn/',
  },
  {
    monsterId: 5,
    fileName: 'm005',
    imgSouceURL:
      'https://www.kissclipart.com/gremlin-pathfinder-clipart-pathfinder-roleplaying-4dpowa/',
  },
  {
    monsterId: 6,
    fileName: 'm006',
    imgSouceURL:
      'https://www.kissclipart.com/ogre-pathfinder-clipart-pathfinder-roleplaying-gam-i3a9c6/',
  },
  {
    monsterId: 7,
    fileName: 'm007',
    imgSouceURL:
      'https://www.kissclipart.com/rpg-goblin-clipart-goblin-pathfinder-roleplaying-g-v5ssgt/',
  },
  {
    monsterId: 8,
    fileName: 'm008',
    imgSouceURL: 'https://www.kissclipart.com/dragon-hnf87v/',
  },
  {
    monsterId: 9,
    fileName: 'm009',
    imgSouceURL:
      'https://www.kissclipart.com/minotaur-legendary-creature-illustration-ushi-oni-evepb9/',
  },
  {
    monsterId: 10,
    fileName: 'm010',
    imgSouceURL: 'https://www.kissclipart.com/dragon-zshh4f/',
  },
  {
    monsterId: 11,
    fileName: 'm011',
    imgSouceURL:
      'https://www.kissclipart.com/greek-mythology-clipart-dragon-lernaean-hydra-gree-u1vmul/',
  },
];
