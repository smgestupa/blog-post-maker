<script lang="ts">
    import { showModal, postTitle, postContent, supabaseUrl, supabaseKey, editMode, showNotifModal, notifType, notifMessage } from '$stores/stores.js';
    import WriteAreaModal from '$components/WriteEditAreaModal.svelte';
    import NotificationsModal from '$components/NotificationsModal.svelte';
    let loading: boolean = false;

    const openModal = () => $showModal = !$showModal;
    const sendToSupabase = async () => {
        let statusCode;
        loading = true;
        $showNotifModal = false;
        if ( !$editMode ) {
            const req = await fetch( `${ $supabaseUrl }/rest/v1/posts`, {
                method: 'POST',
                headers: {
                    'apikey': $supabaseKey, // REMOVE THE 1, THIS IS JUST FOR DEBUGGING AND TESTING OF AWAIT BLOCKS
                    'Authorization': 'Bearer ' + $supabaseKey,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=representation',
                },
                body: JSON.stringify( { 'title': $postTitle, 'content': $postContent } )
            } );

            statusCode = req.status;
        } else {
            const req = await fetch( `${ $supabaseUrl }/rest/v1/posts?title=eq.${ $postTitle }`, {
                method: 'PATCH',
                headers: {
                    'apikey': $supabaseKey, // REMOVE THE 1, THIS IS JUST FOR DEBUGGING AND TESTING OF AWAIT BLOCKS
                    'Authorization': 'Bearer ' + $supabaseKey,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=representation',
                },
                body: JSON.stringify( { 'content': $postContent } )
            } );

            statusCode = req.status;
        }
        loading = false;

        $showNotifModal = true;
        ( $notifType == 404 || $notifType == 401 ) ? $notifType = 'warning' : $notifType = 'success';
        if ( statusCode == 404 ) $notifMessage = `The Supabase URL you have given doesn't exist or the post title is incorrect`;
            else if ( statusCode == 401 ) $notifMessage = `You don't have permission to communicate with the Supabase URL`;
            else if ( statusCode == 201 ) $notifMessage = `Your post has been successfully created`;
            else if ( statusCode == 200 ) $notifMessage = `Your post has been successfully edited`;
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
    <div class="pt-16 grid grid-cols-1 md:grid-cols-2 content-center items-center space-y-3 md:space-y-0 md:space-x-3">
        { #if !loading }
            <!-- BUTTON FOR CREATING POSTS -->
            <button class="post-button" on:click|preventDefault={ openModal }>
                { $editMode ? 'Edit a post' : 'Create a post' }
            </button>
            <!-- /BUTTON FOR CREATING POSTS -->
            <!-- BUTTON FOR SENDING TO SUPABASE -->
            <button class="send-button" on:click|preventDefault={ sendToSupabase }>
                Send to Supabase
            </button>
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
{ #if $showNotifModal }
    <NotificationsModal/>
{ /if }
<!-- /NOTIFICATIONS MODAL -->