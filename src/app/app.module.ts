import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { TimelineComponent } from './timeline/timeline.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from './environments/environment';
import { TabComponent } from './tab/tab.component';
import { MatTabsModule } from '@angular/material/tabs'
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
// import { ProgressComponent } from './progress/progress.component';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ProgressService } from '../app/shared/progress.service';



@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    TimelineComponent,
    TabComponent,
    // ProgressComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatMenuModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    ProgressService,   
     

    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    //   // Register the ServiceWorker as soon as the app is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
