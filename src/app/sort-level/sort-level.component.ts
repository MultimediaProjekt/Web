import {Component, OnInit, Input} from '@angular/core';
import {DragulaService} from "ng2-dragula/components/dragula.provider";

@Component({
  selector: 'app-sort-level',
  templateUrl: './sort-level.component.html',
  styleUrls: ['./sort-level.component.scss']
})
export class SortLevelComponent implements OnInit {

  @Input() list: number[];

  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('bag-one', {
      removeOnSpill: false
    });
  }

  ngOnInit() {
    this.dragulaService.out.subscribe((value) => {
      console.log(value, this.isSorted());
    });
  }

  private isSorted(): boolean {
    if (this.list[0] !== 0) {
      return false;
    }
    for (let i = 1, length = this.list.length; i < length; i++) {
      if (this.list[i] !== i) {
        return false;
      }
    }
    return true;
  }


}