import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TabComponent} from './tab/tab.component';

const routes: Routes = [
  { path: '', component: ChatroomComponent },
  { path: 'timeline', component: TimelineComponent},
  { path: 'tab', component: TabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
