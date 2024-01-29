// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private staticDataKey = 'myStaticData';

  getStaticData(): any[] {
    const data = localStorage.getItem(this.staticDataKey);
    return data ? JSON.parse(data) : [];
  }

  saveStaticData(staticData: any[]): void {
    localStorage.setItem(this.staticDataKey, JSON.stringify(staticData));
  }

  addData(item: any): void {
    const staticData = this.getStaticData();
    staticData.push(item);
    this.saveStaticData(staticData);
  }

  updateData(index: number, newItem: any): void {
    const staticData = this.getStaticData();
    staticData[index] = newItem;
    this.saveStaticData(staticData);
  }

  deleteData(index: number): void {
    const staticData = this.getStaticData();
    staticData.splice(index, 1);
    this.saveStaticData(staticData);
  }
}
