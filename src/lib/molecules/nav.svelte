<script>
    let menuOpen = false;
    import { onMount, afterUpdate } from "svelte";
    import data from "$lib/data.json";
</script>



<nav>
    <ul>
        <li class="center-label">
            <label for="menu-toggle">Label</label>
        </li>
        <li class="menu">Menu</li>
        <li class="hamburger">
            <input type="checkbox" id="menu-toggle" class="hidden-checkbox" bind:checked={menuOpen} />
            <label for="menu-toggle" class="hamburger-label">
                <img src="hamburger.svg" alt="hamburger menu" />
            </label>
            {#if menuOpen}
            <form class="hidden-menu">
                <h3>Pas het artikel aan</h3>
                <label>Artikel kop:
                    <input type="text" placeholder="Verander Kop" bind:value={article.h2}/>
                </label>
                <label>Artikel tekst:
                    <input type="text" placeholder="Verander tekst" bind:value={article.p}/>
                </label>
            
                <h3>Pas de kaarten aan</h3>
                {#each cards as card}
                    <label>Kaart kop:
                        <input type="text" placeholder="Verander Kop" bind:value={card.header} />
                    </label>
                    <label>Kaart tekst:
                        <input type="text" placeholder="Verander tekst" bind:value={card.text}/>
                    </label>
                {/each}
            </form>
            {/if}
        </li>
    </ul>
</nav>

<style>
    nav {
        padding: 0 1em;
        width: 95%;
        max-width: 1440px;
        margin: 0 auto;
    }

    ul {
        display: flex;
        flex-direction: row;
        gap: 1em;
    }

    li {
        list-style-type: none;
    }

    .center-label {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
    }

    .menu {
        margin-left: auto;
    }

    .hamburger img {
        background-color: black;
        display: inline-block;
        vertical-align: middle;
        height: 1.5em;
    }

    .hidden-checkbox {
        display: none;
    }

    .hamburger-label {
        cursor: pointer;
    }

    .hidden-menu {
        display: block;
        position: absolute;
        top: 3.5em;
        right: 0;
        left: 0;
        background-color: #333;
        color: white;
        padding: 1em;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    label {
        font-size: 1rem;
    }
</style>
