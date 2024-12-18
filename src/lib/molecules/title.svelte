<script>
    import { onMount } from "svelte";
    import data from "$lib/data.json";

    let article = data.article;
</script>

<article>
    <h2>{ article.h2 }</h2>
    <p>{ article.p }</p>
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        text-align: center;
        font-size: var(--h2-M-lh-CommonsBold);
        line-height: var(--h2-M-lh-CommonsBold);
        letter-spacing: var(--h2-M-ls-commonsBold);

        @media only screen and (min-width: 48em){
            font-size: var(--h2-D-fs-CommonsBold);
            line-height: var(--h2-D-lh-CommonsBold);
            letter-spacing: var(--h2-D-ls-commonsBold);
        }

        @media only screen and (min-width: 48em){
            width: 500px;
        }
    }

    p {
        font-size: var(--bodyM-fs-normal-Commons);
        line-height: var(--bodyM-lh-normal-Commons);
        letter-spacing: var(--bodyM-ls-normal-commons);

        @media only screen and (min-width: 48em){
            font-size: var(--bodyD-fs-normal-Commons);
            line-height: var(--bodyD-lh-normal-Commons);
            letter-spacing: var(--bodyD-ls-normal-commons);
        }
    }
</style>
