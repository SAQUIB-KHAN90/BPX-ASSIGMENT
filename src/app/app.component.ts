import { Component } from '@angular/core';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TableComponent],
  template: `<app-table></app-table>`,
})
export class AppComponent {}
