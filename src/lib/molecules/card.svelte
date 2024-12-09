<script>
    import Cbutton from "../atoms/card-button.svelte";

    let cards = Array(2).fill({
        header: 'Title',
        text: 'Supporting text about the call-toaction goes here.',
        image: 'CTAsectionImage.png'
    });
</script>

{#each cards as card}
    <section>
        <img width="93" src="{card.image}" alt="foto cta sectie">
        <article>
            <h2>{card.header}</h2>
            <div class="container">
                <p>{card.text}</p>
                <Cbutton />
            </div>
        </article>
    </section>
{/each}

<style>
    img {
        width: 310px;
        height: 252px;
        border-radius: 0.2em;
    }

    section {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1em;
    }

    article {
        position: absolute;
        top: 8em;
        width: 280px;
    }

    .container {
        display: flex;
        flex-direction: row;
    }
</style>