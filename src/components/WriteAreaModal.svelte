<script lang="ts">
    import { text } from '$stores/stores.ts';

    console.log( $text );
</script>

<style>
</style>

<div class="flex hidden justify-center items-center bg-black bg-opacity-50 absolute inset-0" id="overlay">
    <div class="bg-gray-200 max-w-sm py-2 px-3 rounded shadow-xl">
        <!-- MODAL HEADER -->
        <div class="flex justify-between items-center">
            <h4 class="text-lg font-bold">Confirm Delete?</h4>
            <svg class="h-5 w-5" id="close-modal" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zm3.707 8.707a1 1 0 0 0-1.414-1.414L12 10.586L9.707 8.293a1 1 0 1 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293z" fill="currentColor"/></g></svg>
        </div>
        <!-- /MODAL HEADER -->
        <!-- MODAL DESCRIPTION -->
        <div class="mt-2 text-sm">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, architecto at autem dolor earum est eum fugiat hic mollitia officia, placeat sit unde veniam. Alias at beatae quibusdam saepe totam!</p>
        </div>
        <!-- /MODAL DESCRIPTION -->
        <!-- MODAL BUTTONS -->
        <div class="mt-3 flex justify-end space-x-3">
            <button class="px-3 py-1 rounded hover:bg-red-300 hover:bg-opacity-50 hover:text-red-900">Cancel</button>
            <button class="px-3 py-1 bg-red-800 text-gray-200 rounded hover:bg-red-600">Delete</button>
        </div>
        <!-- /MODAL BUTTONS -->
    </div>
</div>