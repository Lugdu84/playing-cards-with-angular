import {
  Component,
  input,
  Input,
  InputSignal,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MonsterTypeProperties } from '@app/utils/monster.utils';
import { Monster } from '@models/monster.model';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css',
})
export class PlayingCardComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['monster']) {
      if (
        changes['monster'].previousValue.type !=
        changes['monster'].currentValue.type
      ) {
        this.monsterTypeIcon =
          MonsterTypeProperties[this.monster.type].imageUrl;
        this.backgroundColor = MonsterTypeProperties[this.monster.type].color;
      }
    }
  }
  // Input
  // @Input({
  //   alias: 'my-monster',
  //   transform: (value: Monster) => {
  //     value.hp = value.hp / 2;
  //     return value;
  //   },
  // })

  // monster: InputSignal<Monster> = input(new Monster(), {
  //   alias: 'my-monster',
  //   transform: (value: Monster) => {
  //     value.hp = value.hp / 2;
  //     return value;
  //   },
  // });

  @Input() monster: Monster = new Monster();

  monsterTypeIcon = 'images/electric.png';
  backgroundColor = 'yellow';
}
