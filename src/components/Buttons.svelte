<script lang="ts">
    import { showModal, showNotifModal, postTitle, postContent, supabaseUrl, supabaseKey, editMode } from '$stores/stores.js';
    import WriteAreaModal from '$components/WriteEditAreaModal.svelte';
    import NotificationsModal from '$components/NotificationsModal.svelte';
    let loading: boolean = false;

    const openModal = () => $showModal = !$showModal;
    const sendToSupabase = async () => {
        if ( $supabaseUrl.trim() === '' && $supabaseKey.trim() === '' ) {
            loading = true;
            $showNotifModal = true;
        }

        const req =  await fetch( $supabaseUrl, {
            method: 'POST',
            headers: {
                'apikey': $supabaseKey, // REMOVE THE 1, THIS IS JUST FOR DEBUGGING AND TESTING OF AWAIT BLOCKS
                'Authorization': 'Bearer ' + $supabaseKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { 'title': $postTitle, 'content': $postContent } )
        } )

        setTimeout( () => {
            loading = false;
            $showNotifModal = false;
        }, 2000 );
    }
</script>

<style>
    .post-button {
        @apply text-white font-semibold bg-blue-700 rounded-md p-3 duration-300
        hover:bg-blue-600;
    }

    .send-button {
        @apply text-white font-semibold bg-green-800 rounded-md p-3 px-6 duration-300
        hover:bg-green-700;
    }
</style>

<div class="flex justify-center">
    <div class="pt-14 grid grid-cols-1 md:grid-cols-2 content-center items-center space-y-3 md:space-y-0 md:space-x-3">
        { #if !loading }
            <!-- BUTTON FOR CREATING POSTS -->
            <button class="post-button" id="post-btn" on:click|preventDefault={ openModal }>
                { $editMode ? 'Edit a post' : 'Create a post' }
            </button>
            <!-- /BUTTON FOR CREATING POSTS -->
            <!-- BUTTON FOR SENDING TO SUPABASE -->
            <a class="send-button"  on:click|preventDefault={ sendToSupabase }>
                Send to Supabase
            </a>
            <!-- /BUTTON FOR SENDING TO SUPABASE -->
        { :else }
            Loading...
        { /if }
    </div>
</div>


<!-- WRITE AREA MODAL -->
<WriteAreaModal />
<!-- /WRITE AREA MODAL -->

<!-- NOTIFICATIONS MODAL -->
<NotificationsModal/>
<!-- /NOTIFICATIONS MODAL -->