<script type="ts">
    import marked from 'marked';
    let textArea = ``;

    marked.setOptions({
        breaks: true
    });

    $: markdown = marked( textArea );
</script>

<style>
    .modal {
        @apply bg-black bg-opacity-50 w-full h-full top-0 left-0 block fixed z-10;
    }

    .inner-modal {
        @apply bg-gray-300 w-9/12 p-2 rounded shadow-xl my-10 mx-auto;
    }

    .markdown-write {
        @apply w-3/5 border-solid border-black;
    }

    .markdown-write textarea {
        @apply text-xl w-full h-full py-2 px-2 border-black bg-gray-700 text-gray-200 outline-none resize-none;
        height: 85vh;
        border-width: 1px;
    }

    .markdown-preview {
        @apply w-3/5 border-solid border-black bg-white overflow-auto break-all;
        height: 85vh;
        border-width: 1px;
    }

    .markdown-preview div {
        @apply w-full py-2 px-2 pl-5;
    }
</style>

<div class="modal" id="overlay">
    <div class="inner-modal">
        <div class="flex items-start content-evenly w-full">
            <div class="markdown-write">
                <textarea type='text' bind:value={ textArea } placeholder='Please write the content of your post here...'></textarea>
            </div>

            <div class="markdown-preview">
                <div class="prose prose-lg max-w-none">
                    { @html markdown }
                </div>
            </div>
        </div>
    </div>
</div>