//How to anjani@gmail.com into axxxxx@gmail.com code start

    const str = 'anjani@gmail.com';
    const newstr = str.split('@');
    console.log(newstr)
    // console.log(newstr[0].split('').fill('x',1))

    const newstr2 = newstr[0].split('').fill('x',1).slice(1);
    // console.log(newstr2)
    const firstpart = newstr[0][0]+newstr2.join('');
    console.log(firstpart+'@'+newstr[1])
