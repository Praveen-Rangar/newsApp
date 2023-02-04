export interface Cast {
  id: number;
  name: string;
  country: {
    name: string;
  };
  birthday: Date;
  deathday: null;
  gender: string;
  image?: {
    medium: string;
    original: string;
  };
}
