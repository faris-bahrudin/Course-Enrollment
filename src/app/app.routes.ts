import {Routes} from '@angular/router';
import {MainComponent} from './main/main.layout';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ApprenticeListPage} from './academy/apprentice-list.page';
import {CohortListPage} from './academy/cohort-list.page';
import {ApprenticeDetailPage} from './academy/apprentice-detail.page';
import {CohortDetailPage} from './academy/cohort-detail.page';
import {StudentListPage} from './course-enrollment/student-list.page';
import {LecturerListPage} from './course-enrollment/lecturer-list.page';
import {CourseListPage} from './course-enrollment/course-list.page';

export const appRoutes: Routes = [{
  path: '', component: MainComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'academy/cohorts/list', component: CohortListPage},
    {path: 'academy/cohorts/:code', component: CohortDetailPage},
    {path: 'academy/apprentices/list', component: ApprenticeListPage},
    {path: 'academy/apprentices/:code', component: ApprenticeDetailPage},
    {path: 'course enrollment/studentlist', component: StudentListPage},
    {path: 'course enrollment/lecturerlist', component: LecturerListPage},
    {path: 'course enrollment/courselist', component: CourseListPage},
  ]
}];
