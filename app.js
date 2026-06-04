export default function CricketAuctionManager() {
  const teams = [
    { name: "Warriors", purse: 1000 },
    { name: "Titans", purse: 1000 },
    { name: "Kings", purse: 1000 },
    { name: "Royals", purse: 1000 },
    { name: "Strikers", purse: 1000 },
    { name: "Blasters", purse: 1000 },
    { name: "Riders", purse: 1000 },
    { name: "Falcons", purse: 1000 },
  ];

  const samplePlayers = [
    {
      id: 1,
      name: "Virat Kohli",
      role: "Batsman",
      basePrice: 100,
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Rohit Sharma",
      role: "Batsman",
      basePrice: 90,
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Jasprit Bumrah",
      role: "Bowler",
      basePrice: 85,
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Hardik Pandya",
      role: "All-Rounder",
      basePrice: 95,
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const React = window.React;
  const { useState } = React;

  const [teamData, setTeamData] = useState(
    teams.map((t) => ({ ...t, players: [] }))
  );

  const [players, setPlayers] = useState(samplePlayers);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bidAmount, setBidAmount] = useState(
    samplePlayers[0].basePrice
  );
  const [selectedTeam, setSelectedTeam] = useState(teams[0].name);
  const [history, setHistory] = useState([]);

  const currentPlayer = players[currentIndex];

  const sellPlayer = () => {
    const teamIndex = teamData.findIndex(
      (t) => t.name === selectedTeam
    );

    if (teamData[teamIndex].purse < bidAmount) {
      alert("Not enough purse balance!");
      return;
    }

    const updatedTeams = [...teamData];

    updatedTeams[teamIndex].purse -= bidAmount;
    updatedTeams[teamIndex].players.push({
      ...currentPlayer,
      soldPrice: bidAmount,
    });

    setTeamData(updatedTeams);

    setHistory([
      {
        player: currentPlayer.name,
        team: selectedTeam,
        amount: bidAmount,
      },
      ...history,
    ]);

    nextPlayer();
  };

  const unsoldPlayer = () => {
    nextPlayer();
  };

  const nextPlayer = () => {
    if (currentIndex < players.length - 1) {
      const next = currentIndex + 1;
      setCurrentIndex(next);
      setBidAmount(players[next].basePrice);
    } else {
      alert("Auction Finished!");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-yellow-400">
        Cricket League Auction Manager
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-zinc-900 rounded-3xl shadow-2xl p-6 col-span-2">
          <img
            src={currentPlayer.image}
            alt={currentPlayer.name}
            className="w-full h-96 object-cover rounded-2xl mb-4"
          />

          <h2 className="text-3xl font-bold mb-2">
            {currentPlayer.name}
          </h2>

          <p className="text-zinc-300 mb-2">
            Role: {currentPlayer.role}
          </p>

          <p className="text-xl mb-4 text-green-400">
            Base Price: {currentPlayer.basePrice} pts
          </p>

          <div className="flex gap-4 items-center flex-wrap">
            <input
              type="number"
              value={bidAmount}
              onChange={(e) => setBidAmount(Number(e.target.value))}
              className="bg-zinc-800 p-3 rounded-xl w-40 text-white"
            />

            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="bg-zinc-800 p-3 rounded-xl text-white"
            >
              {teamData.map((team) => (
                <option key={team.name} value={team.name}>
                  {team.name}
                </option>
              ))}
            </select>

            <button
              onClick={sellPlayer}
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-2xl font-bold"
            >
              SOLD
            </button>

            <button
              onClick={unsoldPlayer}
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-2xl font-bold"
            >
              UNSOLD
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl shadow-2xl p-6 overflow-auto max-h-[800px]">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            Team Purse
          </h2>

          <div className="space-y-4">
            {teamData.map((team) => (
              <div
                key={team.name}
                className="bg-zinc-800 p-4 rounded-2xl"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-bold">{team.name}</span>
                  <span className="text-green-400">
                    {team.purse} pts
                  </span>
                </div>

                <div className="text-sm text-zinc-300">
                  Players: {team.players.length}
                </div>

                <div className="mt-2 text-sm">
                  {team.players.map((p) => (
                    <div key={p.id}>
                      • {p.name} ({p.soldPrice})
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-zinc-900 rounded-3xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">
          Auction History
        </h2>

        <div className="space-y-2 max-h-80 overflow-auto">
          {history.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-800 p-3 rounded-xl flex justify-between"
            >
              <span>{item.player}</span>
              <span>{item.team}</span>
              <span className="text-green-400">{item.amount} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
