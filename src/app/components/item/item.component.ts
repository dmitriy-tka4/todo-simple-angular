import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemInreface } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: ItemInreface;
  @Output() onRemove = new EventEmitter();

  editable: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  save(value: string) {
    this.editable = false;
    this.item.description = value;
  }
}
