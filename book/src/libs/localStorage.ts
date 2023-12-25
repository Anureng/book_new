// utils/localStorage.ts

// Define the interface for the Book structure
interface Book {
    author: string;
    category: string;
    createdAt: string;
    description: string;
    id: number;
    image: string;
    name: string;
    price: number;
    reviews: any[]; // Assuming reviews will be an array of any type
    type: string;
    updatedAt: string;
}

// Function to save an array of Book objects to local storage
export const saveBooksToLocalStorage = (key: string, data: Book[]): void => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch (error) {
        console.error('Error saving to local storage:', error);
    }
};

// Function to retrieve an array of Book objects from local storage
export const getBooksFromLocalStorage = (key: string): Book[] | null => {
    try {
        const serializedData = localStorage.getItem(key);
        if (serializedData === null) {
            return [];
        }
        return JSON.parse(serializedData) as Book[];
    } catch (error) {
        console.error('Error getting data from local storage:', error);
        return null;
    }
};
