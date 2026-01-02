const BASE_URL = "http://localhost:3000";

export interface Painting {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    painter: {
        name: string;
    };
}

const get = async <T>(url: string): Promise<T> => {
    try {
    const response = await fetch(`${BASE_URL}${url}`);
    if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error("Failed to fetch data:", error);
        throw error;
    }
};

const post = async <T>(url: string, data: T): Promise<T> => {
    try {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }
     catch (error) {
        console.error("Failed to post data:", error);
        throw error;
    }
};

export const getPaintings = async () =>
  get<Painting[]>("/paintings");

export const addPainting = async (data: Painting) =>
  post<Painting>("/paintings", data);