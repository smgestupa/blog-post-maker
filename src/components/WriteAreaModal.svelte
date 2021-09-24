<script type="ts">
    import { fade } from 'svelte/transition';
    import { showModal } from '$stores/stores.js';
    import marked from 'marked';
    let textArea: string = ``;

    marked.setOptions({
        breaks: true
    });

    const modalClose = () => $showModal = !$showModal;

    $: markdown = marked( textArea );
</script>

<style>
    .modal {
        @apply bg-gray-300 w-9/12 p-2 rounded-lg shadow-xl my-10 mx-auto;
    }

    .modal-buttons {
        @apply float-right pt-2 pr-5;
    }

    .close-button {
        @apply text-white font-semibold bg-red-700 px-4 py-2 rounded-lg hover:bg-red-600 duration-200;
    }

    .modal-header {
        @apply pt-2.5 pl-5;
    }

    .post-title {
        @apply text-xl pb-2;
    }

    .title-input {
        @apply w-48 md:w-96 py-1.5 pl-2 pr-1 outline-none rounded-lg border border-black;
    }

    .markdown {
        @apply flex items-start content-evenly w-full p-5;
    }

    .markdown-write {
        @apply w-3/5 border-solid border-black;
    }

    .markdown-write textarea {
        @apply text-xl w-full h-full pt-3 pb-2 pl-3 pr-2 rounded-l-lg border-black bg-gray-700 text-gray-200 outline-none resize-none;
        height: 75vh;
        border-width: 1px;
    }

    .markdown-preview {
        @apply w-3/5 rounded-r-lg border-solid border-black bg-white overflow-auto break-all;
        height: 75vh;
        border-width: 1px;
    }

    .markdown-preview div {
        @apply w-full pt-3 pb-2 pl-3 pr-2;
    }
</style>

{ #if $showModal }
    <div class="bg-black bg-opacity-50 w-full h-full top-0 left-0 absolute z-10" id="overlay" transition:fade={ { duration: 300 } }>
        <div class="modal">
            <!-- MODAL BUTTONS -->
            <div class="modal-buttons">
                <button class="close-button" id="close-modal" on:click|preventDefault={ modalClose }>Close Editor</button>
            </div>
            <!-- /MODAL BUTTONS -->
            <!-- MODAL HEADER -->
            <div class="modal-header">
                <p class="post-title">Post Title</p>
                <input class="title-input" type="text" placeholder="Your post title">
            </div>
            <!-- /MODAL HEADER -->
            <div class="markdown">
                <!-- MARKDOWN WRITE AREA -->
                <div class="markdown-write">
                    <textarea type='text' bind:value={ textArea } placeholder='The content of your post'></textarea>
                </div>
                <!-- /MARKDOWN WRITE AREA -->
                <!-- MARKDOWN PREVIEW AREA -->
                <div class="markdown-preview">
                    <div class="prose prose-lg max-w-none">
                        { @html markdown }
                    </div>
                </div>
                <!-- /MARKDOWN PREVIEW AREA -->
            </div>
        </div>
    </div>
{ /if }
