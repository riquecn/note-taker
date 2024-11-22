import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent {
  @Input() notes: { title: string; content: string }[] = [];
  @Output() noteSelected = new EventEmitter<{ title: string; content: string }>();
  @Output() newNote = new EventEmitter<void>();

  selectNote(note: { title: string; content: string }) {
    this.noteSelected.emit(note);
  }

  createNewNote() {
    this.newNote.emit();
  }
}

