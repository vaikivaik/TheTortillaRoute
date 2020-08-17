import { Component } from '@angular/core';
import { BlogServiceService } from '../app/services/blog-service.service';
import { Router } from '@angular/router';
import { Location } from '../app/models/location.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arrLocations: Location[];
  search: string;

  constructor(
    private router: Router,
    private blogServiceService: BlogServiceService
  ) {
    this.search = '';
  }

  ngOnInit(): void {
    this.arrLocations = this.blogServiceService.getAllLocations();
  }

  selectLocation($event): void {
    this.router.navigate(['/cities', $event.target.value]);
  }
  findSearch(): void {
    this.router.navigate(['/search', this.search]);
  }
}
