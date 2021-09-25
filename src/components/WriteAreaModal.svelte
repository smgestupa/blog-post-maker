<script type="ts">
    import { fade } from 'svelte/transition';
    import { showModal } from '$stores/stores.js';
    import marked from 'marked';
    let textArea: string = `# H1 heading

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

[Svelte](https://svelte.dev/)`;

    marked.setOptions({
        breaks: true
    });

    const modalClose = () => $showModal = !$showModal;

    $: markdown = marked( textArea );
</script>

<style>
    .modal {
        @apply bg-gray-300 w-9/12 p-2 rounded-lg shadow-xl mx-auto;
        margin-top: 4vh;
    }

    .modal-buttons {
        @apply float-right pt-1.5 pr-1.5;
    }

    .close-button {
        @apply text-white hidden font-semibold bg-red-700 px-4 py-2 rounded-lg duration-200
        md:inline
        hover:bg-red-600;
    }

    .close-button-icon {
        @apply text-3xl text-black font-semibold p-3 rounded-lg duration-200 -mt-5 -mr-5
        md:hidden
    }

    .close-button-icon svg {
        @apply text-red-700;
    }

    .modal-header {
        @apply pt-2.5 pl-5;
    }

    .post-title {
        @apply text-xl pb-2;
    }

    .title-input {
        @apply w-11/12 py-1.5 pl-2 pr-1 outline-none rounded-lg border border-black
        md:w-96;
    }

    .markdown {
        @apply flex w-full p-5;
    }

    .markdown-write {
        @apply w-3/5 flex items-center rounded-l-lg overflow-hidden;
    }

    .markdown-write textarea {
        @apply text-xl w-full pt-3 pb-2 pl-3 pr-2 text-gray-200 outline-none resize-none overflow-auto;
        height: 70vh;
        background-color: #36393f;
        color: white;
    }

    .markdown-preview {
        @apply w-3/5 rounded-r-lg overflow-hidden break-all;
    }

    .markdown-preview div {
        @apply w-full pt-3 pb-2 pl-3 pr-2 overflow-auto bg-white max-w-none;
        height: 70vh;
        background-color: white;
        color: #36393f;
    }
</style>

{ #if !$showModal }
    <div class="bg-black bg-opacity-50 w-full h-full top-0 left-0 fixed z-10" id="overlay" transition:fade={ { duration: 300 } }>
        <div class="modal">
            <!-- MODAL BUTTONS -->
            <div class="modal-buttons">
                <button class="close-button" id="close-modal" on:click|preventDefault={ modalClose }>Close editor</button>
                <button class="close-button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4l-66.1.3c-4.4 0-8-3.5-8-8c0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4l66-.3c4.4 0 8 3.5 8 8c0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2c0 4.4-3.6 8-8 8z" fill="currentColor"/></svg>
                </button>
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
                    <div class="prose prose-sm md:prose-lg">
                        { @html markdown }
                    </div>
                </div>
                <!-- /MARKDOWN PREVIEW AREA -->
            </div>
        </div>
    </div>
{ /if }
