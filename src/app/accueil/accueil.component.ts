import { Component, OnInit } from '@angular/core';
import { ApiDodleBrokerService } from '../api-dodle-broker.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  testAPI: string;

  constructor(private apiDodleBrokerService: ApiDodleBrokerService,
              private httpClient: HttpClient,
              private router: Router,
              private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.apiDodleBrokerService.test().subscribe((data) => {this.testAPI = data; });
  }

}
