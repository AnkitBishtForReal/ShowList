export type Show = {



    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;

    rating: {
        average: number | null;
    };
    image: {
        medium: string;
        original: string;
    };
    summary: null | string;


}



