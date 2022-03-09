const quotes = [
    {
        quote: "아~ 싫어하는 거요? 국연수요 국.영.수. 국영수 싫어한다고요~",
        author: "최웅",
    },
    {
        quote: "지나갈까? 여기 있을까?",
        author: "국연수",
    },
    {
        quote: "내가 유치하게 안굴고 진지했으면 감당할 순 있었고?",
        author: "최웅",
    },
    {
        quote: "내가 버릴 수 있는 건 너밖에 없어",
        author: "국연수",
    },
    {
        quote: "죄송하면 비밀로 해줘. 나 아직 아무에게도 말한적 없거든",
        author: "김지웅",
    },
    {
        quote: "우리가 헤어진건 다 내 오만이었어. 너 없이 살 수 있을거라는 내 오만.",
        author: "국연수",
    },
    {
        quote: "한없이 멀게 느껴지다, 한없이 가까이 다가와 순간을 영원으로 만들어버리는데.",
        author: "최웅",
    },
    {
        quote: "안 헤어져 우리. 우리가 또 싸우면, 또 헤어지면 그때 너는 그냥 이렇게 다시 내 앞에 오기만 해.",
        author: "국연수",
    },
    {
        quote: "멍청이야. 나한텐 그래도 돼~. 내가 계속 찾아올 테니까 넌 미안하단 한마디면 돼. 어차피 항상 지는 건 나야.",
        author: "최웅",
    },
    {
        quote: "이런 모습들은 나한테만 보여줘서 사랑할 수 밖에 없게 만들어요.",
        author: "최웅",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.round(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;