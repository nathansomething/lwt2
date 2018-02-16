import { InMemoryDbService } from 'angular-in-memory-web-api';
import Language from './language.enum';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const words = [
      { id: 0, name: "Hello", language: Language.English},
      { id: 1, name: "this", language: Language.English},
      { id: 2, name: "is", language: Language.English},
      { id: 3, name: "a", language: Language.English},
      { id: 4, name: "test", language: Language.English},
      { id: 5, name: "another", language: Language.English},
      { id: 6, name: "это", language: Language.Russian},
      { id: 7, name: "тест", language: Language.Russian}
    ];
    const documents = [
      { id: 0, name: "Test", createdOn: Date.now(), language: Language.English, words: [0,1,2,3,4] },
      { id: 1, name: "Another Test", createdOn: Date.now(), language: Language.English, words: [0,1,2,5,4]},
      { id: 2, name: "тест", createdOn: Date.now(), language: Language.Russian, words: [6,7]}
    ]
    return {words,documents};
  }
}
