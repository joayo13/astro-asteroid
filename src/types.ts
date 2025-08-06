export type Metadata = {
    TITLE: string;
    DESCRIPTION: string;
};
export type Site = {
    TITLE: string;
};

export type NavLink = {
    TITLE: string;
    SUBLINKS?: NavLink[];
};
