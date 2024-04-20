import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todolist-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './todolist-page.component.html',
  styleUrl: './todolist-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodolistPageComponent {

  id!: string
  title!: string

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('todoId') ?? 'default'
    if (this.route.snapshot.queryParamMap.get('title')) {
      this.title = this.route.snapshot.queryParamMap.get('title') ?? ''
    }
  }

  navigateToDeck() {
    this.router.navigate(['/todolist-deck'], { queryParams: { returned: 'true' } })
  }

}
