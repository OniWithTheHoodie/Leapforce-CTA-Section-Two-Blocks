<img src="circle-question-white.svg" alt="vraagteken" data-descr="Hiermee verander je de kop">

<style>
    img {
        width: 15px;
        height: 20px;
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        fill: white;
    }

    img[data-descr]:hover::after {
        content: attr(data-descr);
        position: absolute;
        left: 0;
        top: 24px;
        min-width: 200px;
        border: 1px #aaaaaa solid;
        border-radius: 10px;
        background-color: #ffffcc;
        padding: 12px;
        color: #000000;
        font-size: 14px;
        z-index: 1;
    }
</style>