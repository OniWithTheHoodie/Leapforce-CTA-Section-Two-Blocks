<script>
    import { onMount } from "svelte";
    import Cbutton from "../atoms/card-button.svelte";
    
    let cards = [];

    //ophalen van JSON-gegevens
    onMount(async () => {
        const response = await fetch("/content.json");
        const data = await response.json();
        cards = [...data.cards]; // Nieuwe referentie aanmaken
    });
</script>


<section>
    {#each cards as card}
    <article>
        <img width="93" src="{card.image}" alt="foto cta sectie" />
        <div class="container">
            <h4>{card.header}</h4>  <!-- Dit is waar de kaartheader moet worden weergegeven -->
            <p>{card.text}</p>  <!-- Dit is waar de tekst moet worden weergegeven -->
            <Cbutton />
        </div>
    </article>
    {/each}
</section>



<style>
    img {
        width: 310px;
        height: 252px;
        border-radius: 0.2em;

        @media only screen and (min-width: 30em){
            width: 410px;
            height: 252px;
        }

        @media only screen and (min-width: 48em){
            width: 352px;
            height: 468px;
        }

        @media only screen and (min-width: 64em){
            width: 480px;
            height: 510px;
        }

        @media only screen and (min-width: 75em){
            width: 555px;
            height: 510px;
        }

        @media only screen and (min-width: 90em){
            width: 680px;
            height: 540px;
        }
    }

    section {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1em;

        @media only screen and (min-width: 48em){
            display: flex;
            flex-direction: row;
        }
    }

    article {
        position: relative;
    }

    h4 {
        font-size: var(--h4-M-fs-CommonsBold);
        line-height: var(--h4-M-lh-CommonsBold);
        letter-spacing: var(--h4-M-ls-commonsBold);
        color: var(--neutrals-color-wit);
        grid-column: 1 / 3;
        grid-row: 1 / 2;

        @media only screen and (min-width: 48em){
            font-size: var(--h4-D-fs-CommonsBold);
            line-height: var(--h4-D-lh-CommonsBold);
            letter-spacing: var(--h4-D-ls-commonsBold);
        }

        @media only screen and (min-width: 64em) {
            width: 500px;
        }
        
    }

    p {
        font-size: var(--bodyM-fs-normal-Commons);
        line-height: var(--bodyM-lh-normal-Commons);
        color: var(--opacity-color-wit50);
        grid-column: 1 / 2;
        grid-row: 2 / 3;

        @media only screen and (min-width: 48em){
            font-size: var(--bodyD-fs-normal-Commons);
            line-height: var(--bodyD-lh-normal-Commons);
            letter-spacing: var(--bodyD-ls-normal-commons);
        }
    }

    .container {
        position: absolute;
        top: 7em;
        display: grid;
        grid-template-columns: 225px 60px;
        grid-template-rows: 60px 60px;
        gap: 0.5em;
        padding-left: 5px;
        align-items: center;

        @media only screen and (min-width: 30em) {
            grid-template-columns: 320px 60px;
        }

        @media only screen and (min-width: 48em){
            grid-template-columns: 260px 60px;
            top: 19em;
        }

        @media only screen and (min-width: 64em){
            grid-template-columns: 380px 60px;
            top: 23em;
        }

        @media only screen and (min-width: 75em){
            grid-template-columns: 465px 60px;
            top: 23em;
        }

        @media only screen and (min-width: 90em){
            grid-template-columns: 580px 60px;
            top: 23em;
        }
    }
</style>