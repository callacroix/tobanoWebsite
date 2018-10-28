import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainMenuComponent} from './ui/mainmenu/mainmenu.component';
import {HomeComponent} from './home/home.component';
import {ServiceComponent} from './service/service.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {FeatureComponent} from './feature/feature.component';
import {PriceComponent} from './price/price.component';
import {TeamComponent} from './team/team.component';
import {FaqComponent} from './faq/faq.component';
import {PartnershipComponent} from './partnership/partnership.component';
import {BlogComponent} from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    ServiceComponent,
    FeedbackComponent,
    FeatureComponent,
    PriceComponent,
    TeamComponent,
    FaqComponent,
    PartnershipComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
