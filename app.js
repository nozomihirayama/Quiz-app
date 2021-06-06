const quiz = [
    {
        question: '乃木坂46でドイツ出身なのは次のうち誰？',
        answers: [
    '白石麻衣',
    '山下美月',
    '秋元真夏',
    '生田絵梨花'            
     ],
     correct: '生田絵梨花'
    }, {
        question: 'TWICEで韓国人じゃないのは次のうち誰？',
        answers: [
    'ジヒョ',
    'ジョンヨン',
    'ツウィ',
    'ナヨン'            
     ],
     correct: 'ツウィ'
    }, {
        question: 'Niziuの中でアメリカ人とのハーフは次のうち誰？',
        answers: [
    'ニナ',
    'リオ',
    'リマ',
    'リク'            
     ],
     correct: 'ニナ'
    }, {
        question: 'Blackpinkの中でタイ人のメンバーは次のうち誰？',
        answers: [
    'ジェニー',
    'リサ',
    'ロゼ',
    'ジス'            
     ],
     correct: 'リサ'
    }, {
        question: 'TWICEのリーダーは次のうち誰？',
        answers: [
    'マコ',
    'チェヨン',
    'ジヒョ',
    'サナ'            
     ],
     correct: 'ジヒョ'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }
    
    quizIndex++;
    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
        setupQuiz();
        } else {
        //問題数がもうなければこちらを実行
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
        }
    
};    

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e)=> {
        clickHandler(e);
    });
    handlerIndex++;
}