import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.scss'],
})
export class IssueBookComponent implements OnInit {
  @Input() bookName;
  error = '';
  issueForm: FormGroup;
  @Output() closePopup: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private localstorageService: LocalstorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.issueForm = this.fb.group({
      bookname: ['', Validators.required],
      endDate: ['', Validators.required],
    });

    this.issueForm.get('bookname').setValue(this.bookName.name);
  }

  issueBook() {
    if (!this.issueForm.controls.endDate.value) {
      this.error = 'Please select End Date';
      setTimeout(() => {
        this.error = '';
      }, 2000);
      return;
    }

    this.error = '';
    this.localstorageService.addBooks({
      ...this.bookName,
      end: this.issueForm.controls.endDate.value,
    });

    this.closePopup.emit();
    this.router.navigate(['/main/history']);
  }

  close() {
    this.closePopup.emit();
  }
}
