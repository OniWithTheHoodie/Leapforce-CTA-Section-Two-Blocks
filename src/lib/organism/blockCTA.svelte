<script>
    import { onMount } from "svelte";
    import data from "$lib/data.json";
    import Cbutton from "../atoms/card-button.svelte";
    import Anchor from "../atoms/anchor-button.svelte";
    import Question from "../atoms/question.svelte";

    let menuOpen = false;
    let article = data.article;
    let cards = data.cards;
    let label = data.label;
    let button = data.button;
    let image = data.image;

    // afhandelen van images
    // const handleImageChange = (e, index) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         cards[index].image = URL.createObjectURL(file);
    //     }
    // }
    
</script>


    <div class="grid-container">
    <!-- NAV -->
    <nav>
        <ul>
            <li class="center-label">
                <label for="menu-toggle">{label.label}</label>
            </li>
            <li class="hamburger">
                <input type="checkbox" id="menu-toggle" class="hidden-checkbox" bind:checked={menuOpen} />
                <label for="menu-toggle" class="hamburger-label">
                    <img class="hamburger" src="hamburger.svg" alt="hamburger menu" />
                </label>
                {#if menuOpen}
                <form class="hidden-menu">
                    <div class="form-container">
                        <div class="grouped-label">
                            <div class="head-close">
                                <h3>Change the label</h3>
                                <input type="checkbox" id="close-toggle" class="hidden-checkbox" bind:checked={menuOpen}>
                                <button for="close-toggle" on:click={() => menuOpen = false}>
                                    <img class="close" src="x.svg" alt="close button">
                                </button>
                            </div>
                            <label>Label header 
                                <div class="tooltip-wrapper"><Question />
                                    <div class="tooltip">Recommended label length: 20-40 characters for clarity.</div>
                                </div> 
                            </label>
                        </div>
                        <input type="text" maxlength="40" placeholder="Change label" bind:value={label.label}/>
                        <div class="grouped-label">
                            <h3>Change the article</h3>
                            <label>Article header 
                                <div class="tooltip-wrapper"><Question />
                                <div class="tooltip">Please enter a concise header. Recommended length: 30-50 characters.</div>
                            </label>
                        </div>
                        <input type="text" maxlength="50" placeholder="Change header" bind:value={article.h2}/>
                        <div class="grouped-label">
                            <label>Article text
                                <div class="tooltip-wrapper"><Question />
                                <div class="tooltip">The article text should provide a detailed description. Aim for 100-150 words.</div>
                            </label>
                        </div>
                        <input type="text" maxlength="150" placeholder="Change text" bind:value={article.p}/>
                        <div class="grouped-label">
                        <h3>Change the button</h3>
                        <label>Button 
                            <div class="tooltip-wrapper"><Question />
                            <div class="tooltip">Use concise action verbs. Limit the text to 2-4 words.</div>
                            </label>
                        </div>
                        <input type="text" maxlength="30" placeholder="Verander button" bind:value={button.button}/>

                        <h3>Change the cards</h3>
                        {#each cards as card}
                        <div class="grouped-label">
                            <label>Change title
                                <div class="tooltip-wrapper"><Question />
                                <div class="tooltip">Keep the title concise and descriptive. Recommended length: 5-7 words (max 50 characters).</div>
                            </label>
                            </div>
                            <input type="text" maxlength="100" placeholder="Chage title" bind:value={card.header} />
                        <div class="grouped-label">
                            <label>Card text 
                                <div class="tooltip-wrapper"><Question />
                                <div class="tooltip">The article text should provide a detailed description. Aim for 100-150 words.</div>
                            </label>
                        </div>
                        <input type="text" maxlength="255" placeholder="Change text" bind:value={card.text}/>
                        <div class="grouped-label">
                            <label>Change image 
                                <div class="tooltip-wrapper"><Question />
                                <div class="tooltip">Upload an image with a resolution of at least 515xpx.</div>
                            </label>
                        </div>
                        <input type="file" placeholder="Change image" />
                        {/each}
                    </div>
                </form>
                {/if}
            </li>
        </ul>
    </nav>

<!-- HEADER -->
<article class="header">
    <h2>{ article.h2 }</h2>
    <p>{ article.p }</p>
    <Anchor text="{button}" />
</article>

<!-- CARDS -->
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
</div>



<style>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(6,1fr);
        grid-template-rows: auto;
        margin: 20px;
        justify-items: center;

        @media only screen and (min-width: 64em){
            margin: 64px;
        }
    }

    /* NAVBAR */
    nav {
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        grid-column: 1 / 7;
        grid-row: 1 / 2;
    }

    ul {
        font-family: "CommonsNormal", Arial, sans-serif;
        display: grid;
        justify-items: center;
        padding: 0;
    }

    li {
        list-style-type: none;
    }

    .center-label {
        grid-column: 3 / 5;
        justify-self: center;
        padding-bottom: 8px;
        color: var(--neutrals-color-plain-black);
    }

    .hamburger {
        grid-column: 6 / 7;
        grid-row: 1 / 2;
    }

    .hamburger img {
        height: 25px;
        width: 25px;
    }

    .hidden-checkbox {
        display: none;
    }

    .hamburger-label {
        cursor: pointer;
    }

    .hidden-menu {
        display: block;
        position: fixed;
        top: -1.5em;
        right: 0;
        left: 0;
        background-color: var(--main-color-oranjerood);
        color: white;
        padding: 1em;
        box-shadow: 11px -4px 4px -5px rgba(0,0,0,0.2);
        z-index: 1000;
        width: 100%;
        scroll-behavior: smooth;
        overflow-y: auto;
        scrollbar-width: none;

        @media only screen and (min-width: 48em){
            height: 100%;
            width: 280px;
            height: 100vh;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    label {
        font-family: "CommonsNormal", Arial, sans-serif;
        font-size: 1rem;
        display: flex;
        flex-direction: row;
        /* grid-column: 3 / 5; */
    }

    /* HEADER */
    .header {
        flex-direction: column;
        display: grid;
        grid-column: 1 / 7;
        grid-row: 2 / 5;
        justify-items: center;
    }

    h2 {
        text-align: center;
        font-family: "CommonsDemiBold", Arial, sans-serif;
        font-size: var(--h2-M-lh-CommonsBold);
        line-height: var(--h2-M-lh-CommonsBold);
        letter-spacing: var(--h2-M-ls-commonsBold);
        grid-column: 2 / 6;
        grid-column: 2 / 4;
        padding-bottom: 24px;

        @media only screen and (min-width: 48em){
            font-size: var(--h2-D-fs-CommonsBold);
            line-height: var(--h2-D-lh-CommonsBold);
            letter-spacing: var(--h2-D-ls-commonsBold);
        }

        @media only screen and (min-width: 48em){
            width: 500px;
        }
    }

    .header > p {
        font-family: "CommonsNormal", Arial, sans-serif;
        font-size: var(--bodyM-fs-normal-Commons);
        line-height: var(--bodyM-lh-normal-Commons);
        letter-spacing: var(--bodyM-ls-normal-commons);
        color: var(--neutrals-color-plain-black);
        grid-column: 2 / 6;
        grid-row: 4 / 5;
        padding-bottom: 24px;

        

        @media only screen and (min-width: 48em){
            font-size: var(--bodyD-fs-normal-Commons);
            line-height: var(--bodyD-lh-normal-Commons);
            letter-spacing: var(--bodyD-ls-normal-commons);
        }
    }
    /* CARDS */
    img {
        width: 100%;
        height: 252px;
        border-radius: 0.2em;
        padding-bottom: 12px;


        @media only screen and (min-width: 30em){
            width: 410px;
            height: 252px;
        }

        @media only screen and (min-width: 48em){
            width: 352px;
            height: 468px;
        } 

        @media only screen and (min-width: 64em){
            width: 100%;
            height: 510px;
        }
    }

    section {
        position: relative;
        align-items: center;
        justify-content: center;
        grid-column: 1 / 7;
        grid-row: 5 / 6;
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
        font-family: "CommonsDemiBold", Arial, sans-serif;
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

    .container > p {
        font-family: "CommonsNormal", Arial, sans-serif;
        font-size: var(--bodyM-fs-normal-Commons);
        line-height: var(--bodyM-lh-normal-Commons);
        color: var(--opacity-color-wit50);

        @media only screen and (min-width: 48em){
            font-size: var(--bodyD-fs-normal-Commons);
            line-height: var(--bodyD-lh-normal-Commons);
            letter-spacing: var(--bodyD-ls-normal-commons);
        }
    }

    .container {
        position: absolute;
        top: 6em;
        display: grid;
        grid-template-columns: 180px 60px;
        grid-template-rows: 60px 60px;
        gap: 0.5em;
        padding-left: 20px;
        align-items: center;

        @media only screen and (min-width: 30em) {
            grid-template-columns: 305px 60px;
            padding-left: 17px;
        }

        @media only screen and (min-width: 48em){
            grid-template-columns: 240px 60px;
            top: 19em;
        }

        @media only screen and (min-width: 64em){
            grid-template-columns: 335px 60px;
            top: 22em;
        }

        @media only screen and (min-width: 75em){
            grid-template-columns: 430px 60px;
            top: 22em;
        }

        @media only screen and (min-width: 90em){
            grid-template-columns: 508px 60px;
            top: 22em;
        }
    }

    /* .container::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: linear-gradient(to bottom, rgba(20, 20, 20, 0.2) 0%, rgba(20, 20, 20, 0.8) 100%);
    } */

    /* Form */
    .head-close {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 270px;
        width: 100%;
    }

    .head-close > button {
    background: none;      
    border: none;           
    padding: 0;            
    width: auto;            
    height: auto;           
    cursor: pointer;       
    display: inline-flex; 
    cursor: pointer;
    }

    .form-container {
        width: 100%;
        max-width: 270px;

        @media only screen and (min-width: 30em){
            max-width: 440px;
            width: 100%;
        }
    }
    
    .form-container > label {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    input[type="text"] {
        width: 100%;
        height: 30px;
        border-radius: 5px;
        padding: 5px;


        @media only screen and (min-width: 48em){
            max-width: 270px;
        } 
    }

    .grouped-label {
        padding: 20px 0 10px 0;
    }
    
    .tooltip-wrapper {
        position: relative;
        display: inline-block;
    }

    .tooltip {
        display: none;
        position: absolute;
        top: 0;
        left: 8.6em;
        width: auto;
        max-width: 250px;
        min-width: 100px;
        transform: translateX(-50%);
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
        padding: 5px;
        font-size: 12px;
        border-radius: 5px;
        z-index: 10;
        word-wrap: break-word;
    }

    .tooltip-wrapper:hover .tooltip {
        display: block;
    }
</style>
