<script lang="ts">
    import Header from '$components/Header.svelte';
    import Input from '$components/Input.svelte';
    import Buttons from '$components/Buttons.svelte';

    // console.log( url );
</script>

<div class="flex justify-center text-center pt-8 px-3">
    <div>
        <!-- WEBSITE HEADER -->
        <Header />
        <!-- /WEBSITE HEADER -->
        <!-- INPUTS FOR URL & API KEY -->
        <Input />
        <!-- /INPUTS FOR URL & API KEY -->
        <!-- BUTTONS AREA -->
        <Buttons />
        <!-- /BUTTONS AREA -->
    </div>
</div>