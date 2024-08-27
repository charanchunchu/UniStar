import { Component, OnInit } from '@angular/core';
import { DataService } from "../service/data.service";

interface ItemValue {
  name: string;
  value: string;
  [key: string]: string;
}

export interface DataItem {
  name: string;
  expanded: boolean;
  values: ItemValue[];
}

@Component({
  selector: 'app-cable-design',
  templateUrl: './cable-design.component.html',
  styleUrls: ['./cable-design.component.scss']
})
export class CableDesignComponent implements OnInit {
  data: DataItem[] = [];
  tableData: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: any) => {
      this.tableData = data.tableData;
      this.data = data.items;
    });
  }

  toggleItem(item: DataItem): void {
    item.expanded = !item.expanded;
  }

  getKeys(itemValue: ItemValue): string[] {
    return Object.keys(itemValue);
  }

  getKeyValuePairs(itemValue: ItemValue): { key: string, value: string }[] {
    return Object.keys(itemValue).map(key => ({ key, value: itemValue[key] }));
  }
}
