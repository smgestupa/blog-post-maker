<script lang="ts">
    import { fly, fade } from 'svelte/transition';
    import { showNotifModal, notifType, notifMessage } from "$stores/stores";

    const closeNotifModal = () => $showNotifModal = !$showNotifModal;
</script>

<style>
    .modal {
        @apply top-0 absolute
        md:left-1/4 md:right-1/4 !important;
        left: 5vw;
        right: 5vw;
    }

    .modal-warning {
        @apply flex bg-red-200 p-2 w-full rounded-md shadow-xl mx-auto translate-y-3
        md:w-6/12;
        left: 5vw;
        right: 5vw;
    }

    .modal-warning svg {
        @apply text-red-700;
    }

    .modal-messages-warning {
        @apply text-red-700 overflow-hidden -space-y-1;
    }

    .modal-success {
        @apply flex bg-green-200 p-2 w-full rounded-md shadow-xl mx-auto translate-y-3
        md:w-6/12;
    }

    .modal-success svg {
        @apply text-green-700;
    }

    .modal-messages-success {
        @apply text-green-700 overflow-hidden -space-y-1;
    }
</style>


<div class="modal">
    <div class="{ $notifType === 'warning' ? 'modal-warning' : 'modal-success' }" in:fly={ { y: -50, duration: 300 } } out:fade={ { duration: 300 } }>
        <!-- CLOSE MODAL BUTTON -->
        <div class="absolute right-0 pr-2 -translate-y-0.5">
            <button class="text-lg" on:click|preventDefault={ closeNotifModal }>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M15 15L9 9m6 0l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/></g></svg>
            </button>
        </div>
        <!-- /CLOSE MODAL BUTTON -->
        <!-- NOTIFICATION MODAL ICON -->
        <div class="text-5xl pl-2 pr-6">
            { #if $notifType === 'warning' }
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 0 1 0-96a48.01 48.01 0 0 1 0 96z" fill="currentColor"/></svg>
            { :else }
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path class="clr-i-solid clr-i-solid-path-1" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2zm10.45 10.63L15.31 25.76L7.55 18a1.4 1.4 0 0 1 2-2l5.78 5.78l11.14-11.13a1.4 1.4 0 1 1 2 2z" fill="currentColor"/></svg>
            { /if }
        </div>
        <!-- /NOTIFICATION MODAL ICON -->
        <!-- NOTIFICATION MODAL MESSAGE -->
        <div class="{ $notifType === 'warning' ? 'modal-messages-warning' : 'modal-messages-success' }">
            <!-- NOTIFICATION MODAL TITLE -->
            <div class="text-lg font-bold">
                <h1>{ $notifType === 'warning' ? 'Something went wrong!' : 'Success!' }</h1>
            </div>
            <!-- /NOTIFICATION MODAL TITLE -->
            <div class="text-md pr-2.5">
                <h3>{ $notifMessage }</h3>
            </div>
        </div>
        <!-- /NOTIFICATION MODAL MESSAGE -->
    </div>
</div>