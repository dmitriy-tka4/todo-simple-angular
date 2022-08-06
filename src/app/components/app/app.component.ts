import { Component, OnInit } from '@angular/core';
import { ItemInreface } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-simple-angular';
  filter: string = 'all';
  sourceItems: ItemInreface[] = [
    {
      id: 1,
      description: 'Create project',
      isDone: true
    },
    {
      id: 2,
      description: 'Do job',
      isDone: false
    },
    {
      id: 3,
      description: 'Купить продукты',
      isDone: false
    },
    {
      id: 4,
      description: 'Выгулять собаку',
      isDone: true
    },
    {
      id: 5,
      description: 'Тренировка',
      isDone: false
    },
  ];

  get items(): ItemInreface[] {
    if (this.filter === 'all') {
      return this.sourceItems;
    }

    if (this.filter === 'done') {
      return this.sourceItems.filter((item: ItemInreface) => {
        return item.isDone === true;
      });
    }

    return this.sourceItems.filter((item: ItemInreface) => {
      return item.isDone === false;
    });
  }

  ngOnInit(): void {
    console.log('init');
  }

  add(description: string) {
    const newItem = {
      id: Date.now(), // test id
      description,
      isDone: false
    } as ItemInreface;

    this.sourceItems.push(newItem);
  }

  remove(item: ItemInreface) {
    const itemIndex = this.sourceItems.indexOf(item);

    this.sourceItems.splice(itemIndex, 1);
  }
}
