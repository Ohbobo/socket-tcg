export class DataServices<T> {
    async fetchCardsData(url: string): Promise<T> {
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error(`Erreur lors de la récupération des données: ${response.status}`);
            }
            const data = await response.json();
            return data as T;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des données: ${error}`);
        }
    }
}

