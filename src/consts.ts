import type { Metadata, NavLink, Site } from '@types';

export const HOME: Metadata = {
    TITLE: 'Home',
    DESCRIPTION: 'Home Description',
};

export const SITE: Site = {
    TITLE: 'Astro Base Template',
};

export const LINKS: NavLink[] = [
    { TITLE: 'Home' },
    { TITLE: 'About' },
    { TITLE: 'Portfolio', SUBLINKS: [{ TITLE: 'Gallery' }, { TITLE: 'Blah' }] },
    { TITLE: 'Contact' },
];
