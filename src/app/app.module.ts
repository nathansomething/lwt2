import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Location } from '@angular/common'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { HomePageComponent } from './home-page/home-page.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { StudyTextComponent } from './study-text/study-text.component'
import { UploadTextComponent } from './upload-text/upload-text.component'
import { ListDocumentsComponent } from './list-documents/list-documents.component'
import { ListWordsComponent } from './list-words/list-words.component'
import { EditWordComponent } from './edit-word/edit-word.component'
import { InMemoryDataService } from './in-memory-data.service'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { DocumentService } from './services/document.service'
import { UserService } from './services/user.service'
import { WordService } from './services/word.service';

const appRoutes: Routes = [
  { path: 'user/:user_id', component: HomePageComponent },
  { path: 'user/:user_id/upload', component: UploadTextComponent },
  { path: 'user/:user_id/study/:document_id', component: StudyTextComponent },
  { path: 'user/:user_id/documents', component: ListDocumentsComponent },
  { path: 'user/:user_id/words', component: ListWordsComponent },
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
    ListWordsComponent,
    EditWordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [DocumentService, UserService, WordService, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
