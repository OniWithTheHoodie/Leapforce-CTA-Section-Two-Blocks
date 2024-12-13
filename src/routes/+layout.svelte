<script>
    import Nav from "../lib/molecules/nav.svelte";
    import Title from "../lib/molecules/title.svelte";
    import Anchor from "../lib/atoms/anchor-button.svelte";
    import Card from "../lib/molecules/card.svelte";
</script>

<main>
    <slot />
    <Nav />
    <Title />
    <Anchor />
    <Card />
    
</main>

<style>
</style>