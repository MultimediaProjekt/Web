import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {DragulaService} from "ng2-dragula/components/dragula.provider";

@Component({
  selector: 'app-sort-level',
  templateUrl: './sort-level.component.html',
  styleUrls: ['./sort-level.component.scss']
})
export class SortLevelComponent implements OnInit {

  @Input() list: number[];
  private sortedList: number[];
  @Output() sorted = new EventEmitter();

  constructor(private dragulaService: DragulaService) {
  }

  ngOnInit() {
    this.sortedList = this.list.slice().sort((n1,n2) => n1 - n2);
    this.dragulaService.out.subscribe((value) => {
      if (this.isSorted()){
        this.sorted.emit(true);
      }
    });
  }

  private isSorted(): boolean {
    for (let i = 0, length = this.list.length; i < length; i++) {
      if (this.list[i] !== this.sortedList[i]) {
        return false;
      }
    }
    return true;
  }


}
