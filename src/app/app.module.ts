import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionContentComponent } from './components/question-container/question-content/question-content.component';
import { QuestionFooterComponent } from './components/question-container/question-footer/question-footer.component';
import { QuestionContainerComponent } from './components/question-container/question-container.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionContentComponent,
    QuestionFooterComponent,
    QuestionContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
