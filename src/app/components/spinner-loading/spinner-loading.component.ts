import { Component, OnInit } from '@angular/core';
import { BehaviorSubjectsService } from 'src/app/services/behavior-subjects.service';

@Component({
  selector: 'app-spinner-loading',
  templateUrl: './spinner-loading.component.html',
  styleUrls: ['./spinner-loading.component.scss']
})
export class SpinnerLoadingComponent implements OnInit {

  isLoading:boolean;
  constructor(private behavoirSubjects:BehaviorSubjectsService){
    this.behavoirSubjects.getIsLoadingRequest().subscribe(value=>this.isLoading = value);
  }

  ngOnInit(): void {}
}
