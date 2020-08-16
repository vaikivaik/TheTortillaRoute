import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { BlogServiceService } from 'src/app/services/blog-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  arrPosts: Post[];

  constructor(
    private blogServiceService: BlogServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let city = '';

    // tslint:disable-next-line: deprecation
    this.activatedRoute.params.subscribe((params) => {
      city = params.destinationLocation;

      if (city !== undefined) {
        this.arrPosts = this.blogServiceService.getPostsByLocation(city);
      } else {
        this.arrPosts = this.blogServiceService.getAllPosts();
      }
    });
  }
  onEdit(pId): void {
    this.router.navigate(['/edit', pId]);
  }
}
