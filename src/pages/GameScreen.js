import { useState, useEffect } from "react";
import { getFirestore } from "../firebase";
import { Loading } from "../components/Loading";
import backCard from "../images/backCard.png";

export const GameScreen = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [playerCardsSplitted, setPlayerCardsSplitted] = useState([]);
  const [dealerValueTotal, setDealerValueTotal] = useState([0, 0]);
  const [playerValueTotal, setPlayerValueTotal] = useState([0, 0]);
  const [playerValueTotalSplitted, setPlayerValueTotalSplitted] = useState([0, 0]);
  const [message, setMessage] = useState("");
  const [playerDoublePressed, setPlayerDoublePressed] = useState(false);
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(0);

  useEffect(() => {
    getDataFromFirestore();
  }, []);

  useEffect(() => {
    cards?.forEach((card) => {
      if (card.value === "KING" || card.value === "QUEEN" || card.value === "JACK") card.value = [10];
      else if (card.value === "1") card.value = [1, 11];
      else card.value = [parseInt(card.value)];
    });
  }, [cards]);

  useEffect(() => {
    calculateValueTotal(dealerCards);
  }, [dealerCards]);

  useEffect(() => {
    calculateValueTotal(playerCards);
  }, [playerCards]);

  useEffect(() => {
    calculateValueTotal(playerCardsSplitted);
  }, [playerCardsSplitted]);

  useEffect(() => {
    if (dealerCards.length > 1) {
      // if dealer has less than 17, add a card
      if (
        (dealerValueTotal[0] < 17 && dealerValueTotal[1] < 17) ||
        (dealerValueTotal[0] < 17 && dealerValueTotal[1] > 21)
      ) {
        setTimeout(() => {
          dealerHit();
        }, 500);
      } else if (playerCardsSplitted.length === 0) {
        // unsplit cards
        if (dealerValueTotal[0] > 21) {
          gameWin();
        } else if (dealerValueTotal[1] < 22) {
          if (playerValueTotal[1] < 22) {
            if (dealerValueTotal[1] > playerValueTotal[1]) {
              gameLose();
            } else if (dealerValueTotal[1] < playerValueTotal[1]) {
              gameWin();
            } else {
              gameDraw();
            }
          } else {
            if (dealerValueTotal[1] > playerValueTotal[0]) {
              gameLose();
            } else if (dealerValueTotal[1] < playerValueTotal[0]) {
              gameWin();
            } else {
              gameDraw();
            }
          }
        } else {
          if (playerValueTotal[1] < 22) {
            if (dealerValueTotal[0] > playerValueTotal[1]) {
              gameLose();
            } else if (dealerValueTotal[0] < playerValueTotal[1]) {
              gameWin();
            } else {
              gameDraw();
            }
          } else {
            if (dealerValueTotal[0] > playerValueTotal[0]) {
              gameLose();
            } else if (dealerValueTotal[0] < playerValueTotal[0]) {
              gameWin();
            } else {
              gameDraw();
            }
          }
        }
      } else {
        // split cards
        if (dealerValueTotal[0] > 21) {
          if (playerValueTotal[0] > 21 && playerValueTotalSplitted[0] > 21) {
            gameTwoLose();
          } else if (playerValueTotal[0] < 22 && playerValueTotalSplitted[0] < 22) {
            gameTwoWin();
          } else if (playerValueTotal[0] < 22 || playerValueTotalSplitted[0] < 22) {
            gameOneWinOneLose();
          } else {
            gameTwoDraw();
          }
        } else if (dealerValueTotal[1] < 22) {
          if (playerValueTotal[1] < 22 && playerValueTotalSplitted[1] < 22) {
            if (dealerValueTotal[1] > playerValueTotal[1] && dealerValueTotal[1] > playerValueTotalSplitted[1]) {
              gameTwoLose();
            } else if (dealerValueTotal[1] < playerValueTotal[1] && dealerValueTotal[1] < playerValueTotalSplitted[1]) {
              gameTwoWin();
            } else if (dealerValueTotal[1] < playerValueTotal[1] && dealerValueTotal[1] > playerValueTotalSplitted[1]) {
              gameOneWinOneLose();
            } else if (dealerValueTotal[1] > playerValueTotal[1] && dealerValueTotal[1] < playerValueTotalSplitted[1]) {
              gameOneWinOneLose();
            } else if (
              dealerValueTotal[1] < playerValueTotal[1] &&
              dealerValueTotal[1] === playerValueTotalSplitted[1]
            ) {
              gameOneWinOneDraw();
            } else if (
              dealerValueTotal[1] === playerValueTotal[1] &&
              dealerValueTotal[1] < playerValueTotalSplitted[1]
            ) {
              gameOneWinOneDraw();
            } else if (
              dealerValueTotal[1] > playerValueTotal[1] &&
              dealerValueTotal[1] === playerValueTotalSplitted[1]
            ) {
              gameOneLoseOneDraw();
            } else if (
              dealerValueTotal[1] === playerValueTotal[1] &&
              dealerValueTotal[1] > playerValueTotalSplitted[1]
            ) {
              gameOneLoseOneDraw();
            } else {
              gameTwoDraw();
            }
          } else if (playerValueTotal[1] < 22 && playerValueTotalSplitted[0] < 22) {
            if (dealerValueTotal[1] > playerValueTotal[1] && dealerValueTotal[1] > playerValueTotalSplitted[0]) {
              gameTwoLose();
            } else if (dealerValueTotal[1] < playerValueTotal[1] && dealerValueTotal[1] < playerValueTotalSplitted[0]) {
              gameTwoWin();
            } else if (dealerValueTotal[1] < playerValueTotal[1] && dealerValueTotal[1] > playerValueTotalSplitted[0]) {
              gameOneWinOneLose();
            } else if (dealerValueTotal[1] > playerValueTotal[1] && dealerValueTotal[1] < playerValueTotalSplitted[0]) {
              gameOneWinOneLose();
            } else if (
              dealerValueTotal[1] < playerValueTotal[1] &&
              dealerValueTotal[1] === playerValueTotalSplitted[0]
            ) {
              gameOneWinOneDraw();
            } else if (
              dealerValueTotal[1] === playerValueTotal[1] &&
              dealerValueTotal[1] < playerValueTotalSplitted[0]
            ) {
              gameOneWinOneDraw();
            } else if (
              dealerValueTotal[1] > playerValueTotal[1] &&
              dealerValueTotal[1] === playerValueTotalSplitted[0]
            ) {
              gameOneLoseOneDraw();
            } else if (
              dealerValueTotal[1] === playerValueTotal[1] &&
              dealerValueTotal[1] > playerValueTotalSplitted[0]
            ) {
              gameOneLoseOneDraw();
            } else {
              gameTwoDraw();
            }
          } else if (playerValueTotal[0] < 22 && playerValueTotalSplitted[1] < 22) {
            if (dealerValueTotal[1] > playerValueTotal[0] && dealerValueTotal[1] > playerValueTotalSplitted[1]) {
              gameTwoLose();
            } else if (dealerValueTotal[1] < playerValueTotal[0] && dealerValueTotal[1] < playerValueTotalSplitted[1]) {
              gameTwoWin();
            } else if (dealerValueTotal[1] < playerValueTotal[0] && dealerValueTotal[1] > playerValueTotalSplitted[1]) {
              gameOneWinOneLose();
            } else if (dealerValueTotal[1] > playerValueTotal[0] && dealerValueTotal[1] < playerValueTotalSplitted[1]) {
              gameOneWinOneLose();
            } else if (
              dealerValueTotal[1] < playerValueTotal[0] &&
              dealerValueTotal[1] === playerValueTotalSplitted[1]
            ) {
              gameOneWinOneDraw();
            } else if (
              dealerValueTotal[1] === playerValueTotal[0] &&
              dealerValueTotal[1] < playerValueTotalSplitted[1]
            ) {
              gameOneWinOneDraw();
            } else if (
              dealerValueTotal[1] > playerValueTotal[0] &&
              dealerValueTotal[1] === playerValueTotalSplitted[1]
            ) {
              gameOneLoseOneDraw();
            } else if (
              dealerValueTotal[1] === playerValueTotal[0] &&
              dealerValueTotal[1] > playerValueTotalSplitted[1]
            ) {
              gameOneLoseOneDraw();
            } else {
              gameTwoDraw();
            }
          } else if (playerValueTotal[0] < 22 && playerValueTotalSplitted[0] < 22) {
            if (dealerValueTotal[1] > playerValueTotal[0] && dealerValueTotal[1] > playerValueTotalSplitted[0]) {
              gameTwoLose();
            } else if (dealerValueTotal[1] < playerValueTotal[0] && dealerValueTotal[1] < playerValueTotalSplitted[0]) {
              gameTwoWin();
            } else if (dealerValueTotal[1] < playerValueTotal[0] && dealerValueTotal[1] > playerValueTotalSplitted[0]) {
              gameOneWinOneLose();
            } else if (dealerValueTotal[1] > playerValueTotal[0] && dealerValueTotal[1] < playerValueTotalSplitted[0]) {
              gameOneWinOneLose();
            } else if (
              dealerValueTotal[1] < playerValueTotal[0] &&
              dealerValueTotal[1] === playerValueTotalSplitted[0]
            ) {
              gameOneWinOneDraw();
            } else if (
              dealerValueTotal[1] === playerValueTotal[0] &&
              dealerValueTotal[1] < playerValueTotalSplitted[0]
            ) {
              gameOneWinOneDraw();
            } else if (
              dealerValueTotal[1] > playerValueTotal[0] &&
              dealerValueTotal[1] === playerValueTotalSplitted[0]
            ) {
              gameOneLoseOneDraw();
            } else if (
              dealerValueTotal[1] === playerValueTotal[0] &&
              dealerValueTotal[1] > playerValueTotalSplitted[0]
            ) {
              gameOneLoseOneDraw();
            } else {
              gameTwoDraw();
            }
          } else if (playerValueTotal[0] < 22 && playerValueTotalSplitted[0] > 21) {
            if (dealerValueTotal[1] > playerValueTotal[0]) {
              gameTwoLose();
            } else if (dealerValueTotal[1] < playerValueTotal[0]) {
              gameOneWinOneLose();
            } else {
              gameOneLoseOneDraw();
            }
          } else if (playerValueTotal[0] > 21 && playerValueTotalSplitted[0] < 22) {
            if (dealerValueTotal[1] > playerValueTotalSplitted[0]) {
              gameTwoLose();
            } else if (dealerValueTotal[1] < playerValueTotalSplitted[0]) {
              gameOneWinOneLose();
            } else {
              gameOneLoseOneDraw();
            }
          } else {
            gameTwoLose();
          }
        } else {
          if (playerValueTotal[1] < 22 && playerValueTotalSplitted[1] < 22) {
            if (dealerValueTotal[0] > playerValueTotal[1] && dealerValueTotal[0] > playerValueTotalSplitted[1]) {
              gameTwoLose();
            } else if (dealerValueTotal[0] < playerValueTotal[1] && dealerValueTotal[0] < playerValueTotalSplitted[1]) {
              gameTwoWin();
            } else if (dealerValueTotal[0] < playerValueTotal[1] && dealerValueTotal[0] > playerValueTotalSplitted[1]) {
              gameOneWinOneLose();
            } else if (dealerValueTotal[0] > playerValueTotal[1] && dealerValueTotal[0] < playerValueTotalSplitted[1]) {
              gameOneWinOneLose();
            } else if (
              dealerValueTotal[0] < playerValueTotal[1] &&
              dealerValueTotal[0] === playerValueTotalSplitted[1]
            ) {
              gameOneWinOneDraw();
            } else if (
              dealerValueTotal[0] === playerValueTotal[1] &&
              dealerValueTotal[0] < playerValueTotalSplitted[1]
            ) {
              gameOneWinOneDraw();
            } else if (
              dealerValueTotal[0] > playerValueTotal[1] &&
              dealerValueTotal[0] === playerValueTotalSplitted[1]
            ) {
              gameOneLoseOneDraw();
            } else if (
              dealerValueTotal[0] === playerValueTotal[1] &&
              dealerValueTotal[0] > playerValueTotalSplitted[1]
            ) {
              gameOneLoseOneDraw();
            } else {
              gameTwoDraw();
            }
          } else if (playerValueTotal[1] < 22 && playerValueTotalSplitted[0] < 22) {
            if (dealerValueTotal[0] > playerValueTotal[1] && dealerValueTotal[0] > playerValueTotalSplitted[0]) {
              gameTwoLose();
            } else if (dealerValueTotal[0] < playerValueTotal[1] && dealerValueTotal[0] < playerValueTotalSplitted[0]) {
              gameTwoWin();
            } else if (dealerValueTotal[0] < playerValueTotal[1] && dealerValueTotal[0] > playerValueTotalSplitted[0]) {
              gameOneWinOneLose();
            } else if (dealerValueTotal[0] > playerValueTotal[1] && dealerValueTotal[0] < playerValueTotalSplitted[0]) {
              gameOneWinOneLose();
            } else if (
              dealerValueTotal[0] < playerValueTotal[1] &&
              dealerValueTotal[0] === playerValueTotalSplitted[0]
            ) {
              gameOneWinOneDraw();
            } else if (
              dealerValueTotal[0] === playerValueTotal[1] &&
              dealerValueTotal[0] < playerValueTotalSplitted[0]
            ) {
              gameOneWinOneDraw();
            } else if (
              dealerValueTotal[0] > playerValueTotal[1] &&
              dealerValueTotal[0] === playerValueTotalSplitted[0]
            ) {
              gameOneLoseOneDraw();
            } else if (
              dealerValueTotal[0] === playerValueTotal[1] &&
              dealerValueTotal[0] > playerValueTotalSplitted[0]
            ) {
              gameOneLoseOneDraw();
            } else {
              gameTwoDraw();
            }
          } else if (playerValueTotal[0] < 22 && playerValueTotalSplitted[1] < 22) {
            if (dealerValueTotal[0] > playerValueTotal[0] && dealerValueTotal[0] > playerValueTotalSplitted[1]) {
              gameTwoLose();
            } else if (dealerValueTotal[0] < playerValueTotal[0] && dealerValueTotal[0] < playerValueTotalSplitted[1]) {
              gameTwoWin();
            } else if (dealerValueTotal[0] < playerValueTotal[0] && dealerValueTotal[0] > playerValueTotalSplitted[1]) {
              gameOneWinOneLose();
            } else if (dealerValueTotal[0] > playerValueTotal[0] && dealerValueTotal[0] < playerValueTotalSplitted[1]) {
              gameOneWinOneLose();
            } else if (
              dealerValueTotal[0] < playerValueTotal[0] &&
              dealerValueTotal[0] === playerValueTotalSplitted[1]
            ) {
              gameOneWinOneDraw();
            } else if (
              dealerValueTotal[0] === playerValueTotal[0] &&
              dealerValueTotal[0] < playerValueTotalSplitted[1]
            ) {
              gameOneWinOneDraw();
            } else if (
              dealerValueTotal[0] > playerValueTotal[0] &&
              dealerValueTotal[0] === playerValueTotalSplitted[1]
            ) {
              gameOneLoseOneDraw();
            } else if (
              dealerValueTotal[0] === playerValueTotal[0] &&
              dealerValueTotal[0] > playerValueTotalSplitted[1]
            ) {
              gameOneLoseOneDraw();
            } else {
              gameTwoDraw();
            }
          } else if (playerValueTotal[0] < 22 && playerValueTotalSplitted[0] < 22) {
            if (dealerValueTotal[0] > playerValueTotal[0] && dealerValueTotal[0] > playerValueTotalSplitted[0]) {
              gameTwoLose();
            } else if (dealerValueTotal[0] < playerValueTotal[0] && dealerValueTotal[0] < playerValueTotalSplitted[0]) {
              gameTwoWin();
            } else if (dealerValueTotal[0] < playerValueTotal[0] && dealerValueTotal[0] > playerValueTotalSplitted[0]) {
              gameOneWinOneLose();
            } else if (dealerValueTotal[0] > playerValueTotal[0] && dealerValueTotal[0] < playerValueTotalSplitted[0]) {
              gameOneWinOneLose();
            } else if (
              dealerValueTotal[0] < playerValueTotal[0] &&
              dealerValueTotal[0] === playerValueTotalSplitted[0]
            ) {
              gameOneWinOneDraw();
            } else if (
              dealerValueTotal[0] === playerValueTotal[0] &&
              dealerValueTotal[0] < playerValueTotalSplitted[0]
            ) {
              gameOneWinOneDraw();
            } else if (
              dealerValueTotal[0] > playerValueTotal[0] &&
              dealerValueTotal[0] === playerValueTotalSplitted[0]
            ) {
              gameOneLoseOneDraw();
            } else if (
              dealerValueTotal[0] === playerValueTotal[0] &&
              dealerValueTotal[0] > playerValueTotalSplitted[0]
            ) {
              gameOneLoseOneDraw();
            } else {
              gameTwoDraw();
            }
          } else if (playerValueTotal[0] < 22 && playerValueTotalSplitted[0] > 21) {
            if (dealerValueTotal[0] > playerValueTotal[0]) {
              gameTwoLose();
            } else if (dealerValueTotal[0] < playerValueTotal[0]) {
              gameOneWinOneLose();
            } else {
              gameOneLoseOneDraw();
            }
          } else if (playerValueTotal[0] > 21 && playerValueTotalSplitted[0] < 22) {
            if (dealerValueTotal[0] > playerValueTotalSplitted[0]) {
              gameTwoLose();
            } else if (dealerValueTotal[0] < playerValueTotalSplitted[0]) {
              gameOneWinOneLose();
            } else {
              gameOneLoseOneDraw();
            }
          } else {
            gameTwoLose();
          }
        }
      }
    }
  }, [dealerValueTotal]);

  useEffect(() => {
    if (playerValueTotal[0] > 21) {
      if (playerCardsSplitted.length === 0) {
        gameLose();
      } else if (playerCardsSplitted.length === 1) {
        setPlayerCards([...playerCardsSplitted]);
        setPlayerCardsSplitted([...playerCards]);
      } else if (playerCardsSplitted.length > 1 && playerValueTotalSplitted[0] > 21) {
        gameTwoLose();
      } else if (playerCardsSplitted.length > 1 && playerCards.length > 1) {
        dealerHit();
      }
    } else if (playerValueTotal[0] < 22 && playerDoublePressed) {
      dealerHit();
    }
  }, [playerValueTotal]);

  const getDataFromFirestore = async () => {
    const dataCards = [];
    try {
      const response = await getFirestore().collection("cards").get();
      if (response.empty) {
        setError("No hay cartas");
      }
      response.forEach((doc) => {
        dataCards.push(doc.data());
      });
      setCards(dataCards);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateValueTotal = (cards) => {
    let arrayValueTotal = [0, 0];

    cards.forEach((card) => {
      if (card.value.length === 1) {
        arrayValueTotal[0] += card.value[0];
        arrayValueTotal[1] += card.value[0];
      } else if (arrayValueTotal[1] + card.value[1] < 22) {
        arrayValueTotal[1] += card.value[1];
        arrayValueTotal[0] += card.value[0];
      } else {
        arrayValueTotal[0] += card.value[0];
        arrayValueTotal[1] += card.value[0];
      }
    });

    if (cards === dealerCards) {
      setDealerValueTotal(arrayValueTotal);
    } else if (cards === playerCards) {
      setPlayerValueTotal(arrayValueTotal);
    } else if (cards === playerCardsSplitted) {
      setPlayerValueTotalSplitted(arrayValueTotal);
    }
  };

  const playGame = () => {
    if (bet > 0) {
      dealerHit(cards);
      playerHitTwoCards(cards);
      setMessage("");
    } else {
      setMessage("Por favor ingrese una apuesta");
    }
  };

  const dealerHit = () => {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    setDealerCards([...dealerCards, randomCard]);
  };

  const playerHit = () => {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    setPlayerCards([...playerCards, randomCard]);
  };

  const playerHitTwoCards = () => {
    const randomCard1 = cards[Math.floor(Math.random() * cards.length)];
    const randomCard2 = cards[Math.floor(Math.random() * cards.length)];
    setPlayerCards([...playerCards, randomCard1, randomCard2]);
  };

  const playerDouble = () => {
    if (bet <= balance) {
      setPlayerDoublePressed(true);
      setBalance(balance - bet);
      setBet(bet * 2);
      playerHit();
    } else {
      setMessage("No tienes suficiente dinero para doblar");
    }
  };

  const playerSplit = () => {
    if (bet <= balance) {
      setPlayerCards([playerCards[0]]);
      setPlayerCardsSplitted([playerCards[1]]);
      setBalance(balance - bet);
      setBet(bet * 2);
    } else {
      setMessage("No tienes suficiente dinero para dividir");
    }
  };

  const playerStand = () => {
    if (playerCardsSplitted.length > 0) {
      if (playerCardsSplitted.length === 1) {
        setPlayerCards([...playerCardsSplitted]);
        setPlayerCardsSplitted([...playerCards]);
      } else {
        dealerHit();
      }
    } else {
      dealerHit();
    }
  };

  const gameLose = () => {
    setBet(0);
    setMessage("Perdiste");
    setTimeout(() => {
      resetGame();
    }, 4000);
  };

  const gameWin = () => {
    setBalance(balance + bet * 2);
    setBet(0);
    setMessage("Ganaste");
    setTimeout(() => {
      resetGame();
    }, 4000);
  };

  const gameDraw = () => {
    setBalance(balance + bet);
    setBet(0);
    setMessage("Empate");
    setTimeout(() => {
      resetGame();
    }, 4000);
  };

  const gameTwoWin = () => {
    setBalance(balance + bet * 2);
    setBet(0);
    setMessage("Ganaste en las dos manos");
    setTimeout(() => {
      resetGame();
    }, 4000);
  };

  const gameTwoLose = () => {
    setBet(0);
    setMessage("Perdiste en las dos manos");
    setTimeout(() => {
      resetGame();
    }, 4000);
  };

  const gameTwoDraw = () => {
    setBalance(balance + bet);
    setBet(0);
    setMessage("Empate en las dos manos");
    setTimeout(() => {
      resetGame();
    }, 4000);
  };

  const gameOneWinOneLose = () => {
    setBalance(balance + bet);
    setBet(0);
    setMessage("Ganaste en una mano y perdiste en la otra");
    setTimeout(() => {
      resetGame();
    }, 4000);
  };

  const gameOneLoseOneDraw = () => {
    setBalance(balance + bet / 2);
    setBet(0);
    setMessage("Perdiste en una mano y empate en la otra");
    setTimeout(() => {
      resetGame();
    }, 4000);
  };

  const gameOneWinOneDraw = () => {
    setBalance(balance + bet * 1.5);
    setBet(0);
    setMessage("Ganaste en una mano y empate en la otra");
    setTimeout(() => {
      resetGame();
    }, 4000);
  };

  const resetGame = () => {
    setDealerCards([]);
    setDealerValueTotal([0, 0]);
    setPlayerCards([]);
    setPlayerValueTotal([0, 0]);
    setPlayerCardsSplitted([]);
    setPlayerValueTotalSplitted([0, 0]);
    setMessage("");
    setPlayerDoublePressed(false);
  };

  const putBet = ({ target: { value } }) => {
    const valueInt = parseInt(value);
    if (balance >= valueInt) {
      setBalance(balance - valueInt);
      setBet(bet + valueInt);
    } else if (balance === 0 && bet === 0) {
      setMessage("Recargue saldo para jugar");
    }
  };

  const cancelBet = () => {
    setBalance(balance + bet);
    setBet(0);
  };

  const topUpBalance = () => {
    setBalance(1000);
  };

  if (isLoading) return <Loading />;

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[90vh] bg-gray-800">
        <div className="flex bg-hunterGreen text-white font-bold p-4 rounded-lg border">
          <h2 className="flex">Error: {error}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center min-h-[90vh] items-center bg-gray-800">
      <div className="flex justify-center w-full md:w-[80%] border-4 border-yellow-900 bg-hunterGreen max-w-7xl">
        <div className="flex flex-col justify-center w-full max-w-4xl">
          <div className="flex justify-center h-6 my-1 sm:my-2">
            {message && (
              <h3 className="bg-red-600 px-2 text-white flex items-center rounded text-xs sm:text-base">{message}</h3>
            )}
          </div>
          <div className="flex h-44 sm:h-72 justify-center items-center pl-16 sm:pl-24">
            <div className="flex flex-col justify-center">
              <div className="flex justify-center h-full">
                {dealerCards?.map((card, index) => (
                  <div className="-ml-16 sm:-ml-24" key={index}>
                    <img
                      className="h-40 w-[115.16px] sm:h-64 sm:w-[184.25px] bg-black rounded-lg"
                      src={card.image}
                      alt={card.value + card.suit}
                    />
                  </div>
                ))}
                {dealerCards.length === 1 && (
                  <div className="-ml-16 sm:-ml-24">
                    <img
                      className="h-40 w-[115.16px] sm:h-64 sm:w-[184.25px] bg-black rounded-lg"
                      src={backCard}
                      alt="backCard.png"
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-center -ml-16 sm:-ml-24 sm:mt-2 h-4 sm:h-6">
                {dealerCards.length > 0 && (
                  <h2 className="bg-black text-white text-xs sm:text-base rounded px-2">
                    {dealerValueTotal[0]}
                    {dealerValueTotal[0] !== dealerValueTotal[1] &&
                      dealerValueTotal[1] < 22 &&
                      " / " + dealerValueTotal[1]}
                  </h2>
                )}
              </div>
            </div>
          </div>

          <div
            className={`flex h-44 sm:h-72 items-center pl-16 sm:pl-24 mt-2 sm:mt-6 ${
              playerCardsSplitted?.length > 0 ? "justify-between" : "justify-center"
            }`}
          >
            {playerCardsSplitted.length > 0 && (
              <div className="flex flex-col mr-32">
                <div className="flex justify-center">
                  {playerCardsSplitted?.map((card, index) => (
                    <div className="-ml-16 sm:-ml-24" key={index}>
                      <img
                        className="h-40 w-[115.16px] sm:h-64 sm:w-[184.25px] bg-black rounded-lg"
                        src={card.image}
                        alt={card.value + card.suit}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center -ml-16 sm:-ml-24 sm:mt-2 h-4 sm:h-6">
                  <h2 className="bg-black text-white text-xs sm:text-base rounded px-2">
                    {playerValueTotalSplitted[0]}
                    {playerValueTotalSplitted[0] !== playerValueTotalSplitted[1] &&
                      playerValueTotalSplitted[1] < 22 &&
                      " / " + playerValueTotalSplitted[1]}
                  </h2>
                </div>
              </div>
            )}

            <div className="flex flex-col">
              <div className="flex justify-center">
                {playerCards?.map((card, index) => (
                  <div className="-ml-16 sm:-ml-24" key={index}>
                    <img
                      className="h-40 w-[115.16px] sm:h-64 sm:w-[184.25px] bg-black rounded-lg"
                      src={card.image}
                      alt={card.value + card.suit}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center -ml-16 sm:-ml-24 sm:mt-2 h-4 sm:h-6">
                {playerCards.length > 0 && (
                  <h2 className="bg-black text-white text-xs sm:text-base rounded px-2">
                    {playerValueTotal[0]}
                    {playerValueTotal[0] !== playerValueTotal[1] &&
                      playerValueTotal[1] < 22 &&
                      " / " + playerValueTotal[1]}
                  </h2>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center my-2 h-5 sm:h-10">
            {playerCards?.length > 0 && dealerCards?.length < 2 && (
              <>
                <div className="w-16 sm:w-24 h-full mx-0.5 sm:mx-2">
                  {playerCards?.length === 2 &&
                    playerCards[0]?.value[0] === playerCards[1]?.value[0] &&
                    playerCardsSplitted?.length === 0 && (
                      <button
                        className="bg-pink-600 hover:bg-pink-700 text-white shadow shadow-black h-full font-bold rounded w-16 sm:w-24 text-xs sm:text-base tracking-tighter"
                        onClick={playerSplit}
                      >
                        DIVIDIR
                      </button>
                    )}
                </div>
                <div className="w-16 sm:w-24 h-full mx-0.5 sm:mx-2">
                  {playerValueTotal[0] > 0 && playerCardsSplitted.length < 1 && playerCards.length < 3 && (
                    <button
                      className="bg-pink-600 hover:bg-pink-700 text-white shadow shadow-black h-full font-bold rounded w-16 sm:w-24 text-xs sm:text-base tracking-tighter"
                      onClick={playerDouble}
                    >
                      DOBLAR
                    </button>
                  )}
                </div>
              </>
            )}
            <div className="w-16 sm:w-24 h-full mx-0.5 sm:mx-2">
              {dealerCards.length < 1 && (
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow shadow-black h-full font-bold rounded w-16 sm:w-24 text-xs sm:text-base tracking-tighter"
                  onClick={playGame}
                >
                  JUGAR
                </button>
              )}
            </div>
            {playerCards?.length > 0 && dealerCards?.length < 2 && (
              <>
                <div className="w-16 sm:w-24 h-full mx-0.5 sm:mx-2">
                  {playerValueTotal[0] < 21 && (
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white shadow shadow-black h-full font-bold rounded w-16 sm:w-24 text-xs sm:text-base tracking-tighter"
                      onClick={playerHit}
                    >
                      PEDIR
                    </button>
                  )}
                </div>
                <div className="w-16 sm:w-24 h-full mx-0.5 sm:mx-2">
                  {playerValueTotal[0] < 22 && playerCards.length > 1 && (
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white shadow shadow-black h-full font-bold rounded w-16 sm:w-24 text-xs sm:text-base tracking-tighter"
                      onClick={playerStand}
                    >
                      QUEDARSE
                    </button>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="flex justify-between min-h-[72px] sm:min-h-[48px] sm:my-2">
            <div className="flex justify-center items-center bg-white w-12 sm:w-40 min-w-[74px] min-h-[72px] sm:min-h-[48px] rounded-tr sm:rounded">
              <div className="flex flex-wrap justify-center items-center m-auto">
                <p className="text-center font-bold text-xs sm:text-base w-full sm:w-auto mr-1">SALDO:</p>
                <p className="text-center font-bold text-xs sm:text-base w-full sm:w-auto">${balance}</p>
                {balance === 0 && bet === 0 && (
                  <button className="w-6 h-6 sm:ml-2 animate-pulse hover:animate-none" onClick={topUpBalance}>
                    <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.883 511.883">
                      <path
                        className="fill-rose-300"
                        d="M238.913,511.883c-76.967,0-139.359-62.393-139.359-139.359S161.946,233.15,238.913,233.15c76.982,0,139.375,62.407,139.375,139.374S315.895,511.883,238.913,511.883z"
                      />
                      <path
                        className="fill-rose-300"
                        d="M294.12,356.012h59.533V56.721c0-16.418-13.357-29.759-29.76-29.759c-16.418,0-29.773,13.341-29.773,29.759L294.12,356.012L294.12,356.012z"
                      />
                      <path
                        className="fill-rose-300"
                        d="M229.274,329.065h59.518V29.759C288.792,13.356,275.436,0,259.034,0c-16.419,0-29.76,13.355-29.76,29.759V329.065z"
                      />
                      <path
                        className="fill-rose-300"
                        d="M164.414,356.012h59.518V56.721c0-16.418-13.356-29.759-29.759-29.759c-16.418,0-29.759,13.341-29.759,29.759V356.012z"
                      />
                      <path
                        className="fill-rose-300"
                        d="M99.554,372.524h59.518V110.631c0-16.418-13.341-29.759-29.759-29.759c-16.402,0-29.759,13.341-29.759,29.759V372.524z"
                      />

                      <rect x="31.882" y="106.132" className="fill-green-500" width="448.12" height="234.73" />
                      <path
                        className="fill-green-300"
                        d="M95.898,138.14h320.083c0,17.684,14.326,32.009,32.01,32.009v106.694c-17.684,0-32.01,14.324-32.01,32.008H95.898c0-17.684-14.325-32.008-32.008-32.008V170.149C81.574,170.149,95.898,155.824,95.898,138.14z"
                      />
                      <circle className="fill-green-500" cx="255.94" cy="223.492" r="53.35" />
                      <path
                        className="fill-rose-300"
                        d="M436.055,289.45l0.016-0.016c4.857-9.451,5.764-20.229,2.531-30.353c-3.25-10.123-10.232-18.387-19.684-23.261c-5.701-2.937-11.826-4.437-18.199-4.437c-14.98,0-28.557,8.279-35.414,21.589l-71.185,137.97l73.123,34.867l68.797-136.328L436.055,289.45z"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            {playerCards?.length === 0 && (
              <div className="flex flex-wrap w-32 sm:w-72">
                <div className="flex justify-center items-center m-auto">
                  <button
                    className="bg-white border-gray-400 hover:border-gray-500 font-bold rounded-full w-8 sm:w-10 h-8 sm:h-10 m-0.5 text-xs sm:text-base border-4 sm:border-[6px]"
                    value="1"
                    onClick={putBet}
                  >
                    1
                  </button>
                </div>

                <div className="flex justify-center items-center m-auto">
                  <button
                    className="bg-white border-red-500 hover:border-red-700 font-bold rounded-full w-8 sm:w-10 h-8 sm:h-10 m-0.5 text-xs sm:text-base border-4 sm:border-[6px]"
                    value="5"
                    onClick={putBet}
                  >
                    5
                  </button>
                </div>
                <div className="flex justify-center items-center m-auto">
                  <button
                    className="bg-white border-green-500 hover:border-green-700 font-bold rounded-full w-8 sm:w-10 h-8 sm:h-10 m-0.5 text-xs sm:text-base border-4 sm:border-[6px]"
                    value="10"
                    onClick={putBet}
                  >
                    10
                  </button>
                </div>
                <div className="flex justify-center items-center m-auto">
                  <button
                    className="bg-white border-blue-500 hover:border-blue-700 font-bold rounded-full w-8 sm:w-10 h-8 sm:h-10 m-0.5 text-xs sm:text-base border-4 sm:border-[6px]"
                    value="25"
                    onClick={putBet}
                  >
                    25
                  </button>
                </div>
                <div className="flex justify-center items-center m-auto">
                  <button
                    className="bg-white border-orange-500 hover:border-orange-700 font-bold rounded-full w-8 sm:w-10 h-8 sm:h-10 m-0.5 text-xs sm:text-base border-4 sm:border-[6px]"
                    value="50"
                    onClick={putBet}
                  >
                    50
                  </button>
                </div>
                <div className="flex justify-center items-center m-auto">
                  <button
                    className="bg-white border-gray-700 hover:border-gray-900 font-bold rounded-full w-8 sm:w-10 h-8 sm:h-10 m-0.5 text-xs sm:text-base border-4 sm:border-[6px]"
                    value="100"
                    onClick={putBet}
                  >
                    100
                  </button>
                </div>
              </div>
            )}
            <div className="flex flex-wrap justify-between bg-white w-12 sm:w-40 min-w-[74px] min-h-[72px] sm:min-h-[48px] rounded-tl sm:rounded">
              <div className="flex flex-wrap justify-center items-center m-auto">
                <p className="text-center font-bold text-xs sm:text-base w-full sm:w-auto mr-1">APUESTA: </p>
                <p className="text-center font-bold text-xs sm:text-base w-full sm:w-auto"> ${bet}</p>
              </div>
              {playerCards.length < 1 && bet > 0 && (
                <button
                  className="bg-red-500 hover:bg-red-700 text-white rounded-full w-6 h-6 m-auto font-bold"
                  onClick={cancelBet}
                >
                  X
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
