<script>
    import { onMount, afterUpdate } from "svelte";

    let menuOpen = false;
    let article = { h2: "", p: "" };
    let cards = [];

    // Ophalen van gegevens uit localStorage
    onMount(() => {
        const storedArticle = localStorage.getItem("article");
        const storedCards = localStorage.getItem("cards");

        if (storedArticle && storedCards) {
            article = JSON.parse(storedArticle);
            cards = JSON.parse(storedCards);
        } else {
            fetchData();
        }
    });

    async function fetchData() {
        const response = await fetch("/content.json");
        const data = await response.json();
        article = { ...data.article }; // Nieuwe referentie aanmaken
        cards = [...data.cards]; // Nieuwe array aanmaken

        // Opslaan in localStorage
        localStorage.setItem("article", JSON.stringify(article));
        localStorage.setItem("cards", JSON.stringify(cards));
    }

    function saveToLocalStorage() {
        localStorage.setItem("article", JSON.stringify(article));
        localStorage.setItem("cards", JSON.stringify(cards));
        alert("Content opgeslagen in localStorage!");
    }

    async function updateContent() {
        const updatedContent = { article, cards };
        await fetch("http://localhost:3000/update-content", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(updatedContent),
        });
        alert("Content updated!");

        // Update de gegevens opnieuw in de UI na het opslaan
        const response = await fetch("/content.json");
        const data = await response.json();
        article = { ...data.article };
        cards = [...data.cards];
    }

    afterUpdate(() => {
        console.log("Data updated", { article, cards });
    });

    function forceUpdateArticle() {
        article = { ...article }; // Nieuwe referentie
    }

    function forceUpdateCard(index) {
        cards = cards.map((card, i) => (i === index ? { ...card } : card));
    }
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
            <form class="hidden-menu" on:submit|preventDefault={saveToLocalStorage}>
                <h3>Pas het artikel aan</h3>
                <label>Artikel kop:
                    <input type="text" bind:value={article.h2} on:input={forceUpdateArticle} />
                </label>
                <label>Artikel tekst:
                    <input type="text" bind:value={article.p} on:input={forceUpdateArticle} />
                </label>
            
                <h3>Pas de kaarten aan</h3>
                {#each cards as card, i}
                    <label>Kaart {i + 1} kop:
                        <input type="text" bind:value={card.header} on:input={() => forceUpdateCard(i)} />
                    </label>
                    <label>Kaart {i + 1} tekst:
                        <input type="text" bind:value={card.text} on:input={() => forceUpdateCard(i)} />
                    </label>
                {/each}
            
                <button type="submit">Opslaan</button>
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
