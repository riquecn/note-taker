import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, NoteListComponent, NoteEditorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  notes: { title: string; content: string }[] = [];
  currentNote: { title: string; content: string } | null = null;
  isEditing = false;

  createNote() {
    this.currentNote = null;
    this.isEditing = true;
  }

  editNote(note: { title: string; content: string }) {
    this.currentNote = note;
    this.isEditing = true;
  }

  saveNote(note: { title: string; content: string }) {
    if (this.currentNote) {
      const index = this.notes.indexOf(this.currentNote);
      this.notes[index] = note;
    } else {
      this.notes.push(note);
    }
    this.isEditing = false;
  }
}


