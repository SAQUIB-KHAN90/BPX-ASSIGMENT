import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  data: any[] = [];
  selectedRows: Set<string> = new Set();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((res: any) => {
      this.data = res.rows;
      // Initialize the `expanded` property for each row
      this.data.forEach((row) => {
        row.expanded = false;
        if (row.children) {
          row.children.forEach((child: any) => {
            child.expanded = false;
          });
        }
      });
    });
  }

  toggleRowSelection(id: string): void {
    if (this.selectedRows.has(id)) {
      this.selectedRows.delete(id);
    } else {
      this.selectedRows.add(id);
    }
  }

  isRowSelected(id: string): boolean {
    return this.selectedRows.has(id);
  }

  toggleChildren(row: any): void {
    row.expanded = !row.expanded;
  }
}
