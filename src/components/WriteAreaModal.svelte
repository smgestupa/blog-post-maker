<script lang="ts">
    import marked from 'marked';
    import { text } from '$stores/stores.ts'

    $: markdown = marked( `${ $text }` );
</script>

<div class="bg-black bg-opacity-50 w-full h-full top-0 left-0 block fixed z-10" id="overlay">
    <div class="bg-gray-300 w-7/12 p-2 rounded shadow-xl my-10 mx-auto">
        <div class="flex items-start content-evenly w-full">
            <div class="w-3/5 border-solid border-black " style="height: 85vh; border-width: 1px;">
                <textarea class="w-full h-full bg-gray-700 text-gray-200 resize-none" bind:value={ $text }></textarea>
            </div>

            <div class="w-3/5 border-solid border-black bg-white overflow-auto break-words" style="height: 85vh; border-width: 1px;">
                <div class="w-full px-8">{@html markdown}</div>
            </div>
        </div>
    </div>
</div>