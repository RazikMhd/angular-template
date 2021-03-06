import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-template';

  constructor(private permissionsService: NgxPermissionsService) {}

  ngOnInit(): void {
    const perm = ["SAMPLE3"];

    this.permissionsService.loadPermissions(perm);
  }

}
