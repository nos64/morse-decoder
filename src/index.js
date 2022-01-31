const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(exp) {
    
    let outArr = [];
  let morse =[];
  let morse2 =[];
  let morse3 = [];
  /**Разбиваю строку на массив по 2 элемента */
  for (let i = 0; i < exp.length; i += 2) {
    outArr.push(exp.slice(i, i+2));
  }
  // console.log(outArr)

  /**Перебираю получившийся массив и присваиваю . , - ,  заменяю 00 пустотой*/
  outArr.forEach(item => {
    if (item === '10') {
      item = '.';
    } else if (item === '11') {
      item = '-';
    } else if (item === '00') {
      item = '';
    }
    morse.push(item);
  })
  // console.log(morse)

/**Перебираю массив, разбиваю по 5 элементов (по одной букве) получаю 2мерный массив */
  for (let i = 0; i < morse.length; i += 5) {
    morse2.push(morse.slice(i, i+5));
  }
  // console.log(morse2)

  /**Перебираю 2 мерный массив и фильтрую его, убираю пустые элементы  */
  for (let i = 0; i < morse2.length; i++) {
    morse = morse2[i].filter(item => item != '' && item != '**');
    morse3.push(morse);
  }
//  console.log(morse3)
  morse2 = [];
/**Объединяю 2 мерный массив в 1 мерный */
  for (let i = 0; i < morse3.length; i++) {
    morse = morse3[i].join('');
    morse2.push(morse);
  }

  // console.log(morse2)
  /**Преобразую 1 мерный массив символов в декодированную строку */
  let result = morse2.map(b => {
    if (MORSE_TABLE[b] === undefined) {
      return b =' ';
    } else {
      return MORSE_TABLE[b];
    }
    
  }).join('');
  return result;
}

module.exports = {
    decode
}