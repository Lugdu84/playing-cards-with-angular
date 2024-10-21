import {
  Component,
  EventEmitter,
  input,
  Input,
  model,
  output,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  // Input
  // @Input() search = '';
  // Signal
  // search = input<string>('');
  search = model<string>('');

  // Output
  // @Output() searchChange = new EventEmitter<string>();
  // searchChange = output<string>(); plus utilie car on a déjà un model
  // @Output('submit') searchButtonClicked = new EventEmitter();
  searchButtonClicked = output({ alias: 'submit' });
  searchClick() {
    this.searchButtonClicked.emit();
  }

  // updateSearch(value: string) {
  //   this.search.set(value);
  // }
}
