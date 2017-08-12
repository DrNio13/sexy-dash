import {Component} from '@angular/core';

interface DragItem {
  id: number;
  active: boolean;
  description?: string;
}

@Component({
  selector: 'drag-n-drop',
  templateUrl: './drag-n-drop.component.html',
  styleUrls: ['./drag-n-drop.component.scss']
})

export class DragNDrop {
  activeArea: boolean;
  dragItems: DragItem[] = [{id:1, active: false, description: 'Hello world!'}, {id:2, active: false, description: 'Hello cosmos!'}, {id:3, active: false, description: 'Hello universe!'}];
  dragEl: DragItem = null;
  grid: number = this.dragItems.length;
  activeEl: boolean;

  onDragStart(event) {
    if (!event) return;

    const mimeTypes = 'text/html';
    const payload = event.target.innerHTML;
    this.dragEl = payload;
    this.activeEl = true;

    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData(mimeTypes, payload);

  }

  onDragLeave(event) {
    this.activeEl = false;

  }

  onDrop(event) {
    console.log(event.dataTransfer.getData('text/html'));
    event.target.innerHTML = event.dataTransfer.getData('text/html');
  }

  onDragEnd(event) {
    console.log(event);
  }

  onDragEnter(e) {
    e.preventDefault();
    this.activeArea = true;
  }

  onDragOver(e) {
    e.preventDefault();
  }

  dragOver(event) {
    if (!event) return;
    event.dataTransfer.dropEffect = 'move';
  }

  allowDrop(event) {
    this.activeArea = true;

  }
}
