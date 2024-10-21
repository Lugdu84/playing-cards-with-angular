import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MonsterType } from './utils/monster.utils';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PlayingCardComponent, SearchBarComponent],
})
export class AppComponent {
  count = 0;
  search = '';

  monsters!: Monster[];

  selectedMonsterIndex = 0;

  constructor() {
    this.monsters = [];
    const monster1 = new Monster();
    monster1.name = 'Pik';
    monster1.hp = 40;
    monster1.figureCaption = 'N° 001 Pik';
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = 'Car';
    monster2.type = MonsterType.FIRE;
    monster2.hp = 50;
    monster2.figureCaption = 'N° 002 Car';
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.name = 'Chu';
    monster3.hp = 60;
    monster3.figureCaption = 'N° 003 Chu';
    this.monsters.push(monster3);
  }

  toggleMonster() {
    this.selectedMonsterIndex =
      (this.selectedMonsterIndex + 1) % this.monsters.length;
  }

  increaseCount() {
    this.count++;
  }
}
