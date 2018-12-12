import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories = [
            {id: 1, name: 'lazer', description: 'Pagamento de conta para casa'},
            {id: 2, name: 'Saúde', description: 'Remedio para gripe'},
            {id: 3, name: 'Salário', description: 'Trabalhos como freelancer'}
        ];
        return { categories };
    }
}
