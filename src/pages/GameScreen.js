import { useState, useEffect } from "react";
import { getFirestore } from "../firebase";
import { Loading } from "../components/Loading";

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
      else if (card.value === "ACE") card.value = [1, 11];
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
      if (dealerValueTotal[0] < 17 && dealerValueTotal[1] < 17 && dealerValueTotal[0] > 0 && dealerValueTotal[1] > 0) {
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
    try {
      const response = await getFirestore().collection("cards").get();
      if (response.empty) {
        setError("No hay cartas");
      }
      setCards(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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

  const putBalance = ({ target: { value } }) => {
    const valueInt = parseInt(value);
    if (balance >= valueInt) {
      setBalance(balance - valueInt);
      setBet(bet + valueInt);
    }
  };

  const cancelBet = () => {
    setBalance(balance + bet);
    setBet(0);
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
          <div className="flex justify-center h-6 my-2">
            {message && <h3 className=" bg-red-600 px-2 text-white rounded">{message}</h3>}
          </div>
          <div className="flex h-72 justify-center items-center pl-16 md:pl-24">
            <div className="flex flex-col justify-center">
              <div className="flex justify-center h-full">
                {dealerCards?.map((card, index) => (
                  <div className="-ml-16 md:-ml-24" key={index}>
                    <img className="h-64 bg-black rounded-lg" src={card.image} alt={card.value + card.suit} />
                  </div>
                ))}
              </div>
              <div className="flex justify-center -ml-16 md:-ml-24 mt-2 h-6">
                {dealerCards.length > 0 && (
                  <h2 className="bg-black text-white rounded px-2">
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
            className={`flex h-72 items-center pl-16 md:pl-24 mt-6 ${
              playerCardsSplitted?.length > 0 ? "justify-between" : "justify-center"
            }`}
          >
            {playerCardsSplitted.length > 0 && (
              <div className="flex flex-col mr-32">
                <div className="flex justify-center">
                  {playerCardsSplitted?.map((card, index) => (
                    <div className="-ml-16 md:-ml-24" key={index}>
                      <img className="h-40 sm:h-64 bg-black rounded-lg" src={card.image} alt={card.value + card.suit} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center -ml-16 md:-ml-24 mt-2 h-6">
                  <h2 className="bg-black text-white rounded px-2">
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
                  <div className="-ml-16 md:-ml-24" key={index}>
                    <img
                      className={`${
                        playerCardsSplitted.length > 0 ? "h-40 sm:h-64" : "h-64 sm:h-64"
                      } bg-black rounded-lg`}
                      src={card.image}
                      alt={card.value + card.suit}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center -ml-16 md:-ml-24 mt-2 h-6">
                {playerCards.length > 0 && (
                  <h2 className="bg-black text-white px-2 rounded">
                    {playerValueTotal[0]}
                    {playerValueTotal[0] !== playerValueTotal[1] &&
                      playerValueTotal[1] < 22 &&
                      " / " + playerValueTotal[1]}
                  </h2>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center my-2 h-10">
            {playerCards?.length > 0 && dealerCards?.length < 2 && (
              <>
                <div className="w-16 sm:w-24 h-full mx-0.5 sm:mx-2">
                  {playerCards?.length === 2 &&
                    playerCards[0]?.value[0] === playerCards[1]?.value[0] &&
                    playerCardsSplitted?.length === 0 && (
                      <button
                        className="bg-pink-600 hover:bg-pink-700 text-white shadow shadow-black h-full font-bold rounded w-16 sm:w-24 text-xs sm:text-base"
                        onClick={playerSplit}
                      >
                        DIVIDIR
                      </button>
                    )}
                </div>
                <div className="w-16 sm:w-24 h-full mx-0.5 sm:mx-2">
                  {playerValueTotal[0] > 0 && playerCardsSplitted.length < 1 && playerCards.length < 3 && (
                    <button
                      className="bg-pink-600 hover:bg-pink-700 text-white shadow shadow-black h-full font-bold rounded w-16 sm:w-24 text-xs sm:text-base"
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
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow shadow-black h-full font-bold rounded w-16 sm:w-24 text-xs sm:text-base"
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
                      className="bg-blue-600 hover:bg-blue-700 text-white shadow shadow-black h-full font-bold rounded w-16 sm:w-24 text-xs sm:text-base"
                      onClick={playerHit}
                    >
                      PEDIR
                    </button>
                  )}
                </div>
                <div className="w-16 sm:w-24 h-full mx-0.5 sm:mx-2">
                  {playerValueTotal[0] < 22 && (
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white shadow shadow-black h-full font-bold rounded w-16 sm:w-24 text-xs sm:text-base"
                      onClick={playerStand}
                    >
                      QUEDARSE
                    </button>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="flex justify-between min-h-[48px] py-2">
            <div className="flex flex-wrap justify-center bg-white w-36 min-w-[74px] min-h-[48px] rounded">
              <p className="text-center m-auto font-bold">SALDO: ${balance}</p>
            </div>
            {playerCards?.length === 0 && (
              <div className="flex flex-wrap">
                <div className="flex justify-center items-center mx-auto">
                  <button
                    className="bg-white font-bold rounded-full w-10 h-10 m-1 border-[6px] border-gray-400 hover:border-gray-500"
                    value="1"
                    onClick={putBalance}
                  >
                    1
                  </button>
                </div>

                <div className="flex justify-center items-center mx-auto">
                  <button
                    className="bg-white font-bold rounded-full w-10 h-10 m-1 border-[6px] border-red-500 hover:border-red-700"
                    value="5"
                    onClick={putBalance}
                  >
                    5
                  </button>
                </div>
                <div className="flex justify-center items-center mx-auto">
                  <button
                    className="bg-white font-bold rounded-full w-10 h-10 m-1 border-[6px] border-green-500 hover:border-green-700"
                    value="10"
                    onClick={putBalance}
                  >
                    10
                  </button>
                </div>
                <div className="flex justify-center items-center mx-auto">
                  <button
                    className="bg-white font-bold rounded-full w-10 h-10 m-1 border-[6px] border-blue-500 hover:border-blue-700"
                    value="25"
                    onClick={putBalance}
                  >
                    25
                  </button>
                </div>
                <div className="flex justify-center items-center mx-auto">
                  <button
                    className="bg-white font-bold rounded-full w-10 h-10 m-1 border-[6px] border-orange-500 hover:border-orange-700"
                    value="50"
                    onClick={putBalance}
                  >
                    50
                  </button>
                </div>
                <div className="flex justify-center items-center mx-auto">
                  <button
                    className="bg-white font-bold rounded-full w-10 h-10 m-1 border-[6px] border-gray-700 hover:border-gray-900"
                    value="100"
                    onClick={putBalance}
                  >
                    100
                  </button>
                </div>
              </div>
            )}
            <div className="flex flex-wrap justify-center bg-white w-36 min-w-[74px] min-h-[48px] rounded">
              <p className="text-center m-auto font-bold">APUESTA: ${bet}</p>
              {playerCards.length < 1 && (
                <button
                  className="bg-red-500 hover:bg-red-700 rounded-full w-6 h-6 m-auto font-bold"
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
