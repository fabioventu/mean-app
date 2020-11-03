
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results: string[];
  private BASE_URL:string = '/api';
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.http.get('https://4200-b0259bac-e0e0-4d92-8343-529ad84f63b3.ws-eu01.gitpod.io/').subscribe(data => {
        // Read the result field from the JSON response.
        this.results = data['results'];
      });
    }
}
