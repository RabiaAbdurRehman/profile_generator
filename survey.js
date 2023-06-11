const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
    console.log(`Thank you: ${name}`);
    rl.question("what activity you are doing? ", (activity) => {
        console.log(`: ${activity}`);
        rl.question("What do you listen to while doing that? ", (background) => {
            console.log(`That is an amazing background : ${background}`);
            rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (mealTime) => {
                console.log(`: ${mealTime}`);
                rl.question("What's your favourite thing to eat for that meal? ", (meal) => {
                    console.log(`This my everyone's favourite: ${meal}`);
                    rl.question("Which sport is your absolute favourite? ", (sport) => {
                        console.log(`wow you are active: ${sport}`);
                        rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
                            console.log(`: ${superpower}`);
                            const profile = `My name is ${name} and I work on ${activity}. I usually listen to some ${background} while doing ${activity}. I enjoy ${mealTime} and I love to eat ${meal}. I enjoy ${sport}. My superpowrs are ${superpower}`
                            console.log(profile);
                            rl.close();

                        });



                    });


                });

            });


        });

    });


});









