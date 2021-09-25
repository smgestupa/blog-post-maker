import { writable } from 'svelte/store';

const showModal = writable( false );
const showNotifModal = writable( false );

export { showModal, showNotifModal };