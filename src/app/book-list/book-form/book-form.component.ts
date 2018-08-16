import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder, 
    private booksService: BooksService,
              private router: Router) { }
              
  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      synopsis: '',
      photo: ''
    });
  }
  
  

onUploadFile(file: File) {
  this.fileIsUploading = true;
  this.booksService.uploadFile(file).then(
    (url: string) => {
      this.fileUrl = file.name;
      this.fileIsUploading = false;
      this.fileUploaded = true;
      console.log(file,url,this.fileUrl)
    }
  );
}

onSaveBook() {
  const title = this.bookForm.get('title').value;
  const author = this.bookForm.get('author').value;
  const synopsis = this.bookForm.get('synopsis').value;
  const newBook = new Book(title, author);
  newBook.synopsis = synopsis;
  newBook.photo = this.fileUrl;
    console.log(this.fileUrl, newBook.photo);
  
  this.booksService.createNewBook(newBook);
  this.router.navigate(['/books']);
}

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }


}


