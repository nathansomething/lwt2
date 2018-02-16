import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudyTextComponent } from './study-text/study-text.component';
import { UploadTextComponent } from './upload-text/upload-text.component';
import { ListDocumentsComponent } from './list-documents/list-documents.component';
import { ListWordsComponent } from './list-words/list-words.component';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DocumentService } from './document.service';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'upload', component: UploadTextComponent },
  { path: 'study/:name', component: StudyTextComponent },
  { path: 'documents', component: ListDocumentsComponent },
  { path: 'words', component: ListWordsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UploadTextComponent,
    StudyTextComponent,
    PageNotFoundComponent,
    ListDocumentsComponent,
    ListWordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
