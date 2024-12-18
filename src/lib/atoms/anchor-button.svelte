<script>
   let props = $props();
</script>

<a href="/">{props.text.button}<img src="/pijl-oranjerood.svg" alt="zwarte pijl"></a>

<style>
    a {
        font-family: "CommonsNormal", Arial, sans-serif;
        border-radius: 4px;
        width: auto;
        height: 30px;
        padding: 14px 32px 18px 32px;
        background-color: var(--main-color-oranjerood);
        text-decoration: none;
        display: flex;
        gap: 0.5em;
        justify-content: center;
        align-items: center;
        margin-bottom: 1em;
        color: var(--neutrals-color-wit);
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
        background-color: var(--interactive-color-hover-oranjerood);
    }

    a:focus {
        background-color: var(--interactive-color-focussed-oranjerood);
    }
</style>