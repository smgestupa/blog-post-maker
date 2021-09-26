import { writable } from 'svelte/store';

const showModal = writable( false );
const showNotifModal = writable( false );
const postTitle = writable( `` );
const postContent = writable( `# H1 heading

## H2 heading

### H3 heading

--------

**bold text**

*italicized text*

--------

1. First item
2. Second item
3. Third item

- First item
- Second item
- Third item

[Svelte](https://svelte.dev/)` );
const supabaseUrl = writable( `` );
const supabaseKey = writable( `` );
const editMode = writable( false )

export { showModal, showNotifModal, postTitle, postContent, supabaseUrl, supabaseKey, editMode };