<style>
    .link {
        @apply text-gray-900 border-b-2 border-gray-200 hover:border-gray-900 duration-500;
    }

    .input-label {
        @apply text-gray-900 pl-3 pb-2.5 text-left;
    }

    .input {
        @apply text-sm border-gray-300 pl-10 pr-1 py-2.5 rounded-xl outline-none focus:border-gray-900 duration-300;
    }
</style>

<div class="flex justify-center text-center pt-8">
    <div>
        <!-- WEBSITE HEADER -->
        <h1 class="text-6xl font-semibold" style="line-height: 1.25">
            Blog Post Maker
        </h1>
        <h3 class="pt-5 text-md">Make a blog post with <a href="https://svelte.dev/" class="link">Svelte</a>, <a
                href="https://mdsvex.com/" class="link">Mdsvex</a>, and <a href="https://supabase.io/" class="link">Supabase</a>!</h3>
        <!-- /WEBSITE HEADER -->
        <div class="pt-14 space-y-8">
            <!-- URL TABLE INPUT -->
            <div>
                <p class="input-label">Add the Supabase URL here:</p>
                <div class="text-2xl text-gray-500 absolute translate-y-2.5 translate-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z" fill="currentColor"/></svg>
                </div>
                <input type="text" id="i-url" name="i-url" placeholder="https://ntmfvokipcrzuynlmcqo.supabase.co" class="input" style="border-width: 1px; width: 30rem;">
            </div>
            <!-- /URL TABLE INPUT -->
            <!-- API KEY INPUT -->
            <div>
                <p class="input-label">Add your public API key here:</p>
                <div class="text-2xl text-gray-500 absolute translate-y-2.5 translate-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647l.646-.647a.5.5 0 0 1 .708 0l.646.647l.646-.647a.5.5 0 0 1 .708 0l.646.647l.793-.793l-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/><path d="M4 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/></g></svg>
                </div>
                <input type="text" id="i-api" name="i-api" class="input" style="border-width: 1px; width: 30rem;">
            </div>
            <!-- /API KEY INPUT -->
        </div>
    </div>
</div>