import { InMemoryDbService } from 'angular-in-memory-web-api';
import Language from './enums/language.enum';
import Familiarity from './enums/familiarity.enum';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const words = [
      { id: 0, text: "Hello", language: Language.English, familiarity: Familiarity.Unseen, definition: "Definition Goes Here"},
      { id: 1, text: "this", language: Language.English, familiarity: Familiarity.Unseen, definition: "Definition Goes Here"},
      { id: 2, text: "is", language: Language.English, familiarity: Familiarity.Unseen, definition: "Definition Goes Here"},
      { id: 3, text: "a", language: Language.English, familiarity: Familiarity.Unseen, definition: "Definition Goes Here"},
      { id: 4, text: "test", language: Language.English, familiarity: Familiarity.Unseen, definition: "Definition Goes Here"},
      { id: 5, text: "another", language: Language.English, familiarity: Familiarity.Unseen, definition: "Definition Goes Here"},
      { id: 6, text: "это", language: Language.Russian, familiarity: Familiarity.Unseen, definition: "Definition Goes Here"},
      { id: 7, text: "тест", language: Language.Russian, familiarity: Familiarity.Unseen, definition: "Definition Goes Here"},
      { id: 8, text: ".", language: Language.English, familiarity: Familiarity.Ignored, isPunctuation: true},
      { id: 9, text: ",", language: Language.English, familiarity: Familiarity.Ignored, isPunctuation: true}
    ];
    const documents = [
      { document_id: 0, user_id: 0, name: "Test", createdOn: Date.now(), language: Language.English, words: [words[0],words[9],words[1],words[2],words[3],words[4],words[8] ] },
      { document_id: 1, user_id: 0, name: "Another Test", createdOn: Date.now(), language: Language.English, words: [words[0],words[9],words[1],words[2],words[5],words[4],words[8]]},
      { document_id: 2, user_id: 0, name: "тест", createdOn: Date.now(), language: Language.Russian, words: [words[6],words[7],words[8]]}
    ];
    const users = [
      { user_id: 0, username:"jshmoe", firstName:"Joe", lastName:"Shmoe", languages: [Language.English, Language.Russian], documents: documents}
    ]
    return {words,documents,users};
  }
}
