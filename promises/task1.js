function prom(text, ms) {
    setTimeout(() => {
        console.log(text);
    }, ms);
}

prom('Hello, world!', 2000);