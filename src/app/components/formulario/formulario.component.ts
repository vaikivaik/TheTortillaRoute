import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogServiceService } from 'src/app/services/blog-service.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Location } from 'src/app/models/location.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  addForm: FormGroup;

  arrLocations: Location[];

  constructor(
    private blogServiceService: BlogServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.addForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      text: new FormControl('', [
        Validators.required,
        Validators.maxLength(600),
      ]),
      address: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      location: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
    });
  }

  ngOnInit(): void {
    this.arrLocations = this.blogServiceService.getAllLocations();

    this.activatedRoute.params.subscribe((params) => {
      const postId = params.postId;

      if (postId !== undefined) {
        const postUpdate = this.blogServiceService.getPostById(Number(postId));
        this.addForm = new FormGroup({
          id: new FormControl(postUpdate.id, []),
          title: new FormControl(postUpdate.title, [Validators.required]),
          text: new FormControl(postUpdate.text, [
            Validators.required,
            Validators.maxLength(600),
          ]),
          address: new FormControl(postUpdate.address, [Validators.required]),
          image: new FormControl(postUpdate.image, [Validators.required]),
          date: new FormControl(postUpdate.date, [Validators.required]),
          location: new FormControl(postUpdate.location, [
            Validators.required,
            Validators.maxLength(10),
          ]),
        });
      }
    });
  }

  submitPost(): void {
    // console.log(this.addForm.value);
    let post: string = '';
    if (this.addForm.value.id) {
      // Update
      post = this.blogServiceService.updatePost(this.addForm.value);
      alert('Post updated');
    } else {
      // Add new
      post = this.blogServiceService.addPost(this.addForm.value);
      alert('Post added');
    }
    console.log(post);
    // Luego de addPost, redireccionar a '/home'
    this.saveIntoLocalStorage();
    this.router.navigate(['/blog']);
  }

  saveIntoLocalStorage(): void {
    let newPost = JSON.stringify(this.addForm.value);
    localStorage.setItem('newPost', newPost);
  }
  //HASTA ACÁ LLEGUÉ!
}
