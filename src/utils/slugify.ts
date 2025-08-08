export default function slugify(text: string) {
    if (text.toLowerCase() === 'home') {
        return '/';
    }
    return '/' + text.toLowerCase().replace(/\s+/g, '-');
}
