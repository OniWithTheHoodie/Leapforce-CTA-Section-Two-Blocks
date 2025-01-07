<script>
   let props = $props();
</script>

<a href="/">{props.text.button}<img src="/pijl-oranjerood.svg" alt="zwarte pijl"></a>

<style>
    a {
        font-family: "CommonsNormal", Arial, sans-serif;
        width: auto;
        color: var(--main-color-oranjerood);
        text-decoration: none;
        display: flex;
        gap: 0.5em;
        padding-bottom: 24px;
        justify-content: center;
        align-items: center;
        margin-bottom: 1em;
        font-size: var(--bodyM-fs-normal-Commons);
        line-height: var(--bodyM-lh-normal-Commons);
        letter-spacing: var(--bodyM-ls-normal-commons);
        grid-column: 2 / 6;
        grid-row: 6 / 7;

        @media only screen and (min-width: 48em){
            font-size: var(--bodyD-fs-normal-Commons);
            line-height: var(--bodyD-lh-normal-Commons);
            letter-spacing: var(--bodyD-ls-normal-commons);
        }
    }

    a:hover {
        color: var(--interactive-color-hover-oranjerood);
    }

    a:focus {
        color: var(--interactive-color-focussed-oranjerood);
    }
</style>