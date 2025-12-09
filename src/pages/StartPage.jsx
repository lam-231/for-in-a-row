const StartPage = ({ onStart }) => {
    return (
        <div className="page">
            <h2>Вітаємо у грі "4 в ряд"!</h2>
            <p>Правила : збери 4 фішки свого кольору в ряд. Ряд рахується, як по вертикалі та горизонталі, так і по ідагоналі</p>
            <button onClick={onStart}> Почати гру </button>
        </div>
    );
};

export default StartPage;