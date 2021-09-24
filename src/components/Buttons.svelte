<script lang="ts">
    import { showModal } from '$stores/stores.js';
    import WriteAreaModal from '$components/WriteAreaModal.svelte';

    const openModal = () => {
        $showModal = !$showModal;
    }
</script>

<style>
    .post-button {
        @apply text-white font-semibold bg-blue-600 rounded-md p-3 duration-300
        hover:bg-blue-800;
    }

    .send-button {
        @apply text-white font-semibold bg-green-600 rounded-md p-3 duration-300
        hover:bg-green-800;
    }
</style>

<div class="flex justify-center">
    <div class="pt-14 grid grid-cols-1 md:grid-cols-2 content-center items-center space-y-3 md:space-y-0 md:space-x-3">
        <!-- BUTTON FOR CREATING POSTS -->
        <button class="post-button" href="#" id="post-btn" on:click|preventDefault={ openModal }>
            Create a post
        </button>
        <!-- /BUTTON FOR CREATING POSTS -->
        <!-- BUTTON FOR SENDING TO SUPABASE -->
        <a class="send-button" href="#">
            Send the post
            <!-- /BUTTON FOR SENDING TO SUPABASE -->
        </a>
    </div>
</div>

<!-- WRITE AREA MODAL -->
<WriteAreaModal modalOpen={ showModal } />
<!-- /WRITE AREA MODAL -->