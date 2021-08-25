import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/shared';
import { ApiError, ApiResponse, DashboardReport } from 'src/app/shared/entities';
import { UsersService } from 'src/app/shared/http-services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardReport: DashboardReport;

  constructor(private usersService: UsersService,
    private loadingService: LoadingService) { }

  ngOnInit(): void {
    const loaderId: string = 'fetch_report';
    this.loadingService.showLoader(loaderId);
    this.usersService.getReport().subscribe((res: ApiResponse) => {
      this.dashboardReport = res.data;
      this.loadingService.hideLoader(loaderId);
    }, (err: ApiError) => {
      this.loadingService.hideLoader(loaderId);
    })
  }

}
