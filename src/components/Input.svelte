<script lang="ts" context="module">
    export let url: string, key: string;
</script>

<script lang="ts">
    let showKey = false;
    const showAPIKey = () => showKey = !showKey;
</script>

<style>
    .input-label {
        @apply text-gray-900 pl-9 mb-2.5 text-left
        md:pl-3;
    }

    .input {
        @apply text-sm border-gray-300 pl-2 pr-8 py-2.5 w-96 border rounded-xl outline-none duration-300
        focus:border-gray-900
        md:w-120;
    }

    .eye-button {
        @apply absolute text-2xl pl-1.5 text-gray-400 -translate-x-9 translate-y-2.5 hover:text-gray-500 duration-300;
    }
</style>

<div class="pt-14 space-y-8">
    <!-- URL TABLE INPUT -->
    <div>
        <p class="input-label">
            Add the Supabase URL here:
        </p>
        <input bind:value={ url } type="text" id="i-url" name="i-url" placeholder="https://xxxxxxxxxxxxxxxxxxx.supabase.co" class="input">
    </div>
    <!-- /URL TABLE INPUT -->
    <!-- API KEY INPUT -->
    <div>
        <p class="input-label">
            Add your public API key here:
        </p>
        <input bind={ key } type={ showKey ? "text" : "password" } id="i-api" name="i-api" placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" class="input">
        <!-- INPUT BUTTON-->
        <button class="eye-button" on:click|preventDefault={ showAPIKey }>
            { #if !showKey }
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M396 512a112 112 0 1 0 224 0a112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3c7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176s176 78.8 176 176s-78.8 176-176 176z" fill="currentColor"/></svg>
            { :else }
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z" fill="currentColor"/><path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z" fill="currentColor"/></svg>
            { /if }
        </button>
        <!-- /INPUT BUTTON-->
    </div>
    <!-- /API KEY INPUT -->
</div>