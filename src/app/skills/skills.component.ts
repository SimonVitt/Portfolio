import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills = ['Django', 'Flask', 'Angular', 'TypeScript', 'Python', 'Google Cloud', 'Linux', 'Redis', 'Rest-Api', 'SQL', 'JavaScript', 'HTML', 'CSS', 'GIT'];
  skills_images = ['assets/img/icons/django-white.webp', 'assets/img/icons/flask-white.webp', 'assets/img/icons/angular.svg', 'assets/img/icons/typescript.svg', 'assets/img/icons/python-white.webp','assets/img/icons/google-cloud.webp', 'assets/img/icons/linux.webp', 'assets/img/icons/redis-white.webp', 'assets/img/icons/api.svg', 'assets/img/icons/sql.webp', 'assets/img/icons/javascript.svg', 'assets/img/icons/html.svg',
  'assets/img/icons/css.svg', 'assets/img/icons/git.svg'];
}
