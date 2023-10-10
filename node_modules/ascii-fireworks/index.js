const firework1 = (text) => {
    if (typeof text !== 'string') {
        text = ' '
    }
    let spacing = `                ${text}                `;
    let spaceArr = spacing.split('');

    for (let i = 15; i <= 15 + text.length; i++) {
        spaceArr.pop()
    }
    let newSpace = spaceArr.join('')
    console.log(`         \n    \\ /                                    \\ /\n  -- * --${newSpace} -- * --\n    / \\                                    / \\ \n         `)

}


const fireworkhalf = (text) => {
    if (typeof text !== 'string') {
        text = ' '
    }
    let spacing = `             ${text}              `;
    let spaceArr = spacing.split('');

    for (let i = 15; i <= 15 + text.length; i++) {
        spaceArr.pop()
    }
    let newSpace = spaceArr.join('')

    console.log(`   \\   /                                  \\   /\n    \\ /                                    \\ /\n---  *   ---${newSpace} ---  *   ---\n    / \\                                    / \\\n   /   \\                                  /   \\`)
}




const firework2 = (text) => {
    if (typeof text !== 'string') {
        text = ' '
    }
    let spacing = `             ${text}             `;

    let spaceArr = spacing.split('');

    for (let i = 15; i <= 15 + text.length; i++) {
        spaceArr.pop()
    }
    let newSpace = spaceArr.join('')
    console.log(`   \\   /                                  \\   /\n         \n--   *    --${newSpace} --    *    --   \n         \n   /   \\                                  /   \\`)



}


const fireWorkAnimation = (text = '', time = 350) => {
    let num = 0
    let animation = setInterval(() => {
        console.clear();
        if (num % 3 === 0) {
            firework1(text);
        } else if ((num - 1) % 3 === 0) {
            fireworkhalf(text);
        } else {
            firework2(text)
        }
        num++
        if (num >= 10) {
            // console.clear()
            clearInterval(animation)
        }
    }, time)
}
// fireWorkAnimation('congrats!', 500)
module.exports = fireWorkAnimation
