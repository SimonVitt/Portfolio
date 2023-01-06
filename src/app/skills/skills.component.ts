import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'Firebase', 'GIT', 'CSS', 'Rest-Api', 'Scrum', 'Material design'];
  skills_images = ['assets/img/icons/angular.svg', 'assets/img/icons/typescript.svg', 'assets/img/icons/javascript.svg', 'assets/img/icons/html.svg',
  'assets/img/icons/firebase.svg', 'assets/img/icons/git.svg', 'assets/img/icons/css.svg', 'assets/img/icons/api.svg',
  'assets/img/icons/scrum.svg', 'assets/img/icons/materialdesign.svg'];
}
