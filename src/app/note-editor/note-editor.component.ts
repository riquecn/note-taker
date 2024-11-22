import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css'],
})
export class NoteEditorComponent {
  @Input() selectedNote: { title: string; content: string } | null = null;
  @Output() noteSaved = new EventEmitter<{ title: string; content: string }>();
  @Output() editorClosed = new EventEmitter<void>();

  note = { title: '', content: '' };

  ngOnChanges() {
    if (this.selectedNote) {
      this.note = { ...this.selectedNote };
    } else {
      this.note = { title: '', content: '' };
    }
  }

  saveNote() {
    this.noteSaved.emit(this.note);
  }

  cancel() {
    this.editorClosed.emit();
  }
}

