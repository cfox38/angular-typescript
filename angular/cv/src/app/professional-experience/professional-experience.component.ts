import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.css']
})
export class ProfessionalExperienceComponent implements OnInit {

  jobs: any[] = [
{
	title: 'Assistant Manager Mail Production',
	company: 'Western & Southern Financial Group',
	description: 'Managed four associates and vendor operation and strategic projects.' 
}


]

constructor() {}

ngOnInit () {}
}

