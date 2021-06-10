<div class="container">

<div class="blocHorizontal">
    <div class="slide one">Slide 1</div>
    <div class="slide two">Slide 2</div>
    <div class="slide three">Slide 3</div>
    <div class="slide four">Slide 4</div>
</div>
</div>


::-webkit-scrollbar {
    display: none;
}

.blocHorizontal {
    display: flex;
    flex-direction: row;
    width: 400vw;
    transform: rotate(90deg) translateY(-100vh);
    transform-origin: top left;
}

.container {
    width: 100vh;
    height: 100vw;
    transform: rotate(-90deg) translateX(-100vh);
    transform-origin: top left;
    overflow-x: hidden;

    -ms-overflow-style: none;
    scrollbar-width: none;
}a

.slide {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(6.25rem, 8vw, 15rem)
}

.one {
    background: rgb(28,28,28);
    color: green;
}

.two {
    background: rgb(38,38,38);
    color: tan;
}

.three {
    background: rgb(48,48,48);
    color: teal;
}

.four {
    background: rgb(58,58,58);
    color: #fff;
}
