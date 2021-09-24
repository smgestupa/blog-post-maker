<script lang="ts">
    import marked from 'marked';
    let textArea = `Please write anything you want here!`;

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
        @apply bg-gray-300 w-7/12 p-2 rounded shadow-xl my-10 mx-auto;
    }

    .markdown-write {
        @apply w-3/5 border-solid border-black;
    }

    .markdown-write textarea {
        @apply w-full h-full pt-1 px-2 border-black bg-gray-700 text-gray-200 resize-none;
        height: 85vh;
        border-width: 1px;
    }

    .markdown-preview {
        @apply w-3/5 border-solid border-black bg-white overflow-auto break-words;
        height: 85vh;
        border-width: 1px;
    }

    .markdown-preview div {
        @apply w-full pt-1 px-2;
    }
</style>

<div class="modal" id="overlay">
    <div class="inner-modal">
        <div class="flex items-start content-evenly w-full">
            <div class="markdown-write">
                <textarea bind:value={ textArea }></textarea>
            </div>

            <div class="markdown-preview">
                <div>{ @html markdown }</div>
            </div>
        </div>
    </div>
</div>