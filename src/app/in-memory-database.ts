import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            {id: 1, name: 'lazer', description: 'Pagamento de conta para casa'},
            {id: 2, name: 'Saúde', description: 'Remedio para gripe'},
            {id: 3, name: 'Salário', description: 'Trabalhos como freelancer'}
        ];
        return { categories };
    }
}
