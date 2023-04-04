export interface GuestEssentials {
    name: string;
    email: string;
    state: string;
    city: string;
}

export interface GuestOpcionals {
    id?: number;
}


/* 'Partial' sirve para que todas las variables sean opcionales */
export type GuestModel  = Required<GuestEssentials> & Partial<GuestOpcionals>;
